export class QueryFormatModel {
    public categories: string[] = [];
    public queryGroups: QueryGroup[] = [];
}

export class QueryGroup {
    public id: string;
    public isSingle = true;
    public verticalIndex: number;
    public horizontalIndex: number;
    public type: string;
    public query: string;
    public queryGroups: QueryGroup[] = [];

    constructor() {
        this.id = new Date().toString();
    }
}
