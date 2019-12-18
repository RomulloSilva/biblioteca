/*Aqui fazemos importação das classes que estão dentro da classe user */
import{address} from './Address';
import {company} from './Company';

/*Criando a Classe principal */

export class  user{
    private id: number;
    private name: string;
    private username: string;
    private email: string;
    private address: address;// Quando temos um objeto como tributo, seu tipo é o objeto(classe) que tem seus atributos.
    private phone: string;
    private website: string;
    private company: company;// Quando temos um objeto como tributo, seu tipo é o objeto(classe) que tem seus atributos.
/*---------------------------------------------------- */
    public getId(): number{
        return this.id
    }
    public setId(id: number): void{
        this.id = id;
    }
/*---------------------------------------------------- */

    public getName(): string{
        return this.name
    }
    public setName(name: string): void{
        this.name = name;
    }
/*---------------------------------------------------- */

public getUsername(): string{
    return this.username
}
public setUsername(username: string): void{
    this.username = username;
}


/*---------------------------------------------------- */

public getEmail(): string{
    return this.email
}
public setEmail(email: string): void{
    this.email = email;
}

/*---------------------------------------------------- */

public getAddress(): string{
    return this.address
}
public setAddress(address: string): void{
    this.address = address;
}

/*---------------------------------------------------- */

public getPhone(): string{
    return this.phone
}
public setPhone(phone: string): void{
    this.phone = phone;
}

/*---------------------------------------------------- */

public getWebsite(): string{
    return this.website
}
public setWebsite(website: string): void{
    this.website = website;
}

/*---------------------------------------------------- */

public getCompany(): string{
    return this.company
}
public setCompany(company: string): void{
    this.company = company;
}

/*---------------------------------------------------- */


}

