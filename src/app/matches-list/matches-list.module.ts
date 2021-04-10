import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchesListPageRoutingModule } from './matches-list-routing.module';

import { MatchesListPage } from './matches-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchesListPageRoutingModule
  ],
  declarations: [MatchesListPage]
})
export class MatchesListPageModule {}
