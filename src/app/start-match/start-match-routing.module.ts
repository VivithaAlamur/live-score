import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartMatchPage } from './start-match.page';

const routes: Routes = [
  {
    path: '',
    component: StartMatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartMatchPageRoutingModule {}
