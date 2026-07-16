import { useState } from "react";

import {
    FaSearch,
    FaLaptop,
    FaKeyboard,
    FaMouse,
    FaPrint,
    FaHdd,
    FaMobileAlt,
    FaHeadphones,
    FaTabletAlt,
    FaCamera,
    FaMemory
} from "react-icons/fa";

import "./ListeArticles.css";

import { getArticles } from "../controller/ListeArticleController";


function ListeArticles(){


    const [recherche, setRecherche] = useState("");


    const [articles] = useState(getArticles());



    const articlesFiltres = articles.filter(article =>

        article.nom
            .toLowerCase()
            .includes(recherche.toLowerCase())

    );




    const choisirIcone = (nom: string) => {


        const nomArticle = nom.toLowerCase();



        if(nomArticle.includes("ordinateur")){

            return <FaLaptop />;

        }



        if(nomArticle.includes("clavier")){

            return <FaKeyboard />;

        }



        if(nomArticle.includes("souris")){

            return <FaMouse />;

        }



        if(nomArticle.includes("imprimante")){

            return <FaPrint />;

        }

        if(nomArticle.includes("disque")){

            return <FaHdd />;

        }

        if(nomArticle.includes("mobile")){

            return <FaMobileAlt />;

        }

        if(nomArticle.includes("casque")){

            return <FaHeadphones />;

        }



        if(nomArticle.includes("tablette")){

            return <FaTabletAlt />;

        }



        if(nomArticle.includes("appareil photo ")){

            return <FaCamera />;

        }
        if(nomArticle.includes("mémoire")){

            return <FaMemory />;
        }
        return <FaLaptop />;

    };
    return (
        <div className="article-page">
            <div className="article-title">
                <h1>
                    Liste des articles
                </h1>
            </div>
            <div className="search-container">
                <FaSearch />
                <input
                    type="text"
                    placeholder="Rechercher un article..."
                    value={recherche}
                    onChange={(e) =>
                        setRecherche(e.target.value)
                    }
                />


            </div>





            <div className="article-container">


                {

                    articlesFiltres.map(article => (


                        <div

                            className="article-card"

                            key={article.id}

                        >



                            <div className="article-icon">

                                {choisirIcone(article.nom)}

                            </div>




                            <h2>

                                {article.nom}

                            </h2>




                            <div className="article-price">

                                {article.prix.toLocaleString()} Ar

                            </div>



                        </div>


                    ))

                }


            </div>



        </div>

    );

}


export default ListeArticles;