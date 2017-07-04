import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {User} from '../model/user-model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input()
  public panelTitle: string;

  @Input()
  public userId: string;

  @Output()
   public follow = new EventEmitter<string>();

  public currentUser: User;
  public userInfoURL = 'user/getUserInfo';

  constructor(public http: Http) {
    // 组件初始化完成之后，panelTitle才会有值
    console.log(this.panelTitle);
  }

  ngOnInit() {
    // 组件初始化完成之后，pannelTitlr才会有值
    console.log(this.panelTitle);
  }

  public loadUserInfo() {
    this.userInfoURL = this.userInfoURL + '/' + this.userId;
    return this.http.get(this.userInfoURL)
      .map((response: Response) => {
        const user = response.json();
        return user;
      })
      .subscribe(
        data => {
          console.log('用户信息' + data);
        },
        error => {
          console.log(error);
        }
      );
  }

  public followBtnClick() {
    this.follow.emit('follow');
  }
}
