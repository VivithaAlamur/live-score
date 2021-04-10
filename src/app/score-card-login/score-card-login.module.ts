import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoreCardLoginPageRoutingModule } from './score-card-login-routing.module';

import { ScoreCardLoginPage } from './score-card-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoreCardLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ScoreCardLoginPage]
})
export class ScoreCardLoginPageModule {}
