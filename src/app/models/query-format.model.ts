export class QueryFormatModel {
    public categories: string[] = [];
    public orTerms: OrTerm[] = [];
}

export class AndTerm {
    public index: number;
    public query: string[] = [];
}

export class OrTerm {
    public index: number;
    public andTerms: AndTerm[] = [];
}
