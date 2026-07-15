import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddArticle.css";

function AddArticle() {
  
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [dateAjout, setDateAjout] = useState("");
  const [stockInitial, setStockInitial] = useState("");
  

  const ajouter = (e: React.FormEvent) => {

  e.preventDefault();


  const article = {

    id: Date.now(),

    nom,

    dateAjout,

    stockInitial: Number(stockInitial),

    stockVendu: 0,

    stockFinal: Number(stockInitial),

    statut: "Disponible"

  };


  console.log(article);


  alert("Article ajouté avec succès");


  navigate("/");

};


  return (

    <div className="add-page">


      <div className="header-page">

        <h1>
          Ajouter un article
        </h1>

      </div>



      <div className="form-card">


        <form onSubmit={ajouter}>


          <div className="form-group">

            <label>
              Nom de l'article
            </label>

            <input
              type="text"
              placeholder="Nom de l'article"
              value={nom}
              onChange={(e)=>setNom(e.target.value)}
              required
            />

          </div>




          <div className="form-group">

            <label>
              Date d'ajout
            </label>

            <input
              type="date"
              value={dateAjout}
              onChange={(e)=>setDateAjout(e.target.value)}
              required
            />

          </div>




          <div className="form-group">

            <label>
              Stock initial
            </label>

            <input
  type="number"
  value={stockInitial}
  onChange={(e) =>
    setStockInitial(e.target.value)
  }
  min="0"
  required
/>

          </div>



          <button className="submit-btn">

            Ajouter l'article

          </button>


        </form>


      </div>


    </div>

  );
}


export default AddArticle;