import EtatStock from "./views/EtatStock";
import AddArticle from "./views/AddArticle";
import "./App.css";

function App() {
  return (
    <>
      <h1>Gestion de Stock</h1>

      <AddArticle />

      <EtatStock />
    </>
  );
}

export default App;