import NodeCache from 'node-cache';

/**
 * Simple wrapper around node-cache for centralized cache management.
 */
class CacheService {
    private cache: NodeCache;

    /**
     * Initializes the cache instance.
     * @param stdTTL Default time-to-live in seconds for cache entries.
     * @param checkperiod Check interval in seconds for expired keys.
     */
    constructor(stdTTL: number = 60 * 5, checkperiod: number = 60 * 2) { // Default TTL 5 mins, check every 2 mins
        this.cache = new NodeCache({ stdTTL, checkperiod });
        console.log(`CacheService initialized with stdTTL: ${stdTTL}s, checkperiod: ${checkperiod}s`);
    }

    /**
     * Retrieves an item from the cache.
     * @param key The cache key.
     * @returns The cached value, or undefined if not found or expired.
     */
    get<T>(key: string): T | undefined {
        const value = this.cache.get<T>(key);
        // console.log(`Cache GET: key=${key}, found=${value !== undefined}`); // Verbose logging
        return value;
    }

    /**
     * Stores an item in the cache.
     * @param key The cache key.
     * @param value The value to store.
     * @param ttl Optional time-to-live in seconds for this specific entry.
     * @returns True if the item was set successfully.
     */
    set<T>(key: string, value: T, ttl?: number): boolean {
        const success = ttl ? this.cache.set(key, value, ttl) : this.cache.set(key, value);
        // console.log(`Cache SET: key=${key}, ttl=${ttl || 'default'}, success=${success}`); // Verbose logging
        return success;
    }

    /**
     * Checks if a key exists in the cache (and hasn't expired).
     * @param key The cache key.
     * @returns True if the key exists and is valid.
     */
    has(key: string): boolean {
        const exists = this.cache.has(key);
        // console.log(`Cache HAS: key=${key}, exists=${exists}`); // Verbose logging
        return exists;
    }

    /**
     * Deletes an item from the cache.
     * @param key The cache key.
     * @returns The number of keys deleted (0 or 1).
     */
    del(key: string): number {
        const deletedCount = this.cache.del(key);
        console.log(`Cache DEL: key=${key}, deleted=${deletedCount > 0}`);
        return deletedCount;
    }

    /**
     * Flushes the entire cache.
     */
    flush(): void {
        this.cache.flushAll();
        console.log('Cache FLUSHED');
    }
}

// Export a singleton instance
const cacheServiceInstance = new CacheService();

export { cacheServiceInstance as CacheService }; 