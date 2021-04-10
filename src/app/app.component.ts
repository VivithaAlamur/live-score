import { Component, ViewChild } from '@angular/core';
import { Platform, IonNav } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  @ViewChild(IonNav,{static:true}) navChild:IonNav;
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
    });
  }



}
