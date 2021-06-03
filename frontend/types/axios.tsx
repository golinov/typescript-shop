export interface PaginatedResponse<Generic> {
    data: Generic[];
    total: number;
    limit: number;
    pages: number;
    page: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number|null;
    nextPage: number;
}