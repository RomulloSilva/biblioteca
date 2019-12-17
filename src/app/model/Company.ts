
/*Criando a classe company para alimentar a classe user */
export class company{

    private name: string;
    private catchPhrase: string;
    private bs: string;


public getName(): string{
    return this.name
}
public setName(name: string): void{
    this.name = name;
}

public getCatchPhrase(): string{
    return this.catchPhrase
}
public setCatchPhrase(catchPhrase: string): void{
    this.catchPhrase = this.catchPhrase;
}

public getBs(): string{
    return this.bs
}
public setBs(bs: string): void{
    this.bs = bs;
}

}