import { Routes, Route } from "react-router-dom";

import EtatStock from "./views/EtatStock";
import AddArticle from "./views/AddArticle";

function App() {

  return (
    <Routes>

      <Route 
        path="/" 
        element={<EtatStock />} 
      />

      <Route 
        path="/ajouter-article" 
        element={<AddArticle />} 
      />

    </Routes>
  );
}

export default App;