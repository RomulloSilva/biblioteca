import {geo} from './Geo';

/*Criando a classe endereço para alimentar user */
export class address{
    private street: string;
    private suite: string;
    private city: string;
    private zipcode: string;
    private geo: string;

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
    public getGeo(): string{
        return this.geo
    }
    public setGeo(geo: string): void{
        this.geo = geo;
    }

}



