import {Component, ViewChild} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { faHouse, faUsers, faHeart, faImages } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  isLoggedIn: boolean = false;
  title = 'Climbpedia';
  userName: String;
  faHouse = faHouse;
  faUsers = faUsers;
  faHeart = faHeart;
  faImages = faImages;
  private initialUserName: string = "Efetue Login";


  constructor(private authService: AuthService) {
    this.userName = this.initialUserName;
    this.isLoggedIn = authService.isLoggedIn();
  }

  subscribeToEmmiter(loginComponentRef: any) {
    loginComponentRef.onUsernameChange.subscribe((username: any) => {
      this.changeUsername(username);
      this.isLoggedIn = this.authService.isLoggedIn();
    })
  }
  changeUsername(username: string) {
    this.userName = username;
  }

  logout() {
    this.authService.logout()
    this.isLoggedIn = this.authService.isLoggedIn();
    if(!this.isLoggedIn) this.changeUsername(this.initialUserName)
  }

  ngOnInit() {
    if(this.isLoggedIn) {
      let newUserName = (this.authService.getUserName() as any).full_name;
      this.userName = !!newUserName ? newUserName : this.initialUserName;
    }
  }
}
