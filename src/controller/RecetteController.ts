import type { Facture } from "../model/FactureModel";


const recettes: Facture[] = [];


// Ajouter une facture dans les recettes
export function ajouterRecette(facture: Facture){

    recettes.push(facture);

}



// Récupérer toutes les recettes
export function getRecettes(){

    return recettes;

}



// Calculer le montant total des recettes
export function getTotalRecettes(){

    return recettes.reduce(

        (total, facture)=>

        total + facture.total,

        0

    );

}