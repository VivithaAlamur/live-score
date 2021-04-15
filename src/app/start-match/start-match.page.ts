import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-start-match',
  templateUrl: './start-match.page.html',
  styleUrls: ['./start-match.page.scss'],
})
export class StartMatchPage implements OnInit {
  isFirst = true;
  isSecond = false;
  isThree = false;
  creatematchForm: any;
  tossWinned: any;
  constructor(
    private loginService: LoginService,
    private router:Router
  ) { }
  ngOnInit() {
    this.creatematchForm = {
      Matchname: null,
      Team1: null,
      Team2: null,
      PlayDate: null,
      UserId: null,
      playersListA: [
        {
          name: 'Player1',
          TeamName: ''
        },
        {
          name: 'Player2',
          TeamName: ''
        },
        {
          name: 'Player3',
          TeamName: ''
        }, {
          name: 'Player4',
          TeamName: ''
        },
        {
          name: 'Player5',
          TeamName: ''
        },
        {
          name: 'Player6',
          TeamName: ''
        },
        {
          name: 'Player7',
          TeamName: ''
        },
        {
          name: 'Player8',
          TeamName: ''
        },
        {
          name: 'Player9',
          TeamName: ''
        },
        {
          name: 'Player10',
          TeamName: ''
        },
        {
          name: 'Player11',
          TeamName: ''
        }
      ],
      playersListB: [
        {
          name: 'Player1',
          TeamName: ''
        },
        {
          name: 'Player2',
          TeamName: ''
        },
        {
          name: 'Player3',
          TeamName: ''
        }, {
          name: 'Player4',
          TeamName: ''
        },
        {
          name: 'Player5',
          TeamName: ''
        },
        {
          name: 'Player6',
          TeamName: ''
        },
        {
          name: 'Player7',
          TeamName: ''
        },
        {
          name: 'Player8',
          TeamName: ''
        },
        {
          name: 'Player9',
          TeamName: ''
        },
        {
          name: 'Player10',
          TeamName: ''
        },
        {
          name: 'Player11',
          TeamName: ''
        }
      ]
    };

  }
  createMatch() {
    const formData = new FormData();
    if (this.creatematchForm.playersListA && this.creatematchForm.playersListA.length) {
      this.creatematchForm.playersListA.map(playerA => {
        playerA.TeamName = this.creatematchForm.Team1
      });
    }
    if (this.creatematchForm.playersListB && this.creatematchForm.playersListB.length) {
      this.creatematchForm.playersListB.map(playerB => {
        playerB.TeamName = this.creatematchForm.Team2
      });
    }
    const players = JSON.stringify([...this.creatematchForm.playersListA, ...this.creatematchForm.playersListB]);
    formData.append('Matchname', this.creatematchForm.Matchname);
    formData.append('Team1', this.creatematchForm.Team1);
    formData.append('Team2', this.creatematchForm.Team2);
    formData.append('PlayDate', this.creatematchForm.PlayDate);
    formData.append('UserId', '123');
    //formData.append('UserId', this.creatematchForm.UserId);
    formData.append('Players', players.toString())
    this.loginService.createMatch(formData).subscribe(async response => {
      console.log(response)
    });
  }
  updateToss() {
    const formData = new FormData();
    formData.append('MTID', '1');
    formData.append('Tosswinner', this.tossWinned);
    this.loginService.updateToss(formData).subscribe(async response => {
      console.log(response)
      if(response){
        this.router.navigate(['/preview'])
      }
    });
  }
  getPlayerData() {
    const formData = new FormData();
    formData.append('MTID', '1');
    formData.append('TeamName', '');
    this.loginService.getPlayerData(formData).subscribe(async response => {
      console.log(response)
    });
  }
  Savebatbowlhistory() {
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
    this.loginService.Savebatbowlhistory(formData).subscribe(async response => {
      console.log(response)
    });
  }
}
