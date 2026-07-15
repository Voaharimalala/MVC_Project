import {type Article } from "../model/ArticleModel";


export const articles: Article[] = [

    {
        id: 1,
        nom: "Ordinateur portable",
        prix: 2500000
    },

    {
        id: 2,
        nom: "Clavier mécanique",
        prix: 150000
    },

    {
        id: 3,
        nom: "Souris sans fil",
        prix: 80000
    },

    {
        id: 4,
        nom: "Écran LED",
        prix: 900000
    },

    {
        id: 5,
        nom: "Imprimante",
        prix: 750000
    },

    {
        id: 6,
        nom: "Disque dur externe",
        prix: 250000
    }

];



export const getArticles = (): Article[] => {

    return articles;

};