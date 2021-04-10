import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.page.html',
  styleUrls: ['./matches-list.page.scss'],
})
export class MatchesListPage implements OnInit {
  matchesList = [
    {
      name: 'Match1',
      status: 'scheduled'
    },
    {
      name: 'Match2',
      status: 'Live'
    },
    {
      name: 'Match3',
      status: 'Results'
    }, {
      name: 'Match4',
      status: 'Results'
    },
    {
      name: 'Match5',
      status: 'Results'
    }, {
      name: 'Match6',
      status: 'Results'
    }, {
      name: 'Match7',
      status: 'Results'
    },
  ]

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMatches();
  }
  getMatches() {
    this.httpClient.post(`http://sandbsignalrapi.azurewebsites.net/api/LiveScore/GetMatchlist?UserId=1`, {}).subscribe(res => {
    })
  }
  addNewMatches() {
    this.router.navigate(['/start-match']);
  }
}
