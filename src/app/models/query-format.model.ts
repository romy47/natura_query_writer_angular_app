export class QueryFormatModel {
    public categories: string[] = [];
    public orTerms: OrTerm[] = [];
}

export class AndTerm {
    public query: string[] = [];
}

export class OrTerm {
    public andTerms: AndTerm[] = [];
}
