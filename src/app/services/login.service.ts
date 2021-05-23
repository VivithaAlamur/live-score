import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ILoginMatches, ILoginResponse } from '../models/stumpsbails.interfaces';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpclient: HttpClient) { }
  url = 'https://gamestatsapiprod.azurewebsites.net/api/Token/Login';
  Url2 = 'http://snadblivescoreappapi.azurewebsites.net/api/LiveScore/Login';
  baseUrl = 'https://gamestatsapiprod.azurewebsites.net/api/';
  liveScoreUrl = "http://snadblivescoreappapi.azurewebsites.net/api/LiveScore/";
  scoreBoardUrl = 'http://snadblivescoreappapi.azurewebsites.net/api/Prediction/';
  public loginForMatches(body: ILoginMatches): Observable<ILoginResponse> {
    const formData = new FormData();
    formData.append('Emailid', body.Emailid);
    formData.append('Password', body.Password);
    return this.httpclient.post<ILoginResponse>(this.Url2, formData);
  }
  public getmatchesList(body: any): Observable<any> {
    const formData = new FormData();
    formData.append('UserId', body['userId']);
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl + 'GetMatchlist', formData);
  }
  public createMatch(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl + 'Savematchdata', body);
  }
  public updateToss(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl + 'Tosswinnerteam', body);
  }
  public getPlayerData(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.scoreBoardUrl + 'GetPlayerData', body);
  }
  public Savebatbowlhistory(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl + 'Savebatbowlhistory', body);
  }
  public getTeamsDatabymatchID(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.scoreBoardUrl + 'GetTeamsDatabymatchID', body);
  }
  public gettosswinnerbatbowl(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.scoreBoardUrl + 'Gettosswinnerbatbowl', body);
  }
  public GetBowlerdata(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl + 'GetBowlerdata', body);
  }
  public Tosswinnerteam(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl + 'Tosswinnerteam', body);
  }
  setMatchDetails(match) {
    sessionStorage.setItem('matchDetails', match);
  }
  getMatchDetails() {
    return sessionStorage.getItem('matchDetails');
  }
  getTeamsBasedOnMatchId(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl + 'getTeamsBasedOnMatchId', body);
  }
  getRecentMatchData(body: any, matchData): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.scoreBoardUrl + 'getrecentmatchdata?matchData=' + JSON.stringify(matchData), {});
  }
  SaveMatchData(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl + 'Savematchdata', body);
  }
}

