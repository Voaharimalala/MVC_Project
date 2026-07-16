import { useState } from "react";

import { genererFacture } from "../controller/PaiementController";
import { ajouterRecette } from "../controller/RecetteController";

import "./PaiementFacture.css";

import type { Facture } from "../model/FactureModel";


function PaiementFacture() {


  const produits = [

    {
      nom: "Ordinateur portable",
      prix: 2500000,
    },

    {
      nom: "Clavier mécanique",
      prix: 150000,
    },

    {
      nom: "Casque",
      prix: 15000,
    },

    {
      nom: "Casque audio",
      prix: 45000,
    },

    {
      nom: "Imprimante",
      prix: 100000,
    },

    {
      nom: "Téléphone",
      prix: 200000,
    },

    {
      nom: "Caméra",
      prix: 15000,
    },

    {
      nom: "Appareil photo",
      prix: 36000,
    },

  ];



  const [client,setClient] = useState("");

  const [telephone,setTelephone] = useState("");

  const [article,setArticle] = useState(produits[0]);

  const [quantite,setQuantite] = useState(1);

  const [panier,setPanier] = useState<Facture["articles"]>([]);

  const [facture,setFacture] = useState<Facture | null>(null);

  const [mode,setMode] = useState("Espèces");





  function ajouterArticle(){


    const existe = panier.find(

      (p)=>p.nom === article.nom

    );



    if(existe){


      setPanier(

        panier.map((p)=>

          p.nom === article.nom

          ?

          {

            ...p,

            quantite:p.quantite + quantite

          }

          :

          p

        )

      );


    }


    else{


      setPanier([

        ...panier,

        {

          nom:article.nom,

          prix:article.prix,

          quantite:quantite

        }

      ]);


    }


  }






  const total = panier.reduce(

    (acc,p)=>

    acc + (p.prix * p.quantite),

    0

  );







  function validerPaiement(){


    const nouvelleFacture = genererFacture(

      client,

      telephone,

      panier,

      total,

      mode

    );



    // Afficher la facture

    setFacture(nouvelleFacture);



    // Enregistrer la vente dans les recettes

    ajouterRecette(nouvelleFacture);



  }








  return (


    <div className="paiement-container">



      <h1>
        Paiement & Facture
      </h1>





      <div className="form">


        <input

          placeholder="Nom du client"

          value={client}

          onChange={(e)=>setClient(e.target.value)}

        />




        <input

          placeholder="Téléphone"

          value={telephone}

          onChange={(e)=>setTelephone(e.target.value)}

        />





        <select

          onChange={(e)=>

            setArticle(

              produits[e.target.selectedIndex]

            )

          }

        >


          {

            produits.map((p,index)=>(

              <option key={index}>

                {p.nom} - {p.prix.toLocaleString()} Ar

              </option>

            ))

          }


        </select>






        <input

          type="number"

          value={quantite}

          min="1"

          onChange={(e)=>

            setQuantite(Number(e.target.value))

          }

        />






        <button onClick={ajouterArticle}>

          Ajouter

        </button>



      </div>







      <table>


        <thead>

          <tr>

            <th>
              Article
            </th>

            <th>
              Prix
            </th>

            <th>
              Quantité
            </th>

            <th>
              Total
            </th>


          </tr>


        </thead>



        <tbody>


        {

          panier.map((p,index)=>(


            <tr key={index}>


              <td>
                {p.nom}
              </td>


              <td>
                {p.prix.toLocaleString()} Ar
              </td>


              <td>
                {p.quantite}
              </td>


              <td>

                {(p.prix*p.quantite).toLocaleString()} Ar

              </td>


            </tr>


          ))

        }


        </tbody>



      </table>






      <h2>

        Total : {total.toLocaleString()} Ar

      </h2>






      <select

        onChange={(e)=>setMode(e.target.value)}

      >

        <option>
          Espèces
        </option>

        <option>
          Mobile Money
        </option>

        <option>
          Carte bancaire
        </option>


      </select>







      <button

        className="valider"

        onClick={validerPaiement}

      >
        Valider le paiement
      </button>
      {

      facture &&

      <div className="facture">


        <h2>
          MADA INFORMATIQUE
        </h2>

        <p>
          Facture N° : {facture.numero}
        </p>


        <p>
          Date : {facture.date}
        </p>

        <p>
          Client : {facture.client}
        </p>
        <hr />
        {

          facture.articles.map(

            (p,index)=>(


              <p key={index}>

                {p.nom} x {p.quantite}

                &nbsp;

                {(p.prix*p.quantite).toLocaleString()} Ar


              </p>


            )

          )

        }
        <h3>

          TOTAL : {facture.total.toLocaleString()} Ar

        </h3>
        <p>

          Paiement : {facture.modePaiement}

        </p>
        <button onClick={()=>window.print()}>

          Imprimer

        </button>
      </div>
      }
    </div>
  );
}


export default PaiementFacture;