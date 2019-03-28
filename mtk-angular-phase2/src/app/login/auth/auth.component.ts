import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginData = {
    unitCode: '',
    userAccount: '',
    userPwd: ''
  };

  userInfo = {
    userId: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.userInfo.userId = this.loginData.userAccount;
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    this.router.navigate(['/article']);
  }

}
