import { Component, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  /**
   * 
   * @param renderer
   */
  constructor(private renderer: Renderer2, private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.renderer.setStyle(document.body, 'background', 'url("../../../assets/images/form-bg.png")');
    this.renderer.setStyle(document.body, 'background-size', 'cover');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'background-attachment', 'fixed');
  }

  loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  })

  get email(): any {
    return this.loginForm.get('email');
  }

  get password(): any {
    return this.loginForm.get('password');
  }

  onclickLoginFormSubmit() {
    this.authService.login(this.loginForm.value).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      // this.router.navigateByUrl('/');
      Swal.fire({
        icon: 'success',
        title: 'Done',
        text: 'Login Successfull',
        confirmButtonColor: '#eca508'
      }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/').then(() => {
          window.location.reload();
        });
      }
    });
    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.message,
        confirmButtonColor: '#eca508'
      })
    }
    )
  }
}
