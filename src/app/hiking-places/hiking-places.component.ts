declare var require: any;
declare var createTable: any;
var type=products.Dogs;
import { Component, OnInit } from '@angular/core';
import products from 'src/assets/js/myjson.json';


@Component({
  selector: 'app-hiking-places',
  templateUrl: './hiking-places.component.html',
  styleUrls: ['./hiking-places.component.css']
})
export class HikingPlacesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    createTable(type);
  }

}
