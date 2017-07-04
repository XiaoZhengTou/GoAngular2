import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-jsplumb-demo',
  templateUrl: './jsplumb-demo.component.html',
  styleUrls: ['./jsplumb-demo.component.css']
})
export class JsplumbDemoComponent {
  name: string;

  message: string;

  public max: number = 200;
  public showWarning: boolean;
  public dynamic: number;
  public type: string;

  public constructor() {
    this.random();
  }

  public random(): void {
    let value = Math.floor((Math.random() * 100) + 1);
    let type: string;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    this.showWarning = (type === 'danger' || type === 'warning');
    this.dynamic = value;
    this.type = type;
  }

  public alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  }


  onClick() {
    this.message = 'Hello ' + this.name;
  }
}

