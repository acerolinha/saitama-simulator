import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActionGroupComponent } from './components/action-group/action-group.component';
import { ShopGroupComponent } from './components/shop-group/shop-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActionGroupComponent,
    ShopGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
