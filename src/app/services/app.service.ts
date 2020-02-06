import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { environment } from './../../environments/environment';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private signinUrl: string;
  private loginModalSource = new BehaviorSubject({ open: false });
  loginModalOpener = this.loginModalSource.asObservable();

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.signinUrl = environment.signin_uri;
  }
  toggleLoginModal() {
    this.loginModalSource.next({ open: true });
  }
  
  closeALLModals() {
    this.loginModalSource.next({ open: false });
  }

  getMe(): Observable<User | boolean> {
    return this.http.get('/api/me').pipe(
      map((payload: any) => {
        const {
          response: { error, user, msg },
        } = payload;
        if (typeof error !== 'undefined' && error) {
          this.handleError(msg.error.message);
          return false;
        }
        if (typeof user !== 'undefined') {
          return user;
        }
      })
    );
  }

  handleError(err) {
    console.log('error', err);
    // this.toastr.error(err, 'Error', { timeOut: 3000 });
  }
  getLoginUrl() {
    return this.signinUrl;
  }
  getSigninUrl() {
    return this.signinUrl;
  }
}
