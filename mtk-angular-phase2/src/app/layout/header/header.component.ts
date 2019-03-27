import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }


  ischeck = false;

  isChecked() {
    if ( this.ischeck ) {
      this.ischeck = false;
    } else {
      this.ischeck = true;
    }
  }

  ngOnInit() {
  }

}
