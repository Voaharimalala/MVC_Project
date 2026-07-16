import { type Article } from "../model/ArticleModel";


const articlesInitiaux: Article[] = [
    {
        id: 1,
        nom: "Ordinateur portable",
        prix: 2500000,
        dateAjout: "2023-01-15",
    },
    {
        id: 2,
        nom: "Clavier mécanique",
        prix: 150000,
        dateAjout: "2023-01-16",
    },
     {
        id: 3,
        nom: "Casque audio",
        prix: 150000,
        dateAjout: "2023-01-16",
    },
];



export function getArticles(): Article[] {


    const data = localStorage.getItem("articles");


    if(data){

        return JSON.parse(data);

    }


    localStorage.setItem(
        "articles",
        JSON.stringify(articlesInitiaux)
    );


    return articlesInitiaux;

}





export function addArticle(article: Article): void {


    const articles = getArticles();


    articles.push(article);


    localStorage.setItem(
        "articles",
        JSON.stringify(articles)
    );


}