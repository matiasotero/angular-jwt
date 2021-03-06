import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';  

  constructor(private authService:AuthService) { }

  Login(){
    console.log("you are login in")
    this.authService.login(this.email, this.password)
  }

  ngOnInit() {
  }

}
