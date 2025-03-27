interface ClientInfo {
  Id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  MobilePhone: string;
  HomePhone: string;
  WorkPhone: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  State: string;
  PostalCode: string;
  Country: string;
  EmergencyContactInfoName: string;
  EmergencyContactInfoPhone: string;
  EmergencyContactInfoRelationship: string;
  BirthDate: string;
  Gender: string;
  CreationDate: string;
  LastModifiedDateTime: string;
  Action: string;
  ClientCreditCard: {
    LastFour: string;
    CardType: string;
    ExpirationDate: string;
  }[];
  ClientRelationships: any[];
  CustomClientFields: {
    Name: string;
    Value: string;
  }[];
  LiabilityRelease: boolean;
  ProspectStage: {
    Id: number;
    Name: string;
  };
  UniqueId: number;
  MembershipIcon: number;
  SuspensionInfo: any;
  AccountBalance: number;
  AvailableCredits: number;
}

class AuthService {
  private static instance: AuthService;
  private clientInfo: ClientInfo | null = null;

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async checkSession(): Promise<boolean> {
    try {
      const response = await fetch('http://localhost:3001/api/oauth/session', {
        credentials: 'include',
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      this.clientInfo = data.clientInfo;
      return true;
    } catch (error) {
      console.error('Session check failed:', error);
      return false;
    }
  }

  getClientInfo(): ClientInfo | null {
    return this.clientInfo;
  }

  isAuthenticated(): boolean {
    return this.clientInfo !== null;
  }
}

export const authService = AuthService.getInstance(); 