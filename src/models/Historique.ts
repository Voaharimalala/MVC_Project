export type ActionType =
  | "Connexion"
  | "Ajout"
  | "Vente"
  | "Modification"
  | "Suppression"
  | "Déconnexion";


export interface Historique {

  id: number;
  date: string;
  heure: string;
  action: ActionType;
  details: string;

}