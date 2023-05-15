import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActionGroupComponent } from './components/action-group/action-group.component';
import { ChallengeGroupComponent } from './components/challenge-group/challenge-group.component';
import { ChallengeModalComponent } from './components/challenge-modal/challenge-modal.component';
import { BaseChallengeComponent } from './components/challenges/base-challenge/base-challenge.component';
import { BlackFridayComponent } from './components/challenges/black-friday/black-friday.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopGroupComponent } from './components/shop-group/shop-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActionGroupComponent,
    ShopGroupComponent,
    ChallengeGroupComponent,
    BlackFridayComponent,
    ChallengeModalComponent,
    BaseChallengeComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
