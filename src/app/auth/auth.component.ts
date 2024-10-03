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
        MatSuffix
    ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  username: string="";
  email: string="";
  password: string="";
  confirmPassword: string="";

  constructor(private authService: AuthService) { // dependency injection again
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
    } );

  }

}
