import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Login} from 'src/app/models/login/login'
import {LoginService} from 'src/app/servicios/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private activatedRoute: ActivatedRoute) { }

  login: Login = {
    usuario: 'yordis',
    contrasena: 'yordis'
  }

  ngOnInit(): void {
  }

  IniciarSession() {
    this.loginService.Iniciasesion(this.login)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/usuarios']);
        },
        err => console.error(err)
      )
  }

}
