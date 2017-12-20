import { OnInit, Component } from '@angular/core';
import { UserService } from './../user.service';

@Component({
templateUrl: './user.component.html',

})

export class UserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe(user => this.user = user);
  }

}
