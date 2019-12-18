/*PARTE 03 DO WEBSERVICE essa é a página criada com o (ng generate service 'nomeDaPasta/nomeDoArquivo')*/
import { Injectable } from '@angular/core';
/*Como nossos serviços(os objetos) que precisamos estão num site precisamos de sua URL, devemos criar um objeto http no angular */
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /*PARTE 04 DO WEBSERVICE* aqui enjetamos o objeto http */
  constructor(private http: HttpClient) { }

  /*PARTE 04.1 DO WEBSERVICE criando uma função que retorna os dados. Agora ir para o typescript do component que exibira os dados(no nosso caso usuario.ts)*/
  recuperarListaDeUsers() {/*Aqui ele pega todos os dados em formato json(objeto) */
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  /*Aqui criamos uma função que busca na URL o objeto pelo atributo Id */
  pegarTarefaPeloId(id: number): any {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
