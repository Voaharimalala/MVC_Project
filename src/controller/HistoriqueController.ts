export interface HistoriqueItem{
    id:number;
    date:string;
    utilisateur: string;
    action:string;
}
export class HistoriqueController{
    // recupère les données et les stocks en tableaux
    private historique:HistoriqueItem[] =[];
    getHistorique(): HistoriqueItem[]{
        if(this.historique.length == 0){
            this.historique =[
                {id:1,date:"2026-03-4",utilisateur:"Myriah",action:"connexion"},
                {id:2,date:"2026-03-12",utilisateur:"Mandresy",action:"ajout produit"},
                {id:3,date:"2026-03-4",utilisateur:"Martina",action:"deconnexion"},
            ]
        }
        return this.historique;
    }
    addHistorique(utilisateur:string,action:string) :void {
        const newId = this.historique.length +1;
        const newEntry : HistoriqueItem ={
            id :newId,
            date : new Date().toISOString().split('T')[0],
            utilisateur : utilisateur,
            action: action

        };
        this.historique.push(newEntry);
    }
    deleteHistorique(id :number): void{
        this.historique = this.historique.filter(item => item.id ! == id); 
    }

}