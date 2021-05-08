import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  createMatchForm: any;
  tossWinned: any;
  matchDetails;
  teams = [];
  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.isUpdate) {
        this.isThree = true;
        this.isFirst = false;
        this.isSecond = false;
        this.matchDetails = JSON.parse(this.loginService.getMatchDetails());
        if (this.matchDetails) {
          this.getTeamsBasedOnMatchId();
        }
      }
    })

  }
  ngOnInit() {
    this.createMatchForm = {
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
    if (this.createMatchForm.playersListA && this.createMatchForm.playersListA.length) {
      this.createMatchForm.playersListA.map(playerA => {
        playerA.TeamName = this.createMatchForm.Team1
      });
    }
    if (this.createMatchForm.playersListB && this.createMatchForm.playersListB.length) {
      this.createMatchForm.playersListB.map(playerB => {
        playerB.TeamName = this.createMatchForm.Team2
      });
    }
    const players = JSON.stringify([...this.createMatchForm.playersListA, ...this.createMatchForm.playersListB]);
    formData.append('Matchname', this.createMatchForm.Matchname);
    formData.append('Team1', this.createMatchForm.Team1);
    formData.append('Team2', this.createMatchForm.Team2);
    formData.append('PlayDate', this.createMatchForm.PlayDate);
    formData.append('UserId', '123');
    //formData.append('UserId', this.createMatchForm.UserId);
    formData.append('Players', players.toString())
    this.loginService.createMatch(formData).subscribe(response => {
      this.router.navigate(['/matches-list'])
    });
  }
  updateToss() {
    const formData = new FormData();
    formData.append('MTID', this.matchDetails.MatchId);
    formData.append('Tosswinner', this.tossWinned);
    this.loginService.updateToss(formData).subscribe(response => {
      // if (response) {
      this.router.navigate(['/preview'])
      // }
    });
  }
  getPlayerData() {
    const formData = new FormData();
    formData.append('MTID', this.matchDetails.MatchId);
    formData.append('TeamName', '');
    this.loginService.getPlayerData(formData).subscribe(
      response => {
        console.log(response)
      });
  }

  getTeamsBasedOnMatchId() {
    const formData = new FormData();
    formData.append('MTID', this.matchDetails.MatchId);
    this.loginService.getTeamsDatabymatchID(formData).subscribe(
      response => {
        this.teams = response.Data;
      });
  }

}
