import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';
import {UserLoginService} from './user-login.service';
import {Observable} from 'rxjs/Observable';

import {User} from '../model/user-model';
import {fadeIn} from '../../animations/fade-in';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  animations: [fadeIn]
})
export class UserLoginComponent implements OnInit {
  public user: User = new User();
  public error: Error;

  constructor(public router: Router,
              public activatedRoute: ActivatedRoute,
              public userLoginService: UserLoginService) {
    console.log(this.userLoginService);
  }

  ngOnInit() {
    console.log('---user-login-component---');
    console.log(this.router);
    console.log(this.activatedRoute);

    const activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    const routerState: RouterState = this.router.routerState;
    const routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

    console.log(activatedRouteSnapshot);
    console.log(routerState);
    console.log(routerStateSnapshot);
  }

  public doLogin(): void {
    console.log(this.user);
    this.userLoginService.login(this.user);
  }

  public doLogout(): void {
    this.userLoginService.logout();
    this.router.navigateByUrl('home');
  }

  public forgetPwd(): void {
    this.router.navigateByUrl('forgetpwd');
  }
}
