import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';
import { User } from '../model/user-model';
import { ForgetPwdService } from './forget-pwd.service';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css'],
  animations: [fadeIn]
})
export class ForgetPwdComponent implements OnInit {
  public user: User = new User();
  public message: string;
  public messageType: string;

  constructor(public forgetPwdService: ForgetPwdService) {
  }

  ngOnInit() {
  }

  public sendValiadtionEmail(): void {
    this.forgetPwdService.sendValidationEmail(this.user.email)
      .subscribe(
        data => {
          this.message = data.message;
          this.messageType = 'success';
        }
        ,
        error => {
          this.message = error.message;
          this.messageType = 'danger';
        }
      );
  }
}
