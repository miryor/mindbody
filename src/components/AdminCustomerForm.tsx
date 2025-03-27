import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
}

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  birthDate?: string;
}

export const AdminCustomerForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!formData.email.includes('@')) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.birthDate) {
      errors.birthDate = 'Birth date is required';
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when user starts typing
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('FORM SUBMIT TRIGGERED');
    e.preventDefault();
    
    console.log('%c=== Starting form submission process ===', 'color: blue; font-weight: bold');
    console.dir(formData);
    
    setError(null);
    
    // Validate form before submission
    if (!validateForm()) {
      console.log('%cForm validation failed', 'color: red');
      return;
    }

    try {
      setStatus('loading');
      console.log('%cAttempting to create client...', 'color: blue');

      // Call our server API to create the client
      const response = await fetch('http://localhost:3001/api/client/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          birthDate: formData.birthDate,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create client');
      }

      // Send password reset email
      /*const resetResponse = await fetch('http://localhost:3001/api/client/password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
        }),
      });

      const resetData = await resetResponse.json();

      if (!resetResponse.ok) {
        console.error('Failed to send password reset email:', resetData.error);
      }*/

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', birthDate: '' });
    } catch (err) {
      console.error('Client creation error:', err);
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Failed to create customer');
    }
  };

  return (
    <div className="admin-form">
      <h2>Create Test Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={validationErrors.firstName ? 'error' : ''}
          />
          {validationErrors.firstName && (
            <div className="validation-error">{validationErrors.firstName}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={validationErrors.lastName ? 'error' : ''}
          />
          {validationErrors.lastName && (
            <div className="validation-error">{validationErrors.lastName}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={validationErrors.email ? 'error' : ''}
          />
          {validationErrors.email && (
            <div className="validation-error">{validationErrors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Birth Date:</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className={validationErrors.birthDate ? 'error' : ''}
          />
          {validationErrors.birthDate && (
            <div className="validation-error">{validationErrors.birthDate}</div>
          )}
        </div>
        <button 
          type="submit" 
          disabled={status === 'loading'}
          onClick={() => console.log('Button clicked')}
        >
          {status === 'loading' ? 'Creating...' : 'Create Customer'}
        </button>
      </form>

      {status === 'success' && (
        <div className={error ? 'warning-message' : 'success-message'}>
          {error || 'Customer created successfully!'}
        </div>
      )}
      {status === 'error' && (
        <div className="error-message">
          Error: {error}
        </div>
      )}

      <style>{`
        .admin-form {
          max-width: 400px;
          margin: 2rem auto;
          padding: 2rem;
          border: 1px solid #eee;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .form-group {
          margin-bottom: 1rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        input.error {
          border-color: #dc3545;
          background-color: #fff8f8;
        }

        .validation-error {
          color: #dc3545;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        button {
          width: 100%;
          padding: 0.75rem;
          background-color: #00A4E3;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        button:hover {
          background-color: #0093CC;
        }

        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .success-message {
          margin-top: 1rem;
          padding: 1rem;
          background-color: #e7f7ed;
          color: #0a6b2d;
          border-radius: 4px;
          text-align: center;
        }

        .warning-message {
          margin-top: 1rem;
          padding: 1rem;
          background-color: #fff3cd;
          color: #856404;
          border-radius: 4px;
          text-align: center;
        }

        .error-message {
          margin-top: 1rem;
          padding: 1rem;
          background-color: #fde8e8;
          color: #c81e1e;
          border-radius: 4px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}; 