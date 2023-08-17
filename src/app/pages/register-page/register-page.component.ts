import { Component, Renderer2 } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  
  userModel = new UserModel();

  /**
   * 
   * @param renderer
   */
  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background', 'url("../../../assets/images/form-bg.png")');
    this.renderer.setStyle(document.body, 'background-size', 'cover');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'background-attachment', 'fixed');
  }

  onclickFormSubmit(){
    console.log(this.userModel);
  }
}
