import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { SelectButtonModule } from 'primeng/selectbutton';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     SelectButtonModule,
     IonicStorageModule.forRoot(),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
     ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
