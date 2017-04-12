export interface Course {
    id: number;
    begin: Date;
    end: Date;
    title: string;
    candidate_limit: string;
    candidates: any[]; // TODO: should be User[]
}