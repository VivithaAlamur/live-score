import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoreCardLoginPage } from './score-card-login.page';

const routes: Routes = [
  {
    path: '',
    component: ScoreCardLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoreCardLoginPageRoutingModule {}
