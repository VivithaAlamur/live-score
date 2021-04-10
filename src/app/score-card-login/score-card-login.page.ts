import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-score-card-login',
  templateUrl: './score-card-login.page.html',
  styleUrls: ['./score-card-login.page.scss'],
})
export class ScoreCardLoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() { 
    this.initForm();
  }
  initForm() {
    this.loginForm = this.formBuilder.group({
      Emailid: null,
      Password: null
    })
  }
  login(){
    const obj= this.loginForm.value;
    this.loginService.loginForMatches(obj).subscribe(async data => {
      this.loginForm.reset();
      this.router.navigate(['/matches-list'])
    });
  }

}