declare var require: any;
declare var createTable: any;
import { Component, OnInit } from '@angular/core';
import products from 'src/assets/js/myjson.json';

var type=products.Food;

@Component({
  selector: 'app-places4x4',
  templateUrl: './places4x4.component.html',
  styleUrls: ['./places4x4.component.css']
})
export class Places4x4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    createTable(type);
  }

};
