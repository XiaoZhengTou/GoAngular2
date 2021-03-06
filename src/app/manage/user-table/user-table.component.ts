import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {flyIn} from '../../animations/fly-in';
import {fadeIn} from '../../animations/fade-in';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  animations: [flyIn ]
})
export class UserTableComponent implements OnInit {
  public maxSize = 5;
  public itemsPerPage = 5;
  public totalItems = 15;
  public currentPage = 1;
  public numPages;

  constructor(public router: Router,
              public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getUsersByPage(params['page'])
    );
  }

  public getUsersByPage(page: Number): void {
    console.log('页码>' + page);
  }

  public pageChanged(event): void {
    this.router.navigateByUrl('manage/usertable/page/' + event.page);
  }

  public newUser(userId: number): void {
    this.router.navigateByUrl('manage/usertable/newuser');
  }

  public blockUser(userId: number): void {
    console.log(userId);
  }

  public unBlockUser(userId: Number): void {
    console.log(userId);
  }

  public resetPwd(userId: Number): void {
    console.log(userId);
  }
}
