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
  matchesList = [];
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
    this.loginService.getmatchesList(obj).subscribe(response => {
      this.matchesList = response.Data;
    });
  }
  addNewMatches(match) {
    this.router.navigate(['/start-match']);
  }
  startMatch(match) {
    this.router.navigate(['/start-match'], { queryParams: { isUpdate: true } });
    this.loginService.setMatchDetails(JSON.stringify(match));
  }
  updatelivescore() {
    this.router.navigate(['/preview']);
  }
}
