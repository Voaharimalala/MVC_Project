import type { Article } from "../model/ListeArticleModel";


const articles: Article[] = [];


/**
 * Ajouter un article
 */
export function addArticle(article: Article){

    articles.push(article);

}


/**
 * Récupérer tous les articles
 */
export function getArticles(){

    return articles;

}