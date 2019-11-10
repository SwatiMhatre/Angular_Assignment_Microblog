import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from './../shared/model/login.user.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;
  private Id: number;
  loginUser: LoginUser;
  constructor(private http: HttpClient, private router: Router){}

  login(authData: AuthData) {
    this.getUsers().map(val => val.find(user => user.user_name == authData.user_name)).subscribe((data)=>{ data ? this.Id = data.userId : null; });
    if(this.Id){
      this.user = {
        user_name: authData.user_name,
        userId: this.Id
      };
    }
    console.log(this.user);
    this.authChange.next(true);
    if(this.isAuth()){
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  getUsers() : Observable<LoginUser[]>{
    return this.http.get<LoginUser[]>("../../assets/users.json");
  }

  isAuth() {
    console.log('User***',this.user);
    return this.user != null;
  }

  getId(){
    return this.user.userId;
  }
}
