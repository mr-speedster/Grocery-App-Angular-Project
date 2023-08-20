import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn: boolean;
  user: any;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.checkToken();
  }

  onLogin() {
    this.router.navigateByUrl('login')
  }

  onLogOut() {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }

  onUserProfile() {
    this.user = localStorage.getItem('user');
    if (this.user) {
      this.user = JSON.parse(this.user)
      Swal.fire({
        icon: 'info',
        title: 'User Profile',
        html:
          this.user.firstName + '<br>' + this.user.email + '<br>' + this.user.mobile + '<br>',
        confirmButtonColor: '#eca508'
      })
    }
  }
}
