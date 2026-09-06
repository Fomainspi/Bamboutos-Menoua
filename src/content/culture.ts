export interface CultureCategory {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export const cultureCategories: CultureCategory[] = [
  {
    id: 'traditional-heritage',
    title: 'Patrimoine traditionnel',
    description: "Documentation culturelle vérifiée à venir, fournie par l'association.",
    topics: [
      'Chefferies traditionnelles',
      'Architecture traditionnelle',
      'Régalia',
      'Structures communautaires',
    ],
  },
  {
    id: 'arts-crafts',
    title: 'Arts et artisanat',
    description: "Documentation culturelle vérifiée à venir, fournie par l'association.",
    topics: ['Sculpture', 'Travail du bois', 'Textiles', 'Perlage', 'Poterie'],
  },
  {
    id: 'music-dance',
    title: 'Musique et danse',
    description: "Documentation culturelle vérifiée à venir, fournie par l'association.",
    topics: ['Musique traditionnelle', 'Danse', 'Instruments', 'Performances'],
  },
  {
    id: 'clothing',
    title: 'Habillement',
    description: "Documentation culturelle vérifiée à venir, fournie par l'association.",
    topics: ['Habits traditionnels', 'Tissus', 'Accessoires', 'Tenues cérémonielles'],
  },
  {
    id: 'food',
    title: 'Gastronomie',
    description: "Documentation culturelle vérifiée à venir, fournie par l'association.",
    topics: ['Plats traditionnels', 'Ingrédients', 'Recettes', "Traditions culinaires"],
  },
  {
    id: 'oral-heritage',
    title: 'Patrimoine oral',
    description: "Documentation culturelle vérifiée à venir, fournie par l'association.",
    topics: ['Contes', 'Proverbes', 'Légendes', 'Savoirs traditionnels'],
  },
];
