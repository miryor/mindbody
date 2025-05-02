import { AxiosRequestConfig } from 'axios';
import { mindbodyApi } from '../mindbodyApi';
import { AuthorizationHeaders } from '../authService';

// --- Interfaces (Define based on actual API structures) ---

// Request body for adding a client
interface AddClientRequest {
    FirstName: string;
    LastName: string;
    Email: string;
    Username?: string; // Usually same as email
    ReferredBy?: string;
    Test?: boolean;
    SendAccountEmails?: boolean;
    Action?: string; // e.g., "Added"
    BirthDate?: string; // Format YYYY-MM-DD
    // Add other fields as needed: Address, Phone, etc.
}

// Response structure for adding a client
interface ClientInfo {
    Id: string; // Or number?
    FirstName: string;
    LastName: string;
    Email: string;
    BirthDate: string;
    // ... other client fields
}
interface AddClientResponse {
    Client: ClientInfo;
    // ... other potential fields
}

// Request body for password reset
interface PasswordResetRequest {
    UserEmail: string;
    UserFirstName: string;
    UserLastName: string;
}

// Response structure for password reset (often minimal or just status)
interface PasswordResetResponse {
    // API might return nothing specific on success, just 2xx status
    // Define if there are fields
}

export class ClientRepository {

    /**
     * Adds a new client profile to Mindbody.
     */
    async addClient(
        headers: AuthorizationHeaders,
        clientData: AddClientRequest
    ): Promise<AddClientResponse> {
        console.log('ClientRepository: Adding new client...', { email: clientData.Email });

        // Set defaults if not provided
        const requestBody: AddClientRequest = {
            Username: clientData.Email, // Default username to email
            ReferredBy: "Website",
            Test: false, // Default to false (live environment)
            SendAccountEmails: true,
            Action: "Added",
            ...clientData, // Spread provided data, potentially overwriting defaults
        };

        try {
            const response = await mindbodyApi.post<AddClientResponse>('/client/addclient', requestBody, { headers });
            console.log('ClientRepository: Client added successfully', { clientId: response.data.Client?.Id });
            return response.data;
        } catch (error) {
            console.error('ClientRepository: Error adding client:', error);
            throw error; // Re-throw for the route handler
        }
    }

    /**
     * Sends a password reset email to a client.
     */
    async sendPasswordResetEmail(
        headers: AuthorizationHeaders,
        resetData: PasswordResetRequest
    ): Promise<PasswordResetResponse> { // Return type might be void or a simple success object
        console.log('ClientRepository: Sending password reset email...', { email: resetData.UserEmail });

        try {
            // This endpoint might return 204 No Content on success, response data could be empty
            const response = await mindbodyApi.post<PasswordResetResponse>('/client/sendpasswordresetemail', resetData, { headers });
            console.log('ClientRepository: Password reset email sent successfully.');
            // Return response data or a success indicator
            return response.data || { success: true }; // Adapt based on actual API behavior
        } catch (error) {
            console.error('ClientRepository: Error sending password reset email:', error);
            throw error; // Re-throw for the route handler
        }
    }
}

export const clientRepository = new ClientRepository(); 