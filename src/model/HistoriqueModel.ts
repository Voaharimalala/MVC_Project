export class historique{
    id:number;
    date:string;
    utilisateur:string;
    action:string;
    constructor(id:number,date:string,utilisateur:string,action:string){
        this.id = id;
        this.date = date;
        this.utilisateur = utilisateur;
        this.action = action;
    }
}
