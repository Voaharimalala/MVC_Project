import { HistoriqueController } from "../controllers/HistoriqueController";
import "./Historique.css";
import { useState } from "react";


export default function Historique() {

  const controller = new HistoriqueController();

  const [recherche, setRecherche] = useState("");

  const [page, setPage] = useState(1);


  const historiques = controller
    .afficherHistorique()
    .filter((h) =>
      Object.values(h)
        .join(" ")
        .toLowerCase()
        .includes(recherche.toLowerCase())
    );


  const lignesParPage = 10;

  const debut = (page - 1) * lignesParPage;

  const historiquesAffiches = historiques.slice(
    debut,
    debut + lignesParPage
  );


  return (

    <div>


      {/* Barre de recherche */}

      <div className="search-bar">

        <input
          type="text"
          placeholder="🔍 Rechercher..."
          value={recherche}
          onChange={(e) => {
            setRecherche(e.target.value);
            setPage(1);
          }}
        />

      </div>



      {/* Tableau historique */}

      <div className="historique-card">


        <h2>
          Historique des actions
        </h2>



        <table>

          <thead>

            <tr>
              <th>Date</th>
              <th>Heure</th>
              <th>Action</th>
              <th>Détails</th>
            </tr>

          </thead>



          <tbody>

            {
              historiquesAffiches.map((h) => (

                <tr key={h.id}>

                  <td>{h.date}</td>

                  <td>{h.heure}</td>


                  <td>

                    <span className={`action-icon ${h.action}`}>

                      {h.action === "Connexion" && "✓"}
                      {h.action === "Ajout" && "+"}
                      {h.action === "Vente" && "€"}
                      {h.action === "Modification" && "✎"}
                      {h.action === "Suppression" && "×"}
                      {h.action === "Déconnexion" && "○"}

                    </span>

                    {" "}

                    {h.action}

                  </td>


                  <td>
                    {h.details}
                  </td>


                </tr>

              ))
            }


          </tbody>


        </table>




        <div className="pagination">


          <button onClick={() => setPage(page - 1)}>
            ◀
          </button>


          <button onClick={() => setPage(1)}>
            1
          </button>


          <button onClick={() => setPage(2)}>
            2
          </button>


          <button onClick={() => setPage(3)}>
            3
          </button>


          <button onClick={() => setPage(4)}>
            4
          </button>


          <button onClick={() => setPage(5)}>
            5
          </button>


          <button onClick={() => setPage(page + 1)}>
            ▶
          </button>


        </div>


      </div>


    </div>

  );

}