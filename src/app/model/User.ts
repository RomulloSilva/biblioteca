/*Aqui fazemos importação das classes que estão dentro da classe user */
import{address} from './Address';
import {company} from './Company';

/*Criando a Classe principal */

export class  user{
    private id: string;
    private name: string;
    private username: string;
    private email: string;
    private address: string;
    private phone: string;
    private website: string;
    private company: string;
/*---------------------------------------------------- */
    public getId(): string{
        return this.id
    }
    public setId(id: string): void{
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

