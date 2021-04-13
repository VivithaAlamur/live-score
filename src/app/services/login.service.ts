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
  Url2 = 'http://sandbsignalrapi.azurewebsites.net/api/LiveScore/Login';
  baseUrl = 'https://gamestatsapiprod.azurewebsites.net/api/';
  liveScoreUrl="http://snadblivescoreappapi.azurewebsites.net/api/LiveScore/";
  public loginForMatches(body: ILoginMatches): Observable<ILoginResponse> {
    const formData = new FormData();
    formData.append('Emailid', body.Emailid);
    formData.append('Password', body.Password);
    return this.httpclient.post<ILoginResponse>(this.Url2, formData);
  }
  public getmatchesList(body: any): Observable<any> {
    const formData = new FormData();
    formData.append('UserId', body['userId']);
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl+'GetMatchlist', formData);
  }
  public createMatch(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl+'Savematchdata', body);
  }
  public updateToss(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl+'Tosswinnerteam', body);
  }
  public getPlayerData(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl+'GetPlayerData', body);
  }
  public Savebatbowlhistory(body: any): Observable<any> {
    return this.httpclient.post<ILoginResponse>(this.liveScoreUrl+'Savebatbowlhistory', body);
  }
}
