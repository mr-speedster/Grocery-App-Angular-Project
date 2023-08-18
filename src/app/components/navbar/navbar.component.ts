import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  isLoggedIn:boolean;
  user:any;

  constructor(private authService:AuthService, private router: Router){
    this.isLoggedIn = this.authService.checkToken();
  }

  onLogin(){
    this.router.navigateByUrl('login')
  }

  onLogOut(){
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }

  onUserProfile(){
    this.user = localStorage.getItem('user');
    alert(this.user.firstname)
  }
}
