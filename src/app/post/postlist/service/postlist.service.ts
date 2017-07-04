/**
 * Created by Administrator on 2017/6/12 0012.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Post} from '../../model/post-model';

@Injectable()
export class PostListService {
  public postListURL = 'mock-data/postlist-mock.json';
  public postListSearchURL = 'mock-data/postlist-search-mock.json';

  constructor(public http: Http) {
  }

  public getPostList(searchText: string, page: number = 1): Observable<Post[]> {
    let url = this.postListURL;
    const params = new URLSearchParams();
    if (searchText) {
      params.set('searchText', searchText);
      url = this.postListSearchURL;
      console.log(`searchText=${searchText}`);
    }
    params.set('page', String(page));

    return this.http
      .get(url, {search: params})
      .map((res: Response) => {
        const result = res.json();
        return result;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}

