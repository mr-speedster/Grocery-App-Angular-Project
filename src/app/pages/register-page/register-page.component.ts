import { Component, Renderer2 } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

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
  constructor(private renderer: Renderer2, private authService: AuthService) {
    this.renderer.setStyle(document.body, 'background', 'url("../../../assets/images/form-bg.png")');
    this.renderer.setStyle(document.body, 'background-size', 'cover');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'background-attachment', 'fixed');
  }

  onclickRegisterFormSubmit() {
    this.authService.register(this.userModel).subscribe((response: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Done',
        text: response.message,
        confirmButtonColor:'#eca508'
      })
    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.message,
        confirmButtonColor:'#eca508'
      })
    }
    )
  }
}
