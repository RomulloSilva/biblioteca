import { Component, OnInit } from '@angular/core';
import{UserService} from './../service/user.service';/*Aqui importamos a função criada para chamar o objeto do http */
import{ Tarefa} from './../model/tarefa';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  id: number// criamos uma varável id para receber o valor digitado no input, para pesquisa.
  tarefa: Tarefa// criamos uma variavel que recebe a classe criada em tarefa.ts, para servir como parâmetro do

  constructor(private UserService: UserService) {}

  ngOnInit() {
  }

  /* Aqui pegamos o obejto atraves do Id digitado após o click no botão, e colocamos na var tarefaOut e se o mesmo for igual a classe criada em tarefas.ts, a var tarefa criada nessa página receberá o objeto armazenado em tarefaOut. a função pegartarefaPeloId é a que faz a comunicação com a URL, ele encontra-se no user.service.ts*/
  procureTarefa(){
    this.UserService.pegarTarefaPeloId(this.id).subscribe((tarefaOut: Tarefa)=>{ 
      this.tarefa = tarefaOut;
      console.log(this.tarefa)
    })
  }
}
