/*PARTE 2 DO WEBSERVICE criar toda essa página e suas ramificações, ou seja, criar as classes no formato do objeto que guarda seus dados, "próximo passo criar um serviço (ng generate service 'nomedapasta/nomedoarquivo') e vamos no typescript criado"*/
import {geo} from './Geo';

/*Criando a classe endereço para alimentar user */
export class address{
    private street: string;
    private suite: string;
    private city: string;
    private zipcode: string;
    private geo: geo;// Quando temos um objeto como tributo, seu tipo é o objeto(classe) que tem seus atributos.

/*---------------------------------------------------- */
    public getStreet(): string{
        return this.street
    }
    public setStreet(street: string): void{
        this.street = street;
    }
/*---------------------------------------------------- */
    public getSuite(): string{
        return this.suite
    }
    public setSuite(suite: string): void{
        this.suite = suite;
    }
/*---------------------------------------------------- */

    public getCity(): string{
        return this.city
    }
    public setCity(city: string): void{
        this.city = city;
    }
/*---------------------------------------------------- */
    public getZipcode(): string{
        return this.zipcode
    }
    public setZipcode(zipcode: string): void{
        this.zipcode = zipcode;
    }
/*---------------------------------------------------- */
    public getGeo(): geo{
        return this.geo
    }
    public setGeo(geo: geo): void{
        this.geo = geo;
    }

}



