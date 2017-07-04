import { Component, OnInit, ElementRef  } from '@angular/core';
import { fadeIn } from '../animations/fade-in';

@Component({
  selector: 'app-use-jquery',
  templateUrl: './use-jquery.component.html',
  styleUrls: ['./use-jquery.component.css'],
  animations: [fadeIn ]
})
export class UseJqueryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#datepicker').datepicker();
  }

}
