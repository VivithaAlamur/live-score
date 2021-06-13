import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ExtraScoreModalComponent } from './extra-score-modal/extra-score-modal.component';
import { Imatchreqst, ImatchsenRequest } from '../models/stumpsbails.interfaces';

import {
  MatDialog, MatDialogRef
} from "@angular/material/dialog";
import { Router } from '@angular/router';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {
  matDialogRef: MatDialogRef<ExtraScoreModalComponent>;
  teamDetails = [];
  bowlingPlayers = [];
  batingPlayers = [];
  matchDetails;
  matchDetailsForBoard = {};
  specificMatchTeams = [];
  activeBating;
  activeBating2;
  activeBowling;
  scoreValue;
  extraScore = 0;
  activeBowlerDetails = {
    overs: 0,
    runs: 0,
    wickets: 0,
    name: '',
    balls: 0
  }
  selectedInningType: string = 'first';
  httpClient: any;
  constructor(
    private loginService: LoginService,
    private matDialog: MatDialog,
    private router:Router
  ) {
    this.matchDetails = JSON.parse(this.loginService.getMatchDetails());
  }

  ngOnInit() {
    if (this.matchDetails) {
      this.getRecentMatchData();
      this.getSpecificMatchTeams();
      this.gettosswinnerbatbowl();
    }
    this.matchDetailsForBoard['activeBatsman'] = null;
    this.matchDetailsForBoard['activeBating1'] = {
      isSelected: false,
      batsman1name: '',
      score: 0,
      ballsFaced: 0
    }
    this.matchDetailsForBoard['activeBating2'] = {
      isSelected: false,
      batsman2name: '',
      score: 0,
      ballsFaced: 0
    }
    this.matchDetailsForBoard['batingScoreSum'] = 0;
    this.matchDetailsForBoard['ballDetails'] = {
      overs: 0,
      balls: 0
    }
  }
  selectedBatchMen(value) {
    this.scoreValue = null;
    this.matchDetailsForBoard['extraScore'] = null;
    if (value === '1') {
      this.matchDetailsForBoard['activeBating1'].isSelected = true;
      this.matchDetailsForBoard['activeBating2'].isSelected = false;

    } else {
      this.matchDetailsForBoard['activeBating2'].isSelected = true;
      this.matchDetailsForBoard['activeBating1'].isSelected = false;

    }
    this.batingPlayers.forEach(bating => {
      bating.isSelected = false;
    })
    // this.batingPlayers.forEach(bating => {
    //   if (bating.PlayerID === this.activeBating.PlayerID) {
    //     bating.isSelected = true;
    //   } else {
    //     bating.isSelected = false;
    //   }
    // });
    if (this.matchDetailsForBoard['activeBating1'].isSelected) {
      this.batingPlayers.map(player => {
        if (this.activeBating.PlayerID === player.PlayerID) {
          player.isSelected = true
        }
      })
    } else if (this.matchDetailsForBoard['activeBating2'].isSelected) {
      this.batingPlayers.map(player => {
        if (this.activeBating2.PlayerID === player.PlayerID) {
          player.isSelected = true
        }
      })
    }
  }
  wideBallScoreUpdate(score){
    this.extraScore = this.extraScore + Number(score);
    this.scoreValue = null;
    this.sumOfBatingTeamScore();
    // for bowler details update
    this.activeBowlerDetails.runs = Number(this.activeBowlerDetails.runs) + Number(score);
  }
  noballScoreUpdate(score,type) {
    // if we click on no ball (from bats man)
   
      if (this.matchDetailsForBoard['activeBating1'].isSelected) {
        this.batingPlayers.forEach(bating => {
          if (bating.isSelected) {
            if(type &&type==='fromBat'){
            bating.score = bating.score + Number(score);
            this.matchDetailsForBoard['activeBating1'].score = this.matchDetailsForBoard['activeBating1'].score + Number(score);
            }
            this.matchDetailsForBoard['activeBating1'].ballsFaced = this.matchDetailsForBoard['activeBating1'].ballsFaced + 1;
          }
        })
      } else if (this.matchDetailsForBoard['activeBating2'].isSelected) {
        this.batingPlayers.forEach(bating => {
          if (bating.isSelected) {
            if(type &&type==='fromBat'){
            bating.score = bating.score + Number(score);
            this.matchDetailsForBoard['activeBating2'].score = this.matchDetailsForBoard['activeBating2'].score + Number(score);

            }
            this.matchDetailsForBoard['activeBating2'].ballsFaced = this.matchDetailsForBoard['activeBating2'].ballsFaced + 1;
          }
        })
      }
    
    
   
    if(type &&type==='fromBat'){
      this.extraScore = this.extraScore + Number(1);
     // for bowler details update
     this.activeBowlerDetails.runs = Number(this.activeBowlerDetails.runs) + Number(score+1);
    }else{
      this.extraScore = this.extraScore + Number(1+score);
      this.activeBowlerDetails.runs = Number(this.activeBowlerDetails.runs) + Number(1);
    }
    this.scoreValue = null;
    this.sumOfBatingTeamScore();
   
  }
  scoreUpdate(value) {
    if (!this.matchDetailsForBoard['extraScore'] || this.matchDetailsForBoard['extraScore'] === 'nb') {
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
    } else {
      this.extraScore = this.extraScore + value;
      if (this.matchDetailsForBoard['activeBating1'].isSelected) {
        this.batingPlayers.forEach(bating => {
          if (bating.isSelected) {
            if(this.matchDetailsForBoard['extraScore'] !== 'by' && this.matchDetailsForBoard['extraScore'] !=='lb'){
            bating.score = bating.score + Number(value);
            }
            this.matchDetailsForBoard['activeBating1'].ballsFaced = this.matchDetailsForBoard['activeBating1'].ballsFaced + 1;
          }
        })
      } else if (this.matchDetailsForBoard['activeBating2'].isSelected) {
        this.batingPlayers.forEach(bating => {
          if (bating.isSelected) {
            if(this.matchDetailsForBoard['extraScore'] !== 'by' && this.matchDetailsForBoard['extraScore'] !=='lb'){
            bating.score = bating.score + Number(value)
            }
            this.matchDetailsForBoard['activeBating2'].ballsFaced = this.matchDetailsForBoard['activeBating2'].ballsFaced + 1;
          }
        })
      }
    }
    // changing the batsman based on 1,3,5
    if (value && value === 1 || value === 3 || value === 5) {
      this.matchDetailsForBoard['activeBating1'].isSelected = !this.matchDetailsForBoard['activeBating1'].isSelected;
      this.matchDetailsForBoard['activeBating2'].isSelected = !this.matchDetailsForBoard['activeBating2'].isSelected;
      if (this.matchDetailsForBoard['activeBatsman'] === 'first') {
        this.matchDetailsForBoard['activeBatsman'] = 'second';
      } else {
        this.matchDetailsForBoard['activeBatsman'] = 'first';
      }
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
    if(this.matchDetailsForBoard['extraScore'] !== 'by' && this.matchDetailsForBoard['extraScore'] !=='lb'){
    this.activeBowlerDetails.runs = Number(this.activeBowlerDetails.runs) + Number(value);
    }
    // this.activeBowlerDetails.runs=this.activeBowlerDetails['balls']+1;
    if (this.activeBowlerDetails.balls < 5) {
      this.activeBowlerDetails.balls = balls + 1;
    } else {
      this.activeBowlerDetails.overs = this.activeBowlerDetails.overs + 1;
      this.activeBowlerDetails.balls = 0;
    }
    this.matchDetailsForBoard['extraScore'] = null;
  }
  wicketClick() {
    this.activeBowlerDetails.wickets = Number(this.activeBowlerDetails.wickets) + 1;
    this.scoreValue = null;

    if (this.matchDetailsForBoard['activeBating1'].isSelected) {
      this.batingPlayers.forEach(bating => {
        if (bating.isSelected) {
          bating.isOut = true;
        }
      })
      this.matchDetailsForBoard['activeBating1'].ballsFaced = this.matchDetailsForBoard['activeBating1'].ballsFaced + 1;
    } else if (this.matchDetailsForBoard['activeBating2'].isSelected) {
      this.batingPlayers.forEach(bating => {
        if (bating.isSelected) {
          bating.isOut = true;
        }
      })
      this.matchDetailsForBoard['activeBating2'].ballsFaced = this.matchDetailsForBoard['activeBating2'].ballsFaced + 1;
    }
    this.getTotalOutedcount();

  }
  getTotalOutedcount() {
    if (this.batingPlayers && this.batingPlayers.length) {
      const playersList = this.batingPlayers.filter(bating => {
        return bating.isOut
      })
      return playersList && playersList.length ? playersList.length : 0;
    } else {
      return 0
    }

  }
  extraScoreClicked(type) {
    this.scoreValue = null;
    this.openModal(type);
  }
  activeBatingPlayerChanged() {
    // this.batingPlayers.forEach(bating => {
    //   if (bating.PlayerID === this.activeBating.PlayerID) {
    //     bating.isSelected = true;
    //   } else {
    //     bating.isSelected = false;
    //   }
    // });
    // this.matchDetailsForBoard['activeBating1'].batsman1name = this.activeBating.PlayerName
    // this.matchDetailsForBoard['activeBating1'].batsman1name;
    // if(this.matchDetailsForBoard['activeBating1'].isSelected){
    if (this.matchDetailsForBoard['activeBating1'].batsman1name !== this.activeBating.PlayerName) {
      this.matchDetailsForBoard['activeBating1'].score = 0;
      this.matchDetailsForBoard['activeBating1'].ballsFaced = 0;
    }
    // }
    this.matchDetailsForBoard['activeBating1'].batsman1name = this.activeBating.PlayerName;
  }
  activeBatingPlayer2Changed() {
    // if(this.matchDetailsForBoard['activeBating2'].isSelected){
    if (this.matchDetailsForBoard['activeBating2'].batsman2name !== this.activeBating.PlayerName) {
      this.matchDetailsForBoard['activeBating2'].score = 0;
      this.matchDetailsForBoard['activeBating2'].ballsFaced = 0;
    }
    // }
    this.matchDetailsForBoard['activeBating2'].batsman2name = this.activeBating2.PlayerName;
    // this.batingPlayers.forEach(bating => {
    //   if (bating.PlayerID === this.activeBating2.PlayerID) {
    //     bating.isSelected = true;
    //   } else {
    //     bating.isSelected = false;
    //   }
    // });
  }
  sumOfBatingTeamScore() {
    let sum = 0;
    if (this.batingPlayers && this.batingPlayers.length) {
      this.batingPlayers.forEach((current) => {
        const playerScore = current.score;
        sum = sum + playerScore;
      });
      this.matchDetailsForBoard['batingScoreSum'] = sum + this.extraScore || 0;
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
          player.isOut = false;
        })
      }
    });

  }
  // for getting the match details
  getRecentMatchData() {
    const iplayerDataRequest: Imatchreqst = {
      matchid: '215',
    };

    this.loginService.getRecentMatchData(iplayerDataRequest).subscribe(response => {
      const matchData = response.Data;
      if (matchData && matchData.length) {
        this.matchDetailsForBoard = matchData[0];
      }
    });
  }
  changeBowlerDetails() {
    this.activeBowlerDetails.overs = 0;
    this.activeBowlerDetails.balls = 0;
    this.activeBowlerDetails.runs = 0;
    this.activeBowlerDetails.wickets = 0;
    this.activeBowlerDetails.name = this.matchDetailsForBoard['bowlername'];
  }
  // save match details
  saveMatchData() {
    // console.log(1)
    // const body = {
    //   MatchID: this.matchDetails.MatchId
    // }
    
      const matchData = [
        {
          team1Score:21,
            team2Score:0,
            team1shortname:"HYD",
            team2ShortName:"MI",
            stadiumname:"",
            matchid:175,
            bowlername:"m",
            bowlerover:0,
            bowlerruns:0,
            bowlerwickets:0,
            bowlermaidens:0,
            batsman1name:"a",
            batsman2name:"b",
            batsman1runs:0,
            batsman2runs:3,
            batsman1ballsfaced:3,
            batsman2ballsfaced:2,
            totalover:20,
            currentover:0.3,
            dismissaltype:"",
            fieldername:"",
            extraruntype:"",
            currentoverrun:2,
            innings:1,
            team1Wickets:0,
            team2Wickets:0,
            strikerplayer:"a",
            currentover_data:"24W561",
            dismissalplayer:""
        }
      ]
    // console.log(this.matchDetailsForBoard);
    // const formData = new FormData();
    // formData.append('matchid', this.matchDetails.MatchId);
    // formData.append('team1shortname', this.matchDetailsForBoard['team1Name']);
    const iplayerDataRequest: ImatchsenRequest = {
      matchdata: JSON.stringify(matchData),
    };
    console.log(matchData);
    // this.httpClient.post('http://snadblivescoreappapi.azurewebsites.net/api/LiveScore/Saverecentdata?matchdata', matchData).subscribe(status =>
    //   console.log(status),
    //   err => console.log('HTTP Error', err),
    // );
    this.loginService.SaveMatchData(iplayerDataRequest).subscribe(
      response => {
        console.log(response)
      });
  }
  inningsClicked(type) {
    this.selectedInningType = type;
    this.matchDetailsForBoard['batingScoreSum'] = 0;
    this.matchDetailsForBoard['ballDetails'].overs = 0;
    this.matchDetailsForBoard['ballDetails'].balls = 0
    // for players data
    this.matchDetailsForBoard['activeBating1'].score = 0;
    this.matchDetailsForBoard['activeBating1'].ballsFaced = 0;
    this.matchDetailsForBoard['activeBating2'].score = 0;
    this.matchDetailsForBoard['activeBating2'].ballsFaced = 0;
    // for bowler details
    this.activeBowlerDetails.overs = 0;
    this.activeBowlerDetails.balls = 0;
    this.activeBowlerDetails.runs = 0;
    this.activeBowlerDetails.wickets = 0;
    if (this.selectedInningType === 'second') {
      this.matchDetailsForBoard['team2ShortName'] = this.matchDetailsForBoard['team2Name'] + '(Batting)';
      this.matchDetailsForBoard['team1shortname'] = this.matchDetailsForBoard['team1Name'] + '(Bowling)';
      if (this.teamDetails && this.teamDetails.length) {
        this.teamDetails.map(team => {
          if (team.SelectedTo && (team.SelectedTo === 'bat' || team.SelectedTo === 'BAT'
            || team.SelectedTo === "Bat")) {
            this.matchDetails.bowlingTeam = team.team;
          }
          if (team.SelectedTo && (team.SelectedTo === 'BOWL' || team.SelectedTo === 'bowl')) {
            this.matchDetails.battingTeam = team.team;
          }
        })
      }
    } else {
      this.matchDetailsForBoard['team2ShortName'] = this.matchDetailsForBoard['team2Name'] + '(Bowling)';
      this.matchDetailsForBoard['team1shortname'] = this.matchDetailsForBoard['team1Name'] + '(Batting)';
      if (this.teamDetails && this.teamDetails.length) {
        this.teamDetails.map(team => {
          if (team.SelectedTo && (team.SelectedTo === 'bat' || team.SelectedTo === 'BAT'
            || team.SelectedTo === "Bat")) {
            this.matchDetails.battingTeam = team.team;
          }
          if (team.SelectedTo && (team.SelectedTo === 'BOWL' || team.SelectedTo === 'bowl')) {
            this.matchDetails.bowlingTeam = team.team;
          }
        })
      }
    }
    // changing the bating team name
    // this.matchDetails.battingTeam=

  }
  openModal(type) {
    const modalData={
      title:''
    }
    if(type==='by'){
      modalData.title="Bye";
    }else if(type==='lb'){
      modalData.title="Leg Bye";
    }else if(type==='wd'){
      modalData.title='Wide Ball';
    }else if(type==='nb'){
      modalData.title='No Ball';
    }

    
    
    this.matDialogRef =
      this.matDialog.open(ExtraScoreModalComponent, {
        data: modalData,
        disableClose: true,
        panelClass: 'col-sm-5'
      });
    this.matDialogRef.afterClosed().subscribe(res => {
      if (res) {
        if (res.score) {
          const scoreValue=res;
          const noOfScore=scoreValue.score||0;
          switch (type) {
            case 'by':
            case 'lb':
              this.scoreUpdate(noOfScore);
              break;
            case 'wd':
              this.wideBallScoreUpdate(noOfScore+1);
              break;
              case 'nb':
                this.noballScoreUpdate(noOfScore,scoreValue.scoreType);
          }
        }
      }
    });
  }
  gotoBackpage(){
    // ?isUpdate=true'
    this.router.navigate(['/start-match']);
  }
}