import { Injectable } from '@angular/core';
/*Como nossos serviços(os objetos) que precisamos estão num site precisamos de sua URL, devemos criar um objeto http no angular */
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(){/*Aqui ele pega todos os dados em formato json(objeto) */
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
 








}
