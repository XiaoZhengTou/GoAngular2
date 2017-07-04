/**
 * Created by Administrator on 2017/6/15 0015.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostTableService {
  public delURL: string;
  public toEdiURL: string;

  constructor(public http: Http) {
  }

  public getPostTable(dataURL: string) {
    return this.http.get(dataURL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));

  }

  public del(postId: number) {
    return this.http.delete(this.delURL)
      .map((res: Response) => res.json());
  }

  public toEdit(postId: number): Observable<any> {
    return this.http.get(this.toEdiURL)
      .map((res: Response) => res.json());
  }
}
