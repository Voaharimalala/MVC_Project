export interface Paiement {

    id: number;

    client: string;

    telephone: string;

    articles: {

        nom: string;

        prix: number;

        quantite: number;

    }[];

    total: number;

    modePaiement: string;

    date: string;

}