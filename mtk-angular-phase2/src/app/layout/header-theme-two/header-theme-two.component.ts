import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-theme-two',
  templateUrl: './header-theme-two.component.html',
  styleUrls: ['./header-theme-two.component.css']
})
export class HeaderThemeTwoComponent implements OnInit {

  userInfo;

  constructor() { }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

}
