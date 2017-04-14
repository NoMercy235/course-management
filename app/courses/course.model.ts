export interface Course {
    id: number;
    begin: number;
    end: number;
    title: string;
    candidate_limit: string;
    candidates: any[]; // TODO: should be User[]
}