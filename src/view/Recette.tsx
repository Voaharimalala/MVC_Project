import "./Recette.css";


function Recettes(){

    const recettes = [
        {
            id:1,
            facture:"FAC-001",
            client:"Client 1",
            montant:2500000,
            paiement:"Espèces",
            date:"16/07/2026"
        },

        {
            id:2,
            facture:"FAC-002",
            client:"Client 2",
            montant:500000,
            paiement:"Mobile Money",
            date:"16/07/2026"
        }
    ];



    const totalRecettes = recettes.reduce(

        (total, recette)=>

        total + recette.montant,

        0

    );



    return (

        <div className="recette-page">


            <div className="header-page">

                <h1>
                    Gestion des Recettes
                </h1>

            </div>



            <div className="cards">


                <div className="card">

                    <h3>
                        Total des recettes
                    </h3>

                    <p>
                        {totalRecettes.toLocaleString()} Ar
                    </p>

                </div>


                <div className="card">

                    <h3>
                        Nombre de ventes
                    </h3>

                    <p>
                        {recettes.length}
                    </p>

                </div>


            </div>





            <table className="recette-table">


                <thead>

                    <tr>

                        <th>
                            Facture
                        </th>

                        <th>
                            Client
                        </th>

                        <th>
                            Montant
                        </th>

                        <th>
                            Paiement
                        </th>

                        <th>
                            Date
                        </th>

                    </tr>

                </thead>



                <tbody>


                {
                    recettes.map((recette)=>(

                        <tr key={recette.id}>


                            <td>
                                {recette.facture}
                            </td>


                            <td>
                                {recette.client}
                            </td>


                            <td>
                                {recette.montant.toLocaleString()} Ar
                            </td>


                            <td>
                                {recette.paiement}
                            </td>


                            <td>
                                {recette.date}
                            </td>


                        </tr>

                    ))
                }


                </tbody>


            </table>



        </div>

    );


}


export default Recettes;