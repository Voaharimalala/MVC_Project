import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getArticles } from "../controller/ListeArticleController";

import {
  FaPlus,
  FaTrash,
  FaEdit,
  FaSearch,
} from "react-icons/fa";

import "./EtatStock.css";

import { type Article } from "../model/StockModel";


function EtatStock() {


  const navigate = useNavigate();



  const [listeArticles, setListeArticles] = useState<Article[]>(

    getArticles()

  );



  const [recherche, setRecherche] = useState("");




  // FILTRAGE RECHERCHE

  const articlesFiltres = listeArticles.filter((article) =>

    article.nom.toLowerCase().includes(recherche.toLowerCase())

  );





  // SUPPRESSION

  const supprimer = (id:number)=>{


    const confirmation = window.confirm(

      "Voulez-vous vraiment supprimer cet article ?"

    );


    if(!confirmation) return;



    setListeArticles(

      listeArticles.filter(

        (article)=>article.id !== id

      )

    );


  };





  return (


    <div className="stock-page">



      <div className="header-page">


        <h1>

          Suivi du Stock

        </h1>


      </div>





      <div className="toolbar">


        <div className="search-box">


          <FaSearch />


          <input

            type="text"

            placeholder="Rechercher un article..."

            value={recherche}

            onChange={(e)=>

              setRecherche(e.target.value)

            }


          />


        </div>


      </div>







      <table className="stock-table">



        <thead>


          <tr>


            <th>
              Article
            </th>


            <th>
              Date d'ajout
            </th>


            <th>
              Stock Initial
            </th>


            <th>
              Stock Vendu
            </th>


            <th>
              Stock Final
            </th>


            <th>
              Statut
            </th>


            <th>
              Actions
            </th>


          </tr>


        </thead>






        <tbody>



        {

          articlesFiltres.length === 0 ? (


            <tr>


              <td colSpan={7}>

                Aucun article disponible

              </td>


            </tr>


          ) : (


            articlesFiltres.map((article)=>(



              <tr key={article.id}>


                <td>

                  {article.nom}

                </td>




                <td>

                  {article.dateAjout ?? "Non définie"}

                </td>




                <td>

                  {article.stockInitial}

                </td>




                <td>

                  {article.stockVendu}

                </td>




                <td>

                  {article.stockFinal}

                </td>





                <td>


                  <span

                    className={

                      article.statut === "Disponible"

                      ? "badge disponible"


                      : article.statut === "Stock faible"

                      ? "badge faible"


                      : "badge rupture"


                    }


                  >


                    {article.statut}


                  </span>


                </td>







                <td>


                  <div className="actions">


                    <button

                      className="edit-btn"

                      onClick={()=>


                        alert(

                          "Le formulaire de modification sera ajouté plus tard."

                        )


                      }

                    >


                      <FaEdit />


                    </button>






                    <button

                      className="delete-btn"

                      onClick={()=>supprimer(article.id)}

                    >


                      <FaTrash />


                    </button>




                  </div>


                </td>




              </tr>



            ))


          )


        }



        </tbody>



      </table>






      <div className="bottom-button">


        <button

          className="add-btn"

          onClick={()=>navigate("/ajouter-article")}


        >


          <FaPlus />


          Ajouter un nouvel article


        </button>


      </div>



    </div>


  );


}



export default EtatStock;