import type { Historique } from "./Historique";


export class HistoriqueModel {

  private key = "historiques";




  constructor() {

    if (!localStorage.getItem(this.key)) {

      const donnees: Historique[] = [

        {
          id:1,
          date:"16/07/2026",
          heure:"09:00",
          action:"Connexion",
          details:"Connexion réussie"
        },

        {
          id:2,
          date:"16/07/2026",
          heure:"09:15",
          action:"Ajout",
          details:"Stock initial: 20"
        },

        {
          id:3,
          date:"16/07/2026",
          heure:"10:30",
          action:"Vente",
          details:"3 unités vendues"
        },

        {
          id:4,
          date:"16/07/2026",
          heure:"11:10",
          action:"Modification",
          details:"Prix modifié"
        },

        {
          id:5,
          date:"16/07/2026",
          heure:"11:45",
          action:"Suppression",
          details:"Article supprimé"
        },

        {
          id:6,
          date:"15/07/2026",
          heure:"18:45",
          action:"Déconnexion",
          details:"-"
        }

      ];


      localStorage.setItem(
        this.key,
        JSON.stringify(donnees)
      );

    }

  }



  getHistoriques(): Historique[] {

    return JSON.parse(
      localStorage.getItem(this.key) || "[]"
    );

  }

  ajouterHistorique(action: Historique) {

  const historiques = this.getHistoriques();

  historiques.push(action);

  localStorage.setItem(
    "historiques",
    JSON.stringify(historiques)
  );

}



}