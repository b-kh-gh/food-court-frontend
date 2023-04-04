import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import {LoaderService} from "../../../shared/services/loader.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmited = false;
  returnUrl = '';  loading$ = this.loader.isLoading$;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router , private loader: LoaderService

) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }
  get fc() {
    return this.loginForm.controls;
  }
  submit() {
    this.isSubmited = true;
    if (this.loginForm.invalid) return;
    //  alert(`Email: ${this.fc.email.value},password:${this.fc.password.value}`);
    else
      this.userService
        .login({ email: this.fc.email.value, password: this.fc.password.value })
        .subscribe(() => {
          this.router.navigateByUrl(this.returnUrl);
        });
  }
}
