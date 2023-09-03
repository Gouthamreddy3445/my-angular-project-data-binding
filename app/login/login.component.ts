import { Component, OnInit,Input} from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(user: UserService) { 
    this.user=user;
    console.log(user)
  }
  public greeting="";
  onClick(){
     this.greeting="Hi Hello";
  }

@Input("myUser") user:UserService;

  ngOnInit() {
  }

  login(user:UserService) {

  alert(user.name);

  }


}