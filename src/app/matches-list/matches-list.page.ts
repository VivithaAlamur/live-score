import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.page.html',
  styleUrls: ['./matches-list.page.scss'],
})
export class MatchesListPage implements OnInit {
  // matchesList = [
  //   {
  //     name: 'Match1',
  //     status: 'scheduled'
  //   },
  //   {
  //     name: 'Match2',
  //     status: 'Live'
  //   },
  //   {
  //     name: 'Match3',
  //     status: 'Results'
  //   }, {
  //     name: 'Match4',
  //     status: 'Results'
  //   },
  //   {
  //     name: 'Match5',
  //     status: 'Results'
  //   }, {
  //     name: 'Match6',
  //     status: 'Results'
  //   }, {
  //     name: 'Match7',
  //     status: 'Results'
  //   },
  // ]
  matchesList=[];
  constructor(
    private router: Router,
    private loginService: LoginService

  ) { }

  ngOnInit() {
    this.getMatches();
  }
  getMatches() {
    const obj = {
      userId: 1
    }
    this.loginService.getmatchesList(obj).subscribe(async response => {
       this.matchesList= response.Data;
    });
  }
  addNewMatches() {
    this.router.navigate(['/start-match']);
  }
}
