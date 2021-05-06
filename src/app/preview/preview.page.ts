import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {
  teamDetails = [];
  bowlingPlayers = [];
  batingPlayers = [];
  matchDetails;
  matchDetailsForBoard;
  constructor(
    private loginService: LoginService
  ) {
    this.matchDetails = JSON.parse(this.loginService.getMatchDetails());

  }

  ngOnInit() {
    if (this.matchDetails) {
      this.getRecentMatchData();
      this.getTeamsDatabymatchID();
      this.gettosswinnerbatbowl();
    }
    this.matchDetails = {
      bowlingTeam: '',
      batingteam: ''
    }
  }
  getTeamsDatabymatchID() {
    const formData = new FormData();
    formData.append('MTID', this.matchDetails.MatchId);
    this.loginService.getTeamsDatabymatchID(formData).subscribe(data => {
    });
  }
  gettosswinnerbatbowl() {
    const formData = new FormData();
    formData.append('MTID', this.matchDetails.MatchId);
    this.loginService.gettosswinnerbatbowl(formData).subscribe(response => {
      this.teamDetails = response.Data;

    });
  }
  getPlayersdata() {
    const formData = new FormData();
    formData.append('MTID', this.matchDetails.MatchId);
    this.loginService.getPlayerData(formData).subscribe(response => {
      //  this.playersList=response.Data;

    });
  }
  getbowlingTeam() {
    const formData = new FormData();
    formData.append('TeamName', this.matchDetails.bowlingTeam);
    formData.append('MTID', this.matchDetails.MatchId);
    this.loginService.getPlayerData(formData).subscribe(response => {
      this.bowlingPlayers = response.Data;

    });

  }
  getbattingTeam() {
    const formData = new FormData();
    formData.append('TeamName', this.matchDetails.bowlingTeam);
    formData.append('MTID', this.matchDetails.MatchId);
    this.loginService.getPlayerData(formData).subscribe(response => {
      this.batingPlayers = response.Data;
    });

  }
  // for getting the match details
  getRecentMatchData() {
    const formData = new FormData();
    formData.append('MTID', this.matchDetails.MatchId);
    this.loginService.getRecentMatchData(this.matchDetails, formData).subscribe(response => {
      const matchData = response.Data;
      if (matchData && matchData.length) {
        this.matchDetailsForBoard = matchData[0];
      }
    });
  }
  // save match details
  saveMatchData() {
    const formData = new FormData();
    formData.append('TeamID', '');
    formData.append('MatchID', '');
    formData.append('playerID', '');
    formData.append('Totalruns', '');
    formData.append('BatWickets', '');
    formData.append('currentover', '');
    formData.append('BatRemarks', '');
    formData.append('BowlRuns', '');
    formData.append('BowlWickets', '');
    formData.append('BowlRemarks', '');
    this.loginService.SaveMatchData(formData).subscribe(
      response => {
        console.log(response)
      });
  }
}