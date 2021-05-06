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
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.getTeamsDatabymatchID();
    this.gettosswinnerbatbowl();
    this.matchDetails = {
      bowlingTeam: '',
      batingteam: ''
    }
  }
  getTeamsDatabymatchID() {
    const formdata = new FormData();
    formdata.append('MTID', '3');
    this.loginService.getTeamsDatabymatchID(formdata).subscribe(data => {
    });
  }
  gettosswinnerbatbowl() {
    const formdata = new FormData();
    formdata.append('MTID', '22');
    this.loginService.gettosswinnerbatbowl(formdata).subscribe(response => {
      this.teamDetails = response.Data;

    });
  }
  getPlayersdata() {
    const formdata = new FormData();
    formdata.append('MTID', '22');
    this.loginService.getPlayerData(formdata).subscribe(response => {
      //  this.playersList=response.Data;

    });
  }
  getbowlingTeam() {
    const formdata = new FormData();
    formdata.append('TeamName', this.matchDetails.bowlingTeam);
    formdata.append('MTID', '1');
    this.loginService.getPlayerData(formdata).subscribe(response => {
      this.bowlingPlayers = response.Data;

    });

  }
  getbattingTeam() {
    const formdata = new FormData();
    formdata.append('TeamName', this.matchDetails.bowlingTeam);
    formdata.append('MTID', '1');
    this.loginService.getPlayerData(formdata).subscribe(response => {
      this.batingPlayers = response.Data;
    });

  }
}