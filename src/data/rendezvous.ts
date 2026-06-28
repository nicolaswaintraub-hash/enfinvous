// Contenu de la page Les Rendez-vous (présentiel) — maquette statique.

import type { Event } from "@/data/landing";

export const presentielEvents: Event[] = [
  {
    id: "rv1",
    title: "Dégustation : les grands crus de Bourgogne",
    date: "Mercredi 28 mai",
    time: "18h00",
    duration: "2h",
    expert: "Bertrand Caillaux",
    variant: "presentiel",
    theme: "Gastronomie",
    description:
      "Cinq domaines d'exception, commentés par une sommelière passionnée, dans un cadre feutré.",
    image:
      "https://image.shutterstock.com/image-photo/group-professional-man-woman-sommelier-winemaker-600nw-2444538845.jpg",
    venue: "Domaine des Crayères",
    city: "Reims",
    spotsLeft: 3,
  },
  {
    id: "rv2",
    title: "Visite privée : la collection Pinault",
    date: "Samedi 31 mai",
    time: "10h30",
    duration: "2h30",
    expert: "Florence Aubry",
    variant: "signature",
    theme: "Culture",
    description:
      "Un parcours exclusif dans les salles habituellement fermées au public, en cercle restreint.",
    image:
      "https://image.shutterstock.com/image-photo/senior-man-examining-beautiful-paintings-art-600nw-2574536251.jpg",
    venue: "Bourse de Commerce",
    city: "Paris",
    spotsLeft: 6,
  },
  {
    id: "rv3",
    title: "Promenade culturelle dans le Marais",
    date: "Dimanche 1er juin",
    time: "11h00",
    duration: "2h",
    expert: "Hélène Carrère",
    variant: "presentiel",
    theme: "Culture",
    description:
      "Hôtels particuliers, cours secrètes et anecdotes d'histoire, le temps d'une flânerie commentée.",
    image:
      "https://image.shutterstock.com/image-photo/loving-retired-senior-couple-hiking-woodland-600nw-2224792895.jpg",
    venue: "Quartier du Marais",
    city: "Paris",
    spotsLeft: 9,
  },
  {
    id: "rv4",
    title: "Salon littéraire autour de Margaux Lenoir",
    date: "Jeudi 5 juin",
    time: "17h00",
    duration: "2h",
    expert: "Margaux Lenoir",
    variant: "signature",
    theme: "Littérature",
    description:
      "Un atelier intimiste avec l'autrice, suivi d'un échange autour d'un thé, dans un salon d'exception.",
    image:
      "https://image.shutterstock.com/image-photo/elderly-woman-reading-desk-typewriter-cozy-600nw-2586315133.jpg",
    venue: "Hôtel Particulier Montmartre",
    city: "Paris",
    spotsLeft: 2,
  },
  {
    id: "rv5",
    title: "Table d'hôtes : les saveurs du Sud",
    date: "Samedi 7 juin",
    time: "12h30",
    duration: "3h",
    expert: "Bertrand Caillaux",
    variant: "presentiel",
    theme: "Gastronomie",
    description:
      "Un déjeuner de chef en petit comité, où chaque plat raconte une région et une histoire.",
    image:
      "https://image.shutterstock.com/image-photo/elderly-couple-cellar-glass-wine-tasting-600nw-2452517085.jpg",
    venue: "Mas de la Lavande",
    city: "Aix-en-Provence",
    spotsLeft: 5,
  },
  {
    id: "rv6",
    title: "Concert privé : un récital au crépuscule",
    date: "Vendredi 13 juin",
    time: "19h00",
    duration: "1h30",
    expert: "Henri Lemaire",
    variant: "presentiel",
    theme: "Musique",
    description:
      "Un programme romantique joué pour le cercle, dans l'acoustique chaleureuse d'un salon de musique.",
    image:
      "https://image.shutterstock.com/image-photo/senior-man-playing-piano-music-living-600nw-2371956533.jpg",
    venue: "Salons du Petit Palais",
    city: "Paris",
    spotsLeft: 8,
  },
];

export interface Lieu {
  id: string;
  name: string;
  city: string;
  type: string;
  image: string;
}

export const lieux: Lieu[] = [
  {
    id: "l1",
    name: "Bourse de Commerce",
    city: "Paris",
    type: "Galerie d'art",
    image:
      "https://image.shutterstock.com/image-photo/senior-multiracial-artists-examining-pages-abstract-600nw-2632939849.jpg",
  },
  {
    id: "l2",
    name: "Domaine des Crayères",
    city: "Reims",
    type: "Domaine viticole",
    image:
      "https://image.shutterstock.com/image-photo/portrait-loving-married-senior-couple-drinking-600nw-2357114735.jpg",
  },
  {
    id: "l3",
    name: "Hôtel Particulier Montmartre",
    city: "Paris",
    type: "Salon d'exception",
    image:
      "https://image.shutterstock.com/image-photo/senior-adult-people-white-hair-enjoying-600nw-1391889773.jpg",
  },
  {
    id: "l4",
    name: "Mas de la Lavande",
    city: "Aix-en-Provence",
    type: "Maison de campagne",
    image:
      "https://image.shutterstock.com/image-photo/senior-caucasian-couple-white-hair-sitting-600nw-1386438644.jpg",
  },
  {
    id: "l5",
    name: "Salons du Petit Palais",
    city: "Paris",
    type: "Salon de musique",
    image:
      "https://image.shutterstock.com/image-photo/senior-couple-playing-on-piano-together-600nw-2303340835.jpg",
  },
];

export interface DeroulementStep {
  num: string;
  title: string;
  text: string;
}

export const deroulementSteps: DeroulementStep[] = [
  {
    num: "01",
    title: "Réservation",
    text: "Vous réservez votre place en quelques instants. Le groupe reste volontairement restreint, quinze personnes au plus.",
  },
  {
    num: "02",
    title: "Convocation soignée",
    text: "Vous recevez une invitation élégante : adresse, accès, déroulé de l'atelier et nom de votre complice du jour.",
  },
  {
    num: "03",
    title: "Accueil sur place",
    text: "À votre arrivée, vous êtes accueilli personnellement. Vestiaire, rafraîchissement, et le temps de faire connaissance.",
  },
  {
    num: "04",
    title: "Souvenir partagé",
    text: "L'atelier se prolonge autour d'un moment convivial. Vous repartez avec des visages, des mots, une émotion.",
  },
];

export const filterOptions = {
  themes: [
    "Toutes les thématiques",
    "Gastronomie",
    "Culture",
    "Musique",
    "Littérature",
  ],
  villes: ["Toutes les villes", "Paris", "Reims", "Aix-en-Provence"],
  mois: ["Tous les mois", "Mai 2026", "Juin 2026"],
};
