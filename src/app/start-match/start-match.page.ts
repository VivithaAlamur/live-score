import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-match',
  templateUrl: './start-match.page.html',
  styleUrls: ['./start-match.page.scss'],
})
export class StartMatchPage implements OnInit {
  isFirst = true;
  isSecond = false;
  isThree = false;
  playersList = [
    {
      name: 'Player1'
    },
    {
      name: 'Player2'
    },
    {
      name: 'Player3'
    }, {
      name: 'Player4'
    },
    {
      name: 'Player5'
    },
    {
      name: 'Player6'
    },
    {
      name: 'Player7'
    },
    {
      name: 'Player8'
    },
    {
      name: 'Player9'
    },
    {
      name: 'Player10'
    },
    {
      name: 'Player11'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
