import type { CommunityStory } from '../types';
import type { DepartmentSection } from './bamboutos';

export const menouaOverview = {
  name: 'Menoua',
  intro:
    "Le département de la Menoua se situe dans la Région de l'Ouest du Cameroun. " +
    "Documentation culturelle vérifiée à venir, fournie par l'association.",
};

export const menouaSections: DepartmentSection[] = [
  { id: 'geography', title: 'Géographie', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
  { id: 'heritage', title: 'Patrimoine', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
  { id: 'communities', title: 'Communautés', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
  { id: 'institutions', title: 'Institutions traditionnelles', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
  { id: 'villages', title: 'Villages', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
  { id: 'languages', title: 'Langues', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
  { id: 'clothing', title: 'Habillement traditionnel', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
  { id: 'food', title: 'Gastronomie', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
  { id: 'music', title: 'Musique', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
  { id: 'dance', title: 'Danse', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
  { id: 'crafts', title: 'Arts et artisanat', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
  { id: 'architecture', title: 'Architecture', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
  { id: 'places', title: 'Lieux importants', body: "Documentation culturelle vérifiée à venir, fournie par l'association." },
];

export const menouaStories: CommunityStory[] = [];
