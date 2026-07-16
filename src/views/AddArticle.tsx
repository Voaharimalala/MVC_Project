import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddArticle.css";

import {
  FaPlus,
  FaCalendarAlt,
  FaBoxes,
  FaTag
} from "react-icons/fa";

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


      <div className="form-header">

        <h1>
          Ajouter un article
        </h1>

      </div>



      <div className="form-card">


        <form onSubmit={ajouter}>


          <div className="form-group">

  <label>Nom de l'article</label>

  <div className="input-icon">

    <FaTag className="icon" />

    <input
      type="text"
      placeholder="Nom de l'article"
      value={nom}
      onChange={(e) => setNom(e.target.value)}
      required
    />

  </div>

</div>




          <div className="form-group">

           <label>Date d'ajout</label>

           <div className="input-icon">

             <FaCalendarAlt className="icon"/>

             <input
              type="date"
              value={dateAjout}
              onChange={(e)=>setDateAjout(e.target.value)}
              required
            />

           </div>

          </div>



          <div className="form-group">

            <label>Stock initial</label>

            <div className="input-icon">

              <FaBoxes className="icon" />

              <input
                type="number"
                placeholder="Quantité"
                value={stockInitial}
                onChange={(e) => setStockInitial(e.target.value)}
                min="0"
                required
              />

             </div>

          </div>



          <button
            type="submit"
            className="submit-btn"
          >

            <FaPlus />

            Ajouter l'article

          </button>


        </form>


      </div>


    </div>

  );
}


export default AddArticle;