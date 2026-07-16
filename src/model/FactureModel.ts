export interface Facture {

    id: number;

    numero: string;

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