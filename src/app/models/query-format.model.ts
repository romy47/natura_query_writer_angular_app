import { getGuid } from "../app.constants";

export class QueryFormatModel {
    public categories: QueryGroup[] = [];
    public queryGroups: QueryGroup[] = [];
    public dateFrom: QueryGroup;
    public dateTo: QueryGroup;
    public date: QueryGroup[] = [];
    public language: QueryGroup[] = [];
    public places: QueryGroup[] = [];
}

export class QueryGroup {
    public label = 'Empty';
    public expanded = true;
    public id: string;
    public isSingle = true;
    public verticalIndex = 0;
    public horizontalIndex: number;
    public type: string;
    public query: any;
    public queryGroups: QueryGroup[] = [];
    public children = this.queryGroups;

    constructor() {
        this.id = getGuid();
    }
}
