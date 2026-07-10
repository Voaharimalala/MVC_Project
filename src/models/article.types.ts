export interface Article {
  id: number;
  nom: string;
  prix: number;       
  categorie: string;  
  quantiteAchetee?: number; 
}