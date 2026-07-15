export interface Article {
  id: number;
  nom: string;
  dateAjout: string;
  stockInitial: number;
  stockVendu: number;
  stockFinal: number;
  statut: "Disponible" | "Stock faible" | "Rupture";
}