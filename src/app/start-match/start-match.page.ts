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
  submitted=false;
  tossWinner: any;
  matchDetails;
  SelectedTo: any;
  teams = [];
  selectionToss = [
    { name: 'Bat' },
    { name: 'Bowl' }
  ];
  mappedPlayersListA=[];
  mappingPlayersList=  [
    {
      PlayerName: 'Player1',
      TeamName: '',
      isMapped:false,
      isMoved:false
    },
    {
      PlayerName: 'Player2',
      TeamName: '',
      isMapped:false,
      isMoved:false
    },
    {
      PlayerName: 'Player3',
      TeamName: '',
      isMapped:false,
      isMoved:false
    }, {
      PlayerName: 'Player4',
      TeamName: ''
      ,
      isMapped:false,
      isMoved:false
    },
    {
      PlayerName: 'Player5',
      TeamName: '',
      isMapped:false,
      isMoved:false
    },
    {
      PlayerName: 'Player6',
      TeamName: '',
      isMapped:false,
      isMoved:false
    },
    {
      PlayerName: 'Player7',
      TeamName: '',
      isMapped:false,
      isMoved:false
    },
    {
      PlayerName: 'Player8',
      TeamName: '',
      isMapped:false,
      isMoved:false
    },
    {
      PlayerName: 'Player9',
      TeamName: '',
      isMapped:false,
      isMoved:false
    },
    {
      PlayerName: 'Player10',
      TeamName: '',
      isMapped:false,
      isMoved:false
    },
    {
      PlayerName: 'Player11',
      TeamName: '',
      isMapped:false,
      isMoved:false
    },
    {
      PlayerName: 'Player12',
      TeamName: '',
      isMapped:false,
      isMoved:false
    }

  ]
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
      }else if(params &&params.isSecond){
        this.isThree = false;
        this.isFirst = false;
        this.isSecond = true;
        this.matchDetails = JSON.parse(this.loginService.getMatchDetails());
        if (this.matchDetails) {
          this.getPlayerData();
        }
      }
    })

  }
  mapData(){
    this.createMatchForm.playersListA=this.mappingPlayersList.filter(player=>{
      if(player.isMapped){
      player.isMoved=true;
      }
      return player.isMapped;
    });
    this.mappingPlayersList=this.mappingPlayersList.filter(player=>{
      return !player.isMapped;
    })
    this.mappedPlayersListA=this.createMatchForm.playersListA;
  }
  unMapped(){
    const data=this.mappedPlayersListA.filter(player=>{
      if(player.isMapped){
      player.isMoved=false;
      }
      return player.isMapped;
    })
    this.mappedPlayersListA=this.mappedPlayersListA.filter(player=>{
      return player.isMapped;
    });
    this.mappingPlayersList=[...this.mappingPlayersList,...data]
  }
  ngOnInit() {
    this.createMatchForm = {
      MatchName: null,
      Team1: null,
      Team2: null,
      PlayDate: null,
      UserId: null,
      playersListA: [
        {
          PlayerName: 'Player1',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player2',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player3',
          TeamName: '',
          isMapped:false
        }, {
          PlayerName: 'Player4',
          TeamName: ''
          ,
          isMapped:false
        },
        {
          PlayerName: 'Player5',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player6',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player7',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player8',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player9',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player10',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player11',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player12',
          TeamName: '',
          isMapped:false
        }

      ],
      playersListB: [
        {
          PlayerName: 'Player1',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player2',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player3',
          TeamName: '',
          isMapped:false
        }, {
          PlayerName: 'Player4',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player5',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player6',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player7',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player8',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player9',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player10',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player11',
          TeamName: '',
          isMapped:false
        },
        {
          PlayerName: 'Player12',
          TeamName: '',
          isMapped:false
        }
      ],
    };
  }
  createMatch() {
    const formData = new FormData();
    if (this.createMatchForm.playersListA && this.createMatchForm.playersListA.length) {
      this.createMatchForm.playersListA.map(playerA => {
        playerA.TeamName = this.createMatchForm.Team1;
        playerA.isMapped=false;
      });
    }
    if (this.createMatchForm.playersListB && this.createMatchForm.playersListB.length) {
      this.createMatchForm.playersListB.map(playerB => {
        playerB.TeamName = this.createMatchForm.Team2;
        playerB.isMapped=false;
      });
    }
    const players = JSON.stringify([...this.createMatchForm.playersListA, ...this.createMatchForm.playersListB]);
    formData.append('MatchName', this.createMatchForm.MatchName);
    formData.append('Team1', this.createMatchForm.Team1);
    formData.append('Team2', this.createMatchForm.Team2);
    formData.append('PlayDate', this.createMatchForm.PlayDate);
    formData.append('UserId', '1');
    //formData.append('UserId', this.createMatchForm.UserId);
    formData.append('players', players.toString())
    this.loginService.createMatch(formData).subscribe(response => {
      this.router.navigate(['/matches-list'])
    });
  }
  updateToss() {
    const formData = new FormData();
    formData.append('MTID', this.matchDetails.MatchId);
    formData.append('TossWinner', this.tossWinner);
    formData.append('SelectedTo', this.SelectedTo);
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
  createMatchClick(){
    this.submitted=true;
    if(this.createMatchForm.MatchName&&
      this.createMatchForm.PlayDate&&
      this.createMatchForm.Team1&&
      this.createMatchForm.Team2){
    this.isFirst=false;
    this.isSecond=true;
    }
  }
}
