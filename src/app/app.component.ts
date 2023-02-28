import {Component, ViewChild} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { faHouse, faUsers, faHeart, faImages } from '@fortawesome/free-solid-svg-icons';
import { AlertService } from './core/services/alert.service';
import { AuthService } from './core/auth/auth.service';
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PerfilComponent} from "./perfil/perfil.component";
import {Usuario} from "./core/models/usuario.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  isLoggedIn: boolean = false;
  title = 'Climbpedia';
  username: string;
  faHouse = faHouse;
  faUsers = faUsers;
  faHeart = faHeart;
  faImages = faImages;
  private initialUserName: string = "Efetue Login";


  constructor(private authService: AuthService,
              private alertService: AlertService,
              private router: Router,
              private dialog: MatDialog) {

    this.username = this.initialUserName;
    this.isLoggedIn = authService.isAuthenticated();
  }
  ngOnInit() {
    this.subscribeToAuthService();
    if(this.isLoggedIn) {
      let newUserName = (this.authService.getUserName() as any).full_name;
      this.changeUsername(newUserName)
    }
    setInterval(() => { //TODO: logout e expiracao de login deve ser controlado no auth.service
      if(this.username != this.initialUserName && !this.authService.isAuthenticated()){
        this.logout("Seu login expirou");
      }
    }, 10000) //check if token has Expired every 10s
  }


  logout(msgAlert: string = "Logout com sucesso") {
    this.authService.logout()
    this.alertService.alertInfo(msgAlert,"Info", 2000)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl('/',{})
  }

  openPerfilDialog() {
    const dialogConfig: MatDialogConfig = {
      disableClose : false,
      autoFocus : true,
      width : "500px"
    }

    this.dialog.open(PerfilComponent, dialogConfig);
  }
  changeUsername(username: string) {
    this.username = !!username ? username : this.initialUserName;
  }
  private subscribeToAuthService() {
    this.authService.getUsuario$().subscribe({
      next: (user: Usuario) => {
        this.isLoggedIn = this.authService.isAuthenticated();
        this.changeUsername(user.nome as string)
      }
    })
  }

}
