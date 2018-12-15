import { getGuid } from "../app.constants";

export class QueryFormatModel {
    public categories: QueryGroup[] = [];
    public queryGroups: QueryGroup[] = [];
}

export class QueryGroup {
    public label = 'Empty';
    public expanded = true;
    public id: string;
    public isSingle = true;
    public verticalIndex: number;
    public horizontalIndex: number;
    public type: string;
    public query = '';
    public queryGroups: QueryGroup[] = [];
    public children = this.queryGroups;

    constructor() {
        this.id = getGuid();
    }
}
