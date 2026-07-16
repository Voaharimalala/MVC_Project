import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addArticle } from "../controller/ListeArticleController";

import {
    FaPlus,
    FaCalendarAlt,
    FaBoxes,
    FaTag,
    FaMoneyBillWave
} from "react-icons/fa";


import "./AddArticle.css";


function AddArticle(){

    const navigate = useNavigate();


    const [nom,setNom] = useState("");
    const [prix,setPrix] = useState("");
    const [dateAjout,setDateAjout] = useState("");
    const [stockInitial,setStockInitial] = useState("");



    function ajouter(e:React.FormEvent){

        e.preventDefault();



        const article = {

            id: Date.now(),

            nom: nom,

            prix: Number(prix),

            dateAjout: dateAjout,

            stockInitial: Number(stockInitial),

            stockVendu:0,

            stockFinal:Number(stockInitial),

            statut:"Disponible" as const 

        };



        addArticle(article);



        alert("Article ajouté avec succès");


        navigate("/");


    }



    return(

        <div className="add-page">


            <div className="form-header">

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


                    <div className="input-icon">

                        <FaTag className="icon"/>


                        <input

                        type="text"

                        value={nom}

                        placeholder="Nom"

                        onChange={(e)=>setNom(e.target.value)}

                        required

                        />


                    </div>


                </div>




                <div className="form-group">

                    <label>
                        Prix
                    </label>


                    <div className="input-icon">


                        <FaMoneyBillWave className="icon"/>


                        <input

                        type="number"

                        value={prix}

                        placeholder="Prix"

                        onChange={(e)=>setPrix(e.target.value)}

                        required

                        />


                    </div>


                </div>




                <div className="form-group">


                    <label>
                        Date d'ajout
                    </label>


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


                    <label>
                        Stock initial
                    </label>


                    <div className="input-icon">


                        <FaBoxes className="icon"/>


                        <input

                        type="number"

                        value={stockInitial}

                        placeholder="Quantité"

                        onChange={(e)=>setStockInitial(e.target.value)}

                        required

                        />


                    </div>


                </div>





                <button 
                type="submit"
                className="submit-btn"
                >

                    <FaPlus/>

                    Ajouter l'article

                </button>



            </form>


            </div>


        </div>


    );

}


export default AddArticle;