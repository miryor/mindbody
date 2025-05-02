import { AuthorizationHeaders } from './authService';
import { siteRepository, Location } from './repositories/SiteRepository';
import { classRepository } from './repositories/ClassRepository';
import { appointmentRepository } from './repositories/AppointmentRepository';
import { productRepository } from './repositories/ProductRepository';
import { packageRepository } from './repositories/PackageRepository';
import { clientRepository } from './repositories/ClientRepository';
import { adminRepository } from './repositories/AdminRepository';

// Re-export or redefine necessary types/interfaces used by the service methods
// Or import them from repository files if they are exported there

/**
 * MindbodyService acts as a facade over the various repositories,
 * providing a simplified interface for accessing Mindbody data and operations.
 */
export class MindbodyService {

    // --- Site Operations ---
    async getSessionTypes(headers: AuthorizationHeaders) {
        // Simple pass-through for now
        return await siteRepository.getSessionTypes(headers);
    }

    async getLocations(headers: AuthorizationHeaders) {
        // Simple pass-through for now
        return await siteRepository.getLocations(headers);
    }

    // --- Class Operations ---
    async getClasses(headers: AuthorizationHeaders, startDate: string, endDate: string, timezone: string, options: { limit?: number; offset?: number } = {}) {
        return await classRepository.getClasses(headers, startDate, endDate, timezone, options);
    }

    // --- Appointment Operations ---
    async getBookableItems(
        headers: AuthorizationHeaders,
        startDate: string,
        endDate: string,
        timezone: string,
        options: { sessionTypeIds?: number[]; staffIds?: number[]; locationIds?: number[]; limit?: number; offset?: number; } = {}
    ) {
        // Logic to fetch all session types if none are provided
        let finalSessionTypeIds = options.sessionTypeIds;
        if (!finalSessionTypeIds || finalSessionTypeIds.length === 0) {
            console.log('MindbodyService: No sessionTypeIds provided for getBookableItems, fetching all...');
            const allTypes = await siteRepository.getSessionTypes(headers);
            finalSessionTypeIds = allTypes.map(t => t.Id);
            if (!finalSessionTypeIds || finalSessionTypeIds.length === 0) {
                console.warn('MindbodyService: No session types found for site, bookable items query might fail or return unexpected results.');
                // Proceed with empty array, API might handle it or error appropriately
                 finalSessionTypeIds = [];
            }
        }

        return await appointmentRepository.getBookableItems(headers, startDate, endDate, timezone, {
            ...options,
            sessionTypeIds: finalSessionTypeIds, // Pass the potentially fetched IDs
        });
    }

    // --- Client Operations ---
    async addClient(headers: AuthorizationHeaders, clientData: any) { // Use specific type
        // Add validation or transformation if needed
        return await clientRepository.addClient(headers, clientData);
    }

    async sendPasswordResetEmail(headers: AuthorizationHeaders, resetData: any) { // Use specific type
        return await clientRepository.sendPasswordResetEmail(headers, resetData);
    }

    // --- Product Operations ---
    async getProducts(headers: AuthorizationHeaders, options: any = {}) { // Use specific type
        return await productRepository.getProducts(headers, options);
    }

    async purchaseProduct(headers: AuthorizationHeaders, options: any) { // Use specific type
        // Add validation (e.g., ensure clientId is present)
        return await productRepository.purchaseProduct(headers, options);
    }

    async purchaseGiftCard(headers: AuthorizationHeaders, options: any) { // Use specific type
        // Add validation
        return await productRepository.purchaseGiftCard(headers, options);
    }

    // --- Package Operations ---
    async getPackages(headers: AuthorizationHeaders, options: any = {}) { // Use specific type
        return await packageRepository.getPackages(headers, options);
    }

    async purchasePackage(headers: AuthorizationHeaders, options: any) { // Use specific type
        // Add validation
        return await packageRepository.purchasePackage(headers, options);
    }

    // --- Admin Operations ---
    async getAdminServices(headers: AuthorizationHeaders, options: any = {}) { // Use specific type
        // Add role checks or specific logic here if needed
        return await adminRepository.getServices(headers, options);
    }

    async updateAdminServicePrice(headers: AuthorizationHeaders, serviceId: number, price: number) {
        // Add role checks or specific logic here if needed
        return await adminRepository.updateServicePrice(headers, serviceId, price);
    }

}

// Export a singleton instance
export const mindbodyService = new MindbodyService(); 