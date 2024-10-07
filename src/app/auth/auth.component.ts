import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {AuthService} from "../services/auth.service";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix,
    NgIf
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  authType: string="login";
  username: string="";
  email: string="";
  password: string="";
  confirmPassword: string="";

  constructor(private authService: AuthService,private router: Router) { // dependency injection again
  // clasa Router ne ajuta sa navigam intre pagini in Angular
  }

  submitRegisterForm(){
    let payload = {
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };
    // TODO:
    // FIXME:
    this.authService.register(payload).subscribe((response: any)=> {
      console.log(response);
    } );
  }

  submitLoginForm(){
    let payload = {
      email: this.email,
      password: this.password
    };

    this.authService.login(payload).subscribe((response: any)=> {
      console.log(response);
      if(response.status == 200){
        // daca conditia este adevarata inseamna ca ne am logat cu succes
        this.router.navigateByUrl("/dashboard");  // aplicatia ne va redirecta catre dashboard
      }
    }, (errorResponse) => {
      console.log(errorResponse);
      console.log(errorResponse.error);
      alert(errorResponse.error.message);
    });

  }

  onAuthTypeChange(authType: string){
    this.authType = authType;
  }

}
