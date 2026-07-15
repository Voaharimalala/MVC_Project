import { type Article } from "../models/StockModel";

const donnees = [
  {
    id: 1,
    nom: "Ordinateur",
    dateAjout: "10/07/2026",
    stockInitial: 50,
    stockVendu: 12,
  },
  {
    id: 2,
    nom: "Clavier",
    dateAjout: "10/07/2026",
    stockInitial: 30,
    stockVendu: 26,
  },
  {
    id: 3,
    nom: "Souris",
    dateAjout: "10/07/2026",
    stockInitial: 20,
    stockVendu: 20,
  },
  {
    id: 4,
    nom: "Écran",
    dateAjout: "11/07/2026",
    stockInitial: 18,
    stockVendu: 6,
  },
  {
    id: 5,
    nom: "Imprimante",
    dateAjout: "06/07/2026",
    stockInitial: 10,
    stockVendu: 2,
  },
];

export const articles: Article[] = donnees.map((article) => {

  const stockFinal = article.stockInitial - article.stockVendu;

  let statut: "Disponible" | "Stock faible" | "Rupture";

  if (stockFinal === 0) {
    statut = "Rupture";
  } else if (stockFinal <= 5) {
    statut = "Stock faible";
  } else {
    statut = "Disponible";
  }

  return {
    ...article,
    stockFinal,
    statut,
  };
});

/* ===========================
   Fonctions du contrôleur
=========================== */

// Retourner tous les articles
export const getArticles = (): Article[] => {
  return articles;
};

// Rechercher un article
export const rechercherArticle = (motCle: string): Article[] => {

  return articles.filter(article =>
    article.nom.toLowerCase().includes(motCle.toLowerCase())
  );

};

// Supprimer un article
export const supprimerArticle = (id: number): Article[] => {

  return articles.filter(article => article.id !== id);

};