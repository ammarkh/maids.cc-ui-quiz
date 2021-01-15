import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mdbTable: any;
  constructor() { }

  searchText: string = '';



  ngOnInit(): void {
  }

  searchItems() {
    
  }

}
