import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm: any;

  constructor(
    private LoginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: '',
    })
  }

  ngOnInit(): void {
  }

  login(){
    const user = this.checkoutForm.value;

    this.LoginService.login(user).subscribe({
      next: data => this.LoginService.setLoggedUser(data),
      error: ({error}) => alert(error.error),
      complete: () => this.router.navigate(["feed"])
      });
  }
}
