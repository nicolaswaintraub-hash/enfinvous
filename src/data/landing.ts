export type EventVariant = "visio" | "presentiel" | "signature";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  expert: string;
  variant: EventVariant;
  description: string;
}

export interface Expert {
  id: string;
  name: string;
  discipline: string;
}

export interface Theme {
  id: string;
  title: string;
  tagline: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  age: number;
  city: string;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  highlighted: boolean;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Les secrets de la photographie argentique",
    date: "Mardi 27 mai",
    time: "14h30",
    duration: "1h15",
    expert: "Marc Riboud",
    variant: "visio",
    description: "Une plongee dans l'art du tirage, entre patience et lumiere.",
  },
  {
    id: "2",
    title: "Degustation : les grands crus de Bourgogne",
    date: "Mercredi 28 mai",
    time: "18h00",
    duration: "2h",
    expert: "Claire Vallée",
    variant: "presentiel",
    description:
      "Cinq domaines d'exception, commentes par une sommeliere passionnee.",
  },
  {
    id: "3",
    title: "Opera : comprendre Wagner en trois actes",
    date: "Jeudi 29 mai",
    time: "10h00",
    duration: "1h30",
    expert: "Philippe Jordan",
    variant: "signature",
    description:
      "Un voyage musical guide par l'un des grands chefs d'orchestre.",
  },
  {
    id: "4",
    title: "Ecriture : trouver sa voix apres soixante ans",
    date: "Vendredi 30 mai",
    time: "11h00",
    duration: "1h",
    expert: "Annie Ernaux",
    variant: "visio",
    description:
      "L'ecriture comme espace de liberte et de reconquete personnelle.",
  },
  {
    id: "5",
    title: "Visite privee : la collection Pinault",
    date: "Samedi 31 mai",
    time: "10h30",
    duration: "2h30",
    expert: "Caroline Bourgeois",
    variant: "presentiel",
    description:
      "Un parcours exclusif dans les salles habituellement fermees au public.",
  },
  {
    id: "6",
    title: "Philosophie : repenser le temps libre",
    date: "Lundi 2 juin",
    time: "17h00",
    duration: "1h15",
    expert: "Cynthia Fleury",
    variant: "visio",
    description:
      "Comment transformer la retraite en un acte de creation de soi.",
  },
];

export const experts: Expert[] = [
  { id: "1", name: "Marc Riboud", discipline: "Photographie" },
  { id: "2", name: "Claire Vallée", discipline: "Gastronomie" },
  { id: "3", name: "Philippe Jordan", discipline: "Musique classique" },
  { id: "4", name: "Annie Ernaux", discipline: "Litterature" },
  { id: "5", name: "Caroline Bourgeois", discipline: "Art contemporain" },
  { id: "6", name: "Cynthia Fleury", discipline: "Philosophie" },
];

export const themes: Theme[] = [
  {
    id: "1",
    title: "Culture et decouverte",
    tagline: "Elargir ses horizons, nourrir sa curiosite.",
  },
  {
    id: "2",
    title: "Creativite et apprentissage",
    tagline: "Reveler ce que vous n'avez jamais ose exprimer.",
  },
  {
    id: "3",
    title: "Gastronomie",
    tagline: "Partager le plaisir des saveurs rares.",
  },
  {
    id: "4",
    title: "Numerique",
    tagline: "Maitriser les outils d'aujourd'hui, sans complexe.",
  },
  {
    id: "5",
    title: "Voyages",
    tagline: "Partir en cercle restreint, revenir transforme.",
  },
  {
    id: "6",
    title: "Bien-etre",
    tagline: "Prendre soin de soi avec elegance et douceur.",
  },
  {
    id: "7",
    title: "Sexualite et intimite",
    tagline: "Oser aborder ce qui compte, en toute confiance.",
  },
  {
    id: "8",
    title: "Conferences et debats",
    tagline: "Echanger entre esprits libres, sans concession.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "J'ai retrouve le plaisir d'etre surprise. Chaque semaine, une rencontre qui me rappelle pourquoi j'aime vivre.",
    name: "Helene",
    age: 67,
    city: "Paris",
  },
  {
    quote:
      "Ce qui me touche, c'est la qualite des intervenants et la bienveillance du cercle. On se sent chez soi.",
    name: "Bernard",
    age: 72,
    city: "Lyon",
  },
  {
    quote:
      "Depuis que j'ai rejoint le cercle, mes journees ont repris du relief. C'est un luxe discret.",
    name: "Francoise",
    age: 65,
    city: "Bordeaux",
  },
];

export const plans: Plan[] = [
  {
    id: "masterclasses",
    name: "Masterclasses",
    price: 19,
    period: "mois",
    features: [
      "Acces illimite aux masterclasses en visio",
      "Replays disponibles a tout moment",
      "Echanges en direct avec les intervenants",
      "Programme renouvele chaque semaine",
    ],
    highlighted: false,
  },
  {
    id: "illimite",
    name: "Illimite",
    price: 29,
    period: "mois",
    features: [
      "Tout le contenu Masterclasses",
      "Acces aux rendez-vous en presentiel",
      "Escapades et voyages culturels",
      "Priorite sur les evenements signature",
      "Communaute privee et echanges privilegies",
    ],
    highlighted: true,
  },
];
