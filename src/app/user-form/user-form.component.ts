import {Component} from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  username: string = ""
  enableAddUserBtn: boolean = false;
  clearUsername: boolean = false

  addUser(username: string) {
    this.username = username;
    this.clearUsername = true;
    this.username = ""
  }

  change(username: string) {
    this.username = username;
    this.enableAddUserBtn = username.length > 0;
    return this.enableAddUserBtn
  }
}
