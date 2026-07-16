import { HistoriqueModel } from "../models/HistoriqueModel";
import type { Historique } from "../models/Historique";

export class HistoriqueController {

  private model: HistoriqueModel;

  constructor() {
    this.model = new HistoriqueModel();
  }

  afficherHistorique() {
    return this.model.getHistoriques();
  }

  ajouterAction(
  action: Historique
){

  this.model.ajouterHistorique(action);

}
}