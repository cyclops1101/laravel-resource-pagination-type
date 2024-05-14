export interface LaravelPaginationLinks {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export interface LaravelPaginationControlLinks {
    url: string | null;
    label: string;
    active: boolean;
}

export interface LaravelPaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
    links?: LaravelPaginationControlLinks[];
}

export interface LaravelPaginatedResource<T> {
    data: T[];
    links: LaravelPaginationLinks;
    meta?: LaravelPaginationMeta;
}
