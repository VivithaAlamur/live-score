import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '', redirectTo: 'score-card-login', pathMatch: 'full'
  },
  {
    path: 'score-card-login',
      loadChildren: () => import('./score-card-login/score-card-login.module').then( m => m.ScoreCardLoginPageModule)
  },
  {
    path: 'matches-list',
    loadChildren: () => import('./matches-list/matches-list.module').then( m => m.MatchesListPageModule)
  },
  
  {
    path: 'start-match',
    loadChildren: () => import('./start-match/start-match.module').then( m => m.StartMatchPageModule)
  }
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
