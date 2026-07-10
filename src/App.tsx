import { useState } from 'react';
import type { Article } from './models/article.types';
import { ListeCategories } from './components/ListeCategories';

function App() {
  // Le "Cerveau" : Tableau d'articles partagé par tout le groupe
  const [articles] = useState<Article[]>([
    { id: 1, nom: "Cafetière", prix: 45000, categorie: "Électroménager" },
    { id: 2, nom: "Sac de riz 5kg", prix: 25000, categorie: "Alimentation" },
    { id: 3, nom: "Huile de table", prix: 12000, categorie: "Alimentation" },
    { id: 4, nom: "Cahier de note", prix: 3500, categorie: "Fournitures" }
  ]);

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>🛒 Gestionnaire d'Articles</h1>
      <hr style={{ border: '1px solid #eee', margin: '20px 0' }} />

      {/* ZONE ÉQUIPE 1 : AJOUT D'ARTICLES */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '18px', color: '#7f8c8d' }}>1. Ajout d'Articles (Zone Équipe 1)</h2>
        <div style={{ padding: '15px', background: '#f9f9f9', borderRadius: '8px', border: '1px dashed #ccc' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            💡 Ici, l'équipe 1 placera son composant <code>&lt;FormulaireAjout /&gt;</code> pour ajouter dynamiquement des articles.
          </p>
        </div>
      </section>

      {/* VOTRE ZONE : AFFICHAGE PAR CATÉGORIES ET PRIX */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '18px', color: '#7f8c8d' }}>2. Catalogue par Catégorie (Votre Équipe)</h2>
        {/* Votre composant responsive est appelé ici */}
        <ListeCategories articles={articles} />
      </section>

      {/* ZONE ÉQUIPE 3 : FACTURE ET SOMME */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '18px', color: '#7f8c8d' }}>3. Total et Facturation (Zone Équipe 3)</h2>
        <div style={{ padding: '15px', background: '#f9f9f9', borderRadius: '8px', border: '1px dashed #ccc' }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
            💡 Ici, l'équipe 3 mettra sa logique de calcul. En attendant, voici un calcul automatique :
          </p>
          <strong style={{ fontSize: '18px', color: '#2c3e50' }}>
            Montant total du catalogue : {articles.reduce((sum, art) => sum + art.prix, 0).toFixed(2)} Ar
          </strong>
        </div>
      </section>
    </div>
  );
}

export default App;