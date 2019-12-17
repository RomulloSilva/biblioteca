/*Criando a classe Geo que alimenta a classe address */

export class geo{
 
    private lat: string;
    private lng: string;

    public getLat(): string{
        return this.lat
    }
    public setLat(lat: string): void{
        this.lat = lat;
    }
    
    public getLng(): string{
        return this.lng
    }
    public setLng(lng: string): void{
        this.lng = lng;
    }



}