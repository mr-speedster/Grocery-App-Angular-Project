import { Component, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  constructor(private renderer: Renderer2, private formBuilder: FormBuilder) {
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
    return this.loginForm.get('email')
  }

  get password(): any {
    return this.loginForm.get('password')
  }
}
