import {viewHistorique} from "./view/ViewHistorique.tsx";
import './App.css';

function App() {
  return(
    <div className="App">
      <header className="App-header">
        <h1>Gestion de stocks</h1>
      </header>
      <main className="App-main">
        {viewHistorique()}

      </main>
    </div>
  );


}
export default App;
