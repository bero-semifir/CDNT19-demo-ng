import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private articles: Article[] = [
    {
      title: "Le rachat de Twitter officialisé",
      content: "Les deux parties ont jusqu'à demain vendredi 28 octobre pour s'accorder sur les conditions du rachat du réseau social par l'homme le plus riche du monde. Néanmoins, le milliardaire s'exprime sur le réseau social cet après-midi à propos de ce rachat. Si l'affaire n'était pas conclue vendredi, un procès interviendrait en novembre après plusieurs mois de rebondissements. Surtout, Elon Musk semble désormais avoir les mains libres pour refaçonner Twitter à son envie sinon à son image.",
      read: true,
    },
    {
      title: "Au Brésil, face au risque de chaos, Bolsonaro sort du silence et joue l’apaisement",
      content: "Après près de quarante-huit heures de mutisme depuis l’annonce du résultat de l’élection présidentielle, le chef de l’Etat a promis « de respecter tous les commandements de [la] Constitution », sans reconnaître formellement sa défaite."
    },
    {
      title: "SpaceX enregistre un nouvel exploit lors du lancement de sa fusée Falcon Heavy",
      content: "3 ans après son dernier lancement, SpaceX a envoyé avec succès en orbite sa fusée géante Falcon Heavy dans le cadre de la mission USSF-44. L'agence spatiale dirigée par Elon Musk a réussi un autre exploit : celui de récupérer  deux boosters du premier étage de la fusée. Les boosters latéraux ont effectué leur atterrissage synchronisé sur sur la zone prévu près des côtes de la Floride."
    },
  ];

  constructor() { }

  /**
   * Récupère les articles
   * @returns La liste des articles
   */
  getArticles(): Article[] {
    return this.articles;
  }

  addArticle(article: Article): void {
    this.articles.push(article);
  }

  deleteArticle(article: Article): void {
    this.articles = this.articles.filter(
      (art: Article) => {
        return JSON.stringify(article) !== JSON.stringify(art);
      }
    )
  }

}
