import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/services/authservice.service';
import { StorageService } from 'src/app/services/storage.service';
import { LeaguesService } from 'src/app/services/leagues.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  signIn(socialPlatformProvider: any) {
    throw new Error("Method not implemented.");
  }
  token: any;
  routedactivated: boolean;

  constructor(private storageservice: StorageService, private myRoute: Router, private leagueService: LeaguesService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.token = this.storageservice.getItem('token');
    // this.leagueService.gettokenAuthentication(this.token).subscribe(data => {
    //   if (data.Data === true) {
    //     this.routedactivated = true;
    //   } else {
    //     this.routedactivated = false;
    //   }
    // }, (error: any) => {
    //   this.routedactivated = false;
    // });
    this.leagueService.gettokenAuthentication(this.token).subscribe(data => {
      if (data.Data === true) {
        this.routedactivated = true;
      } else {

        this.routedactivated = false;
        this.storageservice.clearItem('token');
        this.myRoute.navigate(['/info/login']);
        // this.myRoute.navigate(['/info/login']);
        return false;
      }
    }, (error: any) => {
      this.routedactivated = false;
      this.storageservice.clearItem('token');
      this.myRoute.navigate(['/info/login']);
        // this.myRoute.navigate(['/info/login']);
      return false;
    });
    if (this.token) {
      return true;
    } else {
      this.myRoute.navigate(['/info/login']);
      // this.myRoute.navigate(['/info/login']);
      return false;
    }
  }
}

