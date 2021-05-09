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
  matchDetailsForBoard = {};
  specificMatchTeams = [];
  activeBating;
  activeBating2;
  activeBowling;
  constructor(
    private loginService: LoginService
  ) {
    this.matchDetails = JSON.parse(this.loginService.getMatchDetails());

  }

  ngOnInit() {
    if (this.matchDetails) {
      this.getRecentMatchData();
      this.getSpecificMatchTeams();
      this.gettosswinnerbatbowl();
    }
    this.matchDetailsForBoard['activeBating1'] = {
      isSelected: false,
      batsman1name: '',
      score: 0
    }
    this.matchDetailsForBoard['activeBating2'] = {
      isSelected: false,
      batsman2name: '',
      score: 0
    }
    this.matchDetailsForBoard['batingScoreSum'] = 0;

  }
  selectedBatchMen(value) {
    if (value === '1') {
      this.matchDetailsForBoard['activeBating1'].isSelected = true;
      this.matchDetailsForBoard['activeBating2'].isSelected = false;

    } else {
      this.matchDetailsForBoard['activeBating2'].isSelected = true;
      this.matchDetailsForBoard['activeBating1'].isSelected = false;

    }
  }
  scoreUpdate(value) {
    if (this.matchDetailsForBoard['activeBating1'].isSelected) {
      this.batingPlayers.forEach(bating => {
        if (bating.isSelected) {
          bating.score = bating.score + Number(value)
          this.matchDetailsForBoard['activeBating1'].score = bating.score;
        }
      })
    } else if (this.matchDetailsForBoard['activeBating2'].isSelected) {
      this.batingPlayers.forEach(bating => {
        if (bating.isSelected) {
          bating.score = bating.score + Number(value)
          this.matchDetailsForBoard['activeBating2'].score = bating.score;
        }
      })
    }
    this.sumOfBatingTeamScore();
  }
  activeBatingPlayerChanged() {
    this.matchDetailsForBoard['activeBating1'].batsman1name = this.activeBating.PlayerName;
    this.batingPlayers.forEach(bating => {
      if (bating.PlayerID === this.activeBating.PlayerID) {
        bating.isSelected = true;
      } else {
        bating.isSelected = false;
      }
    });
  }
  activeBatingPlayer2Changed() {
    this.matchDetailsForBoard['activeBating2'].batsman2name = this.activeBating2.PlayerName;
    this.batingPlayers.forEach(bating => {
      if (bating.PlayerID === this.activeBating2.PlayerID) {
        bating.isSelected = true;
      } else {
        bating.isSelected = false;
      }
    });
  }
  sumOfBatingTeamScore() {
    let sum = 0;
    if (this.batingPlayers && this.batingPlayers.length) {
      this.batingPlayers.forEach((current) => {
        const playerScore = current.score;
        sum = sum + playerScore;
      });
      this.matchDetailsForBoard['batingScoreSum'] = sum || 0;
    }
  }
  gettosswinnerbatbowl() {
    const formData = new FormData();
    formData.append('MTID', this.matchDetails.MatchId);
    this.loginService.gettosswinnerbatbowl(formData).subscribe(response => {
      this.teamDetails = response.Data;
      if (this.teamDetails && this.teamDetails.length) {
        this.teamDetails.map(team => {
          if (team.SelectedTo && (team.SelectedTo === 'bat' || team.SelectedTo === 'BAT')) {
            this.matchDetails.battingTeam = team.team;
            this.matchDetailsForBoard['team1shortname'] = team.team + '(Bating)';
            this.getbattingTeam();
          }
          if (team.SelectedTo && (team.SelectedTo === 'BOWL' || team.SelectedTo === 'bowl')) {
            this.matchDetails.bowlingTeam = team.team;
            this.matchDetailsForBoard['team2ShortName'] = team.team + '(Bowling)';

            this.getbowlingTeam()
          }
        })
      }
    });
  }
  getSpecificMatchTeams() {
    const formData = new FormData();
    formData.append('MTID', this.matchDetails.MatchId);
    this.loginService.getTeamsDatabymatchID(formData).subscribe(response => {
      this.specificMatchTeams = response.Data;
    });
  }
  getbowlingTeam() {
    const formData = new FormData();
    formData.append('TeamName', this.matchDetails.bowlingTeam);
    formData.append('MTID', this.matchDetails.MatchId);
    this.loginService.getPlayerData(formData).subscribe(response => {
      this.bowlingPlayers = response.Data || [];
      if (this.bowlingPlayers.length) {
        this.bowlingPlayers.forEach(player => {
          player.isSelected = false;
          player.score = 0;
        })
      }
    });


  }
  getbattingTeam() {
    const formData = new FormData();
    formData.append('TeamName', this.matchDetails.battingTeam);
    formData.append('MTID', this.matchDetails.MatchId);
    this.loginService.getPlayerData(formData).subscribe(response => {
      this.batingPlayers = response.Data || [];
      if (this.batingPlayers.length) {
        this.batingPlayers.forEach(player => {
          player.isSelected = false;
          player.score = 0;
        })
      }
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
    const body = {
      MatchID: this.matchDetails.MatchId
    }
    const formData = new FormData();
    formData.append('matchid', '');
    formData.append('team1shortname', '');
    formData.append('team2ShortName', '');
    formData.append('stadiumname', '');
    formData.append('team1Score', '');
    formData.append('team2Score', '');
    formData.append('bowlername', '');
    formData.append('bowlerruns', '');
    formData.append('bowlerwickets', '');
    formData.append('bowlermaidens', '');
    formData.append('batsman1name', '');
    formData.append('batsman2name', '');
    formData.append('batsman1runs', '');
    formData.append('batsman2runs', '');
    formData.append('batsman1ballsfaced', '');
    formData.append('batsman2ballsfaced', '');
    formData.append('dismissaltype', '');
    formData.append('fieldername', '');
    formData.append('extraruntype', '');
    formData.append('currentoverrun', '');
    formData.append('innings', '');
    formData.append('bowlerover', '');
    formData.append('totalover', '');
    formData.append('currentover', '');
    formData.append('team1Wickets', '');
    formData.append('team2Wickets', '');
    this.loginService.getRecentMatchData(body, formData).subscribe(
      response => {
        console.log(response)
      });
  }
}