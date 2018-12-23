import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http/';
import { HttpParams, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { QueryFormatModel } from './models/query-format.model';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) { }

  private rootDataObject = new BehaviorSubject<QueryFormatModel>(null);
  rootDataObject$ = this.rootDataObject.asObservable();
  updateRootObject(obj: QueryFormatModel) {
    this.rootDataObject.next(obj);
  }

  public getSearchResult(query: string): Observable<any> {
    console.log(query);
    let params = new HttpParams();
    params = params.append('action', 'opensearch');
    params = params.append('format', 'json');
    params = params.append('list', 'search');
    params = params.append('search', query);
    params = params.append('sroffset', '10');
    params = params.append('origin', '*');
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
    return this.http.get('https://en.wikipedia.org/w/api.php', {params: params, headers: headers});
  }
}
