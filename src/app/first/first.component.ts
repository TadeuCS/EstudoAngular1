import { Component, OnInit } from '@angular/core';
import { User } from './list/user.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  user: User;

  users: User[];

  constructor() {
    /*
    this.user = {
      nome: "Tadeu",
      email: "teste@hotmail.com",
      ativo: true
    }

    this.users = [
      {nome:"Fulano",email:"fulano@gmail.com", ativo:true},
      {nome:"Siclano",email:"Siclano@gmail.com", ativo:false},
      {nome:"Beltrano",email:"Beltrano@gmail.com", ativo:true},
    ];
    */
    this.users = [];
    this.clearFirst();

  }

  ngOnInit(): void {
  }

  clearFirst() {
    this.user = {
      nome: "",
      email: "",
      ativo: true
    }
  }

  addUser() {
    this.users.push(this.user);
    this.clearFirst();
  }
}
