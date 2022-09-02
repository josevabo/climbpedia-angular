import { ViasFavoritasComponent } from './vias/vias-favoritas/vias-favoritas.component';
import { ViasDetailPageComponent } from './vias/vias-detail-page/vias-detail-page.component';
import { GaleriaHomeComponent } from './galeria/galeria-home/galeria-home.component';
// import { FavoritosHomeComponent } from './favoritos/favoritos-home/favoritos-home.component';
import { ForumHomeComponent } from './forum/forum-home/forum-home.component';
import { ViasHomeComponent } from './vias/vias-home/vias-home.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {path: "vias", component: ViasHomeComponent, children: [
  ]},
  {path: "vias/favoritas", component: ViasFavoritasComponent},
  {path: "vias/:id", component: ViasDetailPageComponent},
  {path: "forum", component: ForumHomeComponent},
  {path: "galeria", component: GaleriaHomeComponent},
  {path: "", redirectTo: "/vias", pathMatch:"full"},
  {path: "**", redirectTo: "/vias", pathMatch:"full"},
]
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
