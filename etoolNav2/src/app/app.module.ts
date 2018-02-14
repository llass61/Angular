import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { NavListDetailComponent } from './nav-list-detail/nav-list-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavListComponent,
    NavListDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
