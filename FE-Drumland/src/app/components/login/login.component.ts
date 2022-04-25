import { Component, OnInit } from '@angular/core';
//IMPORTAR FORMBUILDER
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  listaLogins:any[] = [
    {username: 'Juan Perez', password: '1234567890123456'}
  ];

  form:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
    
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.form);
    const login: any = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value
    }
    this.listaLogins.push(login)


  }

  }