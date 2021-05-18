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
  activeBowlerDetails={
    overs:0,
    runs:0,
    wickets:0,
    name:'',
    balls:0
  }
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
      score: 0,
      ballsFaced:0
    }
    this.matchDetailsForBoard['activeBating2'] = {
      isSelected: false,
      batsman2name: '',
      score: 0,
      ballsFaced:0
    }
    this.matchDetailsForBoard['batingScoreSum'] = 0;
    this.matchDetailsForBoard['ballDetails'] = {
      overs: 0,
      balls: 0
    }
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
  noballScoreUpdate(){
    this.scoreUpdate(1);
  
  }
  scoreUpdate(value) {
    if (this.matchDetailsForBoard['extraScoreUpdated']) {
      this.matchDetailsForBoard['extraScoreUpdated'] = false;
      this.matchDetailsForBoard['extraScore'] = null;
    }
    
    if (this.matchDetailsForBoard['activeBating1'].isSelected) {
      this.batingPlayers.forEach(bating => {
        if (bating.isSelected) {
          bating.score = bating.score + Number(value);
          this.matchDetailsForBoard['activeBating1'].score = this.matchDetailsForBoard['activeBating1'].score + Number(value);
          this.matchDetailsForBoard['activeBating1'].ballsFaced = this.matchDetailsForBoard['activeBating1'].ballsFaced + 1;
        }
      })
    } else if (this.matchDetailsForBoard['activeBating2'].isSelected) {
      this.batingPlayers.forEach(bating => {
        if (bating.isSelected) {
          bating.score = bating.score + Number(value)
          this.matchDetailsForBoard['activeBating2'].score = this.matchDetailsForBoard['activeBating2'].score + Number(value);
          this.matchDetailsForBoard['activeBating2'].ballsFaced = this.matchDetailsForBoard['activeBating2'].ballsFaced + 1;
        }
      })
    }
    if (this.matchDetailsForBoard['extraScore']) {
      this.matchDetailsForBoard['extraScoreUpdated'] = true;
    }
    // update the overs
    let balls = Number(this.matchDetailsForBoard['ballDetails'].balls);
    if (this.matchDetailsForBoard['ballDetails'].balls < 5) {
      this.matchDetailsForBoard['ballDetails'].balls = balls + 1
    } else {
      this.matchDetailsForBoard['ballDetails'].overs = this.matchDetailsForBoard['ballDetails'].overs + 1;
      this.matchDetailsForBoard['ballDetails'].balls = 0;
    }
    this.sumOfBatingTeamScore();
    // for bowler details update
    this.activeBowlerDetails.runs=Number(this.activeBowlerDetails.runs)+Number(value);
    // this.activeBowlerDetails.runs=this.activeBowlerDetails['balls']+1;
    if (this.activeBowlerDetails.balls < 5) {
      this.activeBowlerDetails.balls = balls + 1;
    } else {
      this.activeBowlerDetails.overs = this.activeBowlerDetails.overs + 1;
      this.activeBowlerDetails.balls = 0;
    }
  }
  wicketClick(){
    
    this.activeBowlerDetails.wickets=Number(this.activeBowlerDetails.wickets)+1;
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
          if (team.SelectedTo && (team.SelectedTo === 'bat' || team.SelectedTo === 'BAT' || team.SelectedTo === "Bat")) {
            this.matchDetails.battingTeam = team.team;
            this.matchDetailsForBoard['team1shortname'] = team.team + '(Batting)';
            this.matchDetailsForBoard['team1Name'] = team.team;
            this.getbattingTeam();
          }
          if (team.SelectedTo && (team.SelectedTo === 'BOWL' || team.SelectedTo === 'bowl')) {
            this.matchDetails.bowlingTeam = team.team;
            this.matchDetailsForBoard['team2ShortName'] = team.team + '(Bowling)';
            this.matchDetailsForBoard['team2Name'] = team.team;
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
  changeBowlerDetails(){
    this.activeBowlerDetails.name=this.matchDetailsForBoard['bowlername'];
  }
  // save match details
  saveMatchData() {
    const body = {
      MatchID: this.matchDetails.MatchId
    }
    console.log(this.matchDetailsForBoard);
    const formData = new FormData();
    formData.append('matchid', this.matchDetails.MatchId);
    formData.append('team1shortname', this.matchDetailsForBoard['team1Name']);
    formData.append('team2ShortName', this.matchDetailsForBoard['team1Name']);
    formData.append('stadiumname', 'Vaishnavi Grounds');
    formData.append('team1Score',this.matchDetailsForBoard['batingScoreSum'] );
    formData.append('team2Score','200' );
    formData.append('bowlername', this.matchDetailsForBoard['bowlername']);
    formData.append('bowlerruns', '50');
    formData.append('bowlerwickets', '5');
    formData.append('bowlermaidens', '2');
    formData.append('batsman1name', this.matchDetailsForBoard['activeBating1'].batsman1name);
    formData.append('batsman2name', this.matchDetailsForBoard['activeBating2'].batsman2name);
    formData.append('batsman1runs', this.matchDetailsForBoard['activeBating1'].score);
    formData.append('batsman2runs', this.matchDetailsForBoard['activeBating2'].score);
    formData.append('batsman1ballsfaced', '20');
    formData.append('batsman2ballsfaced', '40');
    formData.append('dismissaltype', 'Caught');
    formData.append('fieldername', this.matchDetailsForBoard['fieldername']);
    formData.append('extraruntype', 'NB');
    formData.append('currentoverrun', '12');
    formData.append('innings', '1st Innings');
    formData.append('bowlerover', '50');
    formData.append('totalover', '20');
    formData.append('currentover', '4');
    formData.append('team1Wickets', '5');
    formData.append('team2Wickets', '5');
    this.loginService.getRecentMatchData(body, formData).subscribe(
      response => {
        console.log(response)
      });
  }
}