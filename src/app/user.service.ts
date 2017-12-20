import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {
  userUrl = 'assets/mock-data/user-data.json';

  constructor(private http: Http) {
  }

  getUsers(): Observable<User> {
    return this.http
               .get(this.userUrl)
               .map(user => user.json().data as User);
  }
}
