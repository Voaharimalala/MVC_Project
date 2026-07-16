import type { Facture } from "../model/FactureModel";

const factures: Facture[] = [];

export function genererFacture(
  client: string,
  telephone: string,
  articles: Facture["articles"],
  total: number,
  modePaiement: string
): Facture {

  const nouvelleFacture: Facture = {
    id: Date.now(),
    numero: "FAC-" + Date.now(),
    client: client || "Client divers",
    telephone: telephone || "-",
    articles,
    total,
    modePaiement,
    date: new Date().toLocaleDateString(),
  };

  factures.push(nouvelleFacture);

  return nouvelleFacture;
}

export function getFactures(): Facture[] {
  return factures;
}