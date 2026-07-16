import {HistoriqueController } from "../controller/HistoriqueController.tsx";
import './ViewHistorique.css';
export function viewHistorique(){
  const controller= new HistoriqueController();
  const historique = controller.getHistorique();
  return(
    <div className="historique-container">
        <h2>historique des activites</h2>
        <ul>
            {historique.map((h) => (
               <li key ={h.id}>
                    {h.date} |{h.utilisateur} | {h.action}
              </li>
            ))}
          </ul>
    </div>
  );
}
export default viewHistorique;