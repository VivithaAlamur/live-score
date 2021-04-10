import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartMatchPageRoutingModule } from './start-match-routing.module';

import { StartMatchPage } from './start-match.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartMatchPageRoutingModule
  ],
  declarations: [StartMatchPage]
})
export class StartMatchPageModule {}
