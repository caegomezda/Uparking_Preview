import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form !== undefined) {
      
      console.log(this.form.value);
    }
  }

  signUpOnclick(){
    console.log("signUp");
    this.router.navigate(['/sign-up']);
  }

  loginOnClick(){
    console.log("loginOnClick")
    this.router.navigate(['/home']);

  }
}
