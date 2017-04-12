export interface APIResponse {
    data: { [key: string]: any[] };
    pagination?: object;
    status?: string;
}