import { Component, OnInit } from '@angular/core';
import { AmapComponent } from './amap/amap.component';
import { flyIn } from '../../animations/fly-in';
@Component({
  selector: 'app-gaode-map',
  templateUrl: './gaode-map.component.html',
  styleUrls: ['./gaode-map.component.css'],
  animations: [ flyIn ]
})
export class GaodeMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
