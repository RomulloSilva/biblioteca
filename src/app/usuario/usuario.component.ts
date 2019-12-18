import { Component, OnInit } from '@angular/core';
import { user } from '../model/User';
/*PARTE 01.1 DO WEBSERVICE*/
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
/*PARTE 05 DO WEBSERVICE declarando uma variável que recebe os valores do objeto-serviço */
  listaUser: user[];
  
  /*PARTE 05.1 DO WEBSERVICE injetando o serviço numa variável*/
  constructor(private servico: UserService) { }

  users: user[]
  ngOnInit() {
    this.findAll();
  }

/**template "this.nomeDaVarQueRecebeuOServiço.nomeDaFunçãoQueRetorna().subscribe((novaVariável: nomeDaClasse[])=>{this.nomeDaVarQueRecebuOValorDaClasse=novaVariável})" */
  findAll(){
    this.servico.recuperarListaDeUsers().subscribe((userOut: user[])=>{
      this.users=userOut;/* */
      console.log(this.users);/*Apenas para verificar se está tudoc correto */
    })
  }

}
