import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import ListeArticles from "./view/ListeArticles";
import EtatStock from "./view/EtatStock";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ListeArticles />} />
        <Route path="/stock" element={<EtatStock />} />
      </Routes>
    </>
  );
}

export default App;