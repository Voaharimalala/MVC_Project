import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import ListeArticles from "./view/ListeArticles";
import EtatStock from "./view/EtatStock";
import AddArticle from "./view/AddArticle";
import ViewHistorique from "./view/ViewHistorique";
import PaiementFacture from "./view/PaiementFacture";
import Recettes from "./view/Recette";


function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<ListeArticles />} />

        <Route path="/stock" element={<EtatStock />} />

        <Route path="/liste-articles" element={<ListeArticles />} />

        <Route path="/ajouter-article" element={<AddArticle />} />

        <Route path="/historique" element={<ViewHistorique />} />

        <Route path="/factures" element={<PaiementFacture />} />
        <Route path="/recettes" element={<Recettes />} />

      </Routes>
    </>
  );
}

export default App;