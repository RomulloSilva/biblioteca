import { Component, OnInit } from '@angular/core';
import { user } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaUser: user[];
  
  constructor(private servico: UserService) { }

  users: user[]
  ngOnInit() {
    this.findAll();
  }


  findAll(){
    this.servico.getAll().subscribe((userOut: user[])=>{
      this.users=userOut;
      console.log(this.users);
    })
  }

}
