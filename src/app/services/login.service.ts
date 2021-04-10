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
  
  public loginForMatches(body: ILoginMatches): Observable<ILoginResponse> {
    const formData = new FormData();
    formData.append('Emailid', body.Emailid);
    formData.append('Password', body.Password);
    return this.httpclient.post<ILoginResponse>(this.Url2, formData);
  }
  public getmatchesList(body: ILoginMatches): Observable<ILoginResponse> {
    const formData = new FormData();
    formData.append('id', body.Emailid);
    return this.httpclient.post<ILoginResponse>(this.Url2, formData);
  }
}
