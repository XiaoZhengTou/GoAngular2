/**
 * Created by Administrator on 2017/6/8 0008.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, Request, Response, RequestMethod, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {User} from '../model/user-model';

@Injectable()
export class UserRegisterService {
  public userRegisterURL = 'mock-data/user-register-mock.json';
  public testEmailUrl = '';
  public subject: Subject<User> = new Subject<User>();

  constructor(public http: Http) {

  }

  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  public register(user: User) {
    console.log(user);

    // 向后台post数据的写法如下
    // const data = new URLSearchParams();
    // data.append('email', user.email);
    // data.append('password', user.password);
    // return this.http.post(this.userRegisterURL, data);

    return this.http
      .get(this.userRegisterURL)
      .map((response: Response) => {
        const user = response.json();
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.subject.next(user);
      });
  }

  public testEmail(email: string) {
    return this.http.get(this.testEmailUrl)
      .map((response: Response) => response.json());
  }
}
