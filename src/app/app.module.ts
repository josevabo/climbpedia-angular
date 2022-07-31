import { HttpClientModule } from '@angular/common/http';
import { ViasModule } from './vias/vias.module';
import { ForumModule } from './forum/forum.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViasModule,
    ForumModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
