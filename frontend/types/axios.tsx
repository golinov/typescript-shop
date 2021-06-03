export interface PaginatedResponse {
    data: [];
    total: number;
    limit: number;
    pages: number;
    page: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number|null;
    nextPage: number;
}