import React from 'react';
import type { Article } from '../models/article.types';

interface ListeCategoriesProps {
  articles: Article[];
}

export const ListeCategories: React.FC<ListeCategoriesProps> = ({ articles }) => {
  
  // 1. LOGIQUE : Regroupement par catégorie
  const articlesGroupes = articles.reduce((acc, article) => {
    if (!acc[article.categorie]) {
      acc[article.categorie] = [];
    }
    acc[article.categorie].push(article);
    return acc;
  }, {} as { [categorie: string]: Article[] });

  return (
    <div style={{ padding: '10px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
      
      {articles.length === 0 && (
        <p style={{ color: '#777', fontStyle: 'italic' }}>Aucun article dans le catalogue pour le moment.</p>
      )}

      {/* 2. GRILLE RESPONSIVE POUR LES CATÉGORIES */}
      {/* display: 'grid' avec auto-fill permet de créer des colonnes automatiquement selon la taille de l'écran */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px', // Espace entre les blocs de catégories
        width: '100%'
      }}>
        {Object.keys(articlesGroupes).map((nomCategorie) => (
          <div 
            key={nomCategorie} 
            style={{ 
              border: '1px solid #e0e0e0', 
              borderRadius: '8px', 
              overflow: 'hidden',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* En-tête de la catégorie */}
            <div style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '12px', fontWeight: 'bold' }}>
              📁 {nomCategorie}
            </div>

            {/* Liste des articles */}
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, flexGrow: 1 }}>
              {articlesGroupes[nomCategorie].map((article) => (
                <li 
                  key={article.id} 
                  style={{ 
                    padding: '12px', 
                    borderBottom: '1px solid #eee', 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <span style={{ fontSize: '15px', color: '#333', fontWeight: 500 }}>{article.nom}</span>
                  <span style={{ 
                    backgroundColor: '#2ecc71', 
                    color: 'white', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap' // Évite que le prix se coupe en deux sur petit écran
                  }}>
                    {article.prix.toFixed(2)} Ar
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};