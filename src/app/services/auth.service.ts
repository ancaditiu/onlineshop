import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string="https://api.codebyte-software.com:2323/api/users";

  constructor(private httpClient: HttpClient) {
    // cand auzim de injection - ne gandim la constructor - respectiv la parametrii lui
  }

  login(payload :any){
    return this.httpClient.post(`${this.apiUrl}/login`, payload);
  }

  register(payload :any){
    return this.httpClient.post(`${this.apiUrl}/register`, payload);
  }

}
