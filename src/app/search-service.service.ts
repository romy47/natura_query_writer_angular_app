import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http/';
import { HttpParams, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) { }

  public getSearchResult(query: string): Observable<any> {
    console.log(query);
    // const requestOption = new RequestOptions({ headers: this.authService.getAuthenticatedRequestHeaders() });
    // return this.http.get('https://en.wikipedia.org/w/api.php', requestOption);
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
