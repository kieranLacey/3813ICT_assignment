import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string = '';
  password: string = '';
  errormessage: string = '';

  ngOnInit(): void {
  }

  buttonClick() {
    axios
      .post('http://localhost:3000/api/auth', {
        username: this.username,
        password: this.password,
      })
      .then((res) => {
        delete res.data.password;
        localStorage.setItem('user', JSON.stringify(res.data));
        const stored = localStorage.getItem('user');
        console.log({ stored });
        this.router.navigateByUrl('/');
      })
      .catch((err) => {
        this.errormessage = err.response.data;
      });
  }
}
