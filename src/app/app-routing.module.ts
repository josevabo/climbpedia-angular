import { LoginComponent } from './login/login.component';
import { ViasFavoritasComponent } from './vias/vias-favoritas/vias-favoritas.component';
import { ViasDetailPageComponent } from './vias/vias-detail-page/vias-detail-page.component';
import { ForumHomeComponent } from './forum/forum-home/forum-home.component';
import { ViasHomeComponent } from './vias/vias-home/vias-home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/auth/auth.guard";

const ROUTES: Routes = [
  {path: "vias", component: ViasHomeComponent, children: [
  ]},
  {path: "login", component: LoginComponent},
  {path: "vias/favoritas", component: ViasFavoritasComponent, canActivate: [AuthGuard]},
  {path: "vias/:id", component: ViasDetailPageComponent},
  {path: "forum", component: ForumHomeComponent},
  {path: "galeria", loadChildren: () => import('./galeria/galeria.module').then(m => m.GaleriaModule)},
  {path: "", redirectTo: "/vias", pathMatch:"full"},
  {path: "**", redirectTo: "/vias", pathMatch:"full"},
]
@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
