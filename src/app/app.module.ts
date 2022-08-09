import { AppRoutingModule } from './app-routing.module';
import { GaleriaHomeComponent } from './galeria/galeria-home/galeria-home.component';
import { FavoritosHomeComponent } from './favoritos/favoritos-home/favoritos-home.component';
import { ForumHomeComponent } from './forum/forum-home/forum-home.component';
import { ViasHomeComponent } from './vias/vias-home/vias-home.component';
import { HttpClientModule } from '@angular/common/http';
import { ViasModule } from './vias/vias.module';
import { ForumModule } from './forum/forum.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViasModule,
    ForumModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
