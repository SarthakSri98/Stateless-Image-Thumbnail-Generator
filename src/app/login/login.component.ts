import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName  } from '@angular/forms';
import { BaseService } from '../services/base.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private _base: BaseService, private router:Router) { }

  ngOnInit() {
     this.loginForm = new FormGroup({
       username : new FormControl(''),
       password : new FormControl('')
     })


  }

  login()
  {
    this._base.login(this.loginForm.value).subscribe(res=>{
      localStorage.setItem('token',res.token);
      console.log(res.token);
      this.router.navigate(['/thumbnail']);

    });
  }

}
