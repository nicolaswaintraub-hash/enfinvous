export type EventVariant = "visio" | "presentiel" | "signature" | "fenetre";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  expert: string;
  /** Identifiant de l'expert qui présente (relie à `experts`), pour la vignette. */
  expertId?: string;
  variant: EventVariant;
  description: string;
  image: string;
  /** Lieu de l'atelier, pour les événements en présentiel. */
  venue?: string;
  /** Ville de l'événement présentiel. */
  city?: string;
  /** Nombre de places encore disponibles (affiché en or sur la carte). */
  spotsLeft?: number;
  /** Grande famille, pour le filtre des listes (Rendez-vous). */
  theme?: string;
  /** Résumé long, pour les fiches éditoriales (programme, replay). */
  summary?: string;
}

export interface Expert {
  id: string;
  name: string;
  discipline: string;
  image: string;
  /** Biographie courte (80 à 120 mots), pour les fiches programme. */
  bio?: string;
}

export interface Theme {
  id: string;
  title: string;
  tagline: string;
  image: string;
  /**
   * Valeur du filtre « Thématique » de la liste des ateliers (doit exister dans
   * `filterOptions.themes`, src/data/rendezvous.ts). Si absente, la tuile mène à
   * la liste complète `/rendez-vous`.
   */
  filter?: string;
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
}

/** Appel aux professionnels qui souhaitent animer un atelier ou un rendez-vous du savoir. */
export interface ExpertContact {
  surtitre: string;
  /** Accroche éditoriale ; `accent` est le membre de phrase souligné « à la main ». */
  title: { lead: string; accent: string; tail: string };
  /** Sous-titre du hero de la page dédiée. */
  heroSubtitle: string;
  intro: string;
  points: { title: string; description: string }[];
  /** Adresse de repli, pour le lien mailto du formulaire. */
  email: string;
  /** Options du champ « Quel type vous intéresse ? » (multi-sélection). */
  interventionTypes: { value: string; label: string; description: string }[];
  /** Message de confirmation affiché en place après l'envoi de la candidature. */
  confirmation: {
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export const events: Event[] = [
  {
    id: "1",
    title: "Les secrets de la Bible",
    date: "Mardi 27 mai",
    time: "14h30",
    duration: "1h15",
    expert: "Étienne Vasseur",
    expertId: "1",
    variant: "visio",
    description:
      "Derrière les récits familiers se cachent des symboles et des sens oubliés. Une plongée passionnante pour redécouvrir la Bible autrement.",
    image:
      "https://images.pexels.com/photos/8675090/pexels-photo-8675090.jpeg?w=600",
  },
  {
    id: "2",
    title: "Atelier d'œnologie : comprendre les grands crus de Bourgogne",
    date: "Mercredi 28 mai",
    time: "18h00",
    duration: "2h",
    expert: "Bertrand Caillaux",
    expertId: "2",
    variant: "presentiel",
    venue: "Maison des Vins",
    city: "Beaune",
    spotsLeft: 6,
    description:
      "Cépages, terroirs et art de la dégustation, en petit cercle, décryptés par un sommelier passionné.",
    image:
      "https://image.shutterstock.com/image-photo/confident-elderly-positive-smiling-man-tasting-600nw-1902582988.jpg",
  },
  {
    id: "8",
    title: "Une fenêtre sur le monde : visite guidée du musée du Caire",
    date: "Vendredi 30 mai",
    time: "15h00",
    duration: "1h30",
    expert: "Florence Aubry",
    expertId: "5",
    variant: "fenetre",
    description:
      "Depuis chez vous, parcourez les trésors du musée égyptien du Caire, des merveilles de Toutânkhamon aux salles des momies royales, commentés en direct.",
    image:
      "https://images.pexels.com/photos/6177483/pexels-photo-6177483.jpeg?w=600",
  },
  {
    id: "3",
    title: "Libido : le désir après 60 ans",
    date: "Jeudi 29 mai",
    time: "10h00",
    duration: "1h30",
    expert: "Dr. Camille Fontaine",
    expertId: "7",
    variant: "signature",
    description:
      "Une conversation sincère sur le désir et l'intimité, abordée avec délicatesse et sans tabou.",
    image:
      "https://image.shutterstock.com/image-photo/portrait-happy-senior-couple-hugging-each-600nw-2444364781.jpg",
  },
  {
    id: "6",
    title: "Philosophie : repenser le temps libre",
    date: "Lundi 2 juin",
    time: "17h00",
    duration: "1h15",
    expert: "Pascal Rivière",
    expertId: "6",
    variant: "visio",
    description:
      "Comment transformer la retraite en un acte de création de soi.",
    image:
      "https://image.shutterstock.com/image-photo/vertical-shot-happy-thoughtful-senior-man-600nw-2396556913.jpg",
  },
];

// Intervenants encore à confirmer : noms neutres et fictifs en attendant la
// programmation définitive (aucune personnalité réelle).
export const experts: Expert[] = [
  {
    id: "1",
    name: "Étienne Vasseur",
    discipline: "Histoire des religions",
    image:
      "https://image.shutterstock.com/image-photo/portrait-senior-man-photography-enthusiast-who-600nw-2743942967.jpg",
  },
  {
    id: "2",
    name: "Bertrand Caillaux",
    discipline: "Œnologie & gastronomie",
    image:
      "https://image.shutterstock.com/image-photo/portrait-beautiful-senior-woman-on-gray-600nw-2753367011.jpg",
  },
  {
    id: "3",
    name: "Henri Lemaire",
    discipline: "Musique classique",
    image:
      "https://image.shutterstock.com/image-photo/distinguished-older-gentleman-exudes-confidence-this-600nw-2323313887.jpg",
  },
  {
    id: "4",
    name: "Margaux Lenoir",
    discipline: "Littérature",
    image:
      "https://image.shutterstock.com/image-photo/studio-portrait-senior-woman-smile-funny-600nw-2544254763.jpg",
  },
  {
    id: "5",
    name: "Florence Aubry",
    discipline: "Art et patrimoine",
    image:
      "https://image.shutterstock.com/image-photo/senior-woman-holding-examining-vibrant-abstract-600nw-2632939913.jpg",
  },
  {
    id: "6",
    name: "Pascal Rivière",
    discipline: "Philosophie",
    image:
      "https://image.shutterstock.com/image-photo/happy-senior-woman-600nw-370677797.jpg",
  },
  {
    id: "7",
    name: "Dr. Camille Fontaine",
    discipline: "Intimité & bien-être",
    image:
      "https://image.shutterstock.com/image-photo/smiling-senior-woman-enjoying-nature-camera-600nw-2586291429.jpg",
  },
];

export const themes: Theme[] = [
  {
    id: "1",
    title: "Culture et découverte",
    tagline: "Élargir ses horizons, nourrir sa curiosité.",
    filter: "Culture",
    image:
      "https://image.shutterstock.com/image-photo/senior-man-examining-beautiful-paintings-art-600nw-2614716249.jpg",
  },
  {
    id: "2",
    title: "Créativité et apprentissage",
    tagline: "Révéler ce que vous n'avez jamais osé exprimer.",
    image:
      "https://image.shutterstock.com/image-photo/smiling-senior-woman-enjoying-nature-camera-600nw-2586291429.jpg",
  },
  {
    id: "3",
    title: "Gastronomie",
    tagline: "Partager le plaisir des saveurs rares.",
    filter: "Gastronomie",
    image:
      "https://image.shutterstock.com/image-photo/diverse-senior-couple-preparing-meal-using-600nw-2526903605.jpg",
  },
  {
    id: "4",
    title: "Numérique",
    tagline: "Maîtriser les outils d'aujourd'hui, sans complexe.",
    image:
      "https://image.shutterstock.com/image-photo/senior-man-learning-digital-skills-tutor-600nw-2705788047.jpg",
  },
  {
    id: "5",
    title: "Voyages",
    tagline: "Partir en cercle restreint, revenir transformé.",
    image:
      "https://image.shutterstock.com/image-photo/group-elderly-friends-suitcases-bags-gather-600nw-2219446801.jpg",
  },
  {
    id: "6",
    title: "Bien-être",
    tagline: "Prendre soin de soi avec élégance et douceur.",
    image:
      "https://image.shutterstock.com/image-photo/senior-couple-yoga-meditation-breathing-nature-600nw-2710892563.jpg",
  },
  {
    id: "7",
    title: "Sexualité et intimité",
    tagline: "Oser aborder ce qui compte, en toute confiance.",
    image: "/couple.jpeg",
  },
  {
    id: "8",
    title: "Conférences et débats",
    tagline: "Échanger entre esprits libres, sans concession.",
    image:
      "https://image.shutterstock.com/image-photo/senior-woman-audience-interacting-using-microphone-600nw-2728975945.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "J'ai retrouvé le plaisir d'être surprise. Chaque semaine, un atelier qui me rappelle pourquoi j'aime vivre.",
    name: "Hélène",
    age: 67,
    city: "Paris",
  },
  {
    quote:
      "Ce qui me touche, c'est la qualité des intervenants et la bienveillance du cercle. On se sent chez soi.",
    name: "Bernard",
    age: 72,
    city: "Lyon",
  },
  {
    quote:
      "Depuis que j'ai rejoint le cercle, mes journées ont repris du relief. C'est un luxe discret.",
    name: "Françoise",
    age: 65,
    city: "Bordeaux",
  },
];

export const plan: Plan = {
  id: "illimite",
  name: "Illimité",
  price: 29,
  period: "mois",
  features: [
    "Accès illimité aux rendez-vous du savoir en visio",
    "Replays disponibles à tout moment",
    "Rendez-vous culturels en présentiel",
    "Escapades et voyages culturels",
    "Priorité sur les événements signature",
    "Communauté privée et échanges privilégiés",
  ],
};

export const expertContact: ExpertContact = {
  surtitre: "Vous transmettez · Nous réunissons",
  title: {
    lead: "Votre savoir mérite un cercle ",
    accent: "qui l'écoute",
    tail: ".",
  },
  heroSubtitle:
    "Faites-vous connaître auprès de nous en nous envoyant un mail avec une courte présentation de ce que vous faites, et nous reviendrons vers vous.",
  intro:
    "Vous êtes expert, artisan, guide, conférencier ou passionné d'un domaine ? VivreEnfin réunit des retraités actifs, curieux et exigeants qui cherchent de vraies conversations. Dites-nous qui vous êtes. Nous lisons chaque candidature personnellement et nous vous répondons sous 48h.",
  points: [
    {
      title: "Choisissez votre format d'intervention",
      description:
        "Vous animez une masterclasse en visio depuis chez vous, vous proposez un atelier dans votre lieu, ou vous ouvrez les portes d'un endroit exceptionnel pour nos Fenêtres sur le monde. À vous de choisir ce qui correspond le mieux à votre expertise.",
    },
    {
      title: "Dites-nous qui vous êtes",
      description:
        "Remplissez notre formulaire en 3 minutes — votre domaine, votre approche, vos disponibilités. Pas de dossier à monter, pas de jury. Nous lisons chaque candidature personnellement et vous répondons sous 48h.",
    },
    {
      title: "On s'occupe du reste",
      description:
        "Nous préparons votre intervention avec vous — format, déroulé, public. Vous restez maître de votre contenu. Nous gérons la technique, les inscriptions et la mise en relation avec nos membres.",
    },
  ],
  email: "contact@vivreenfin.fr",
  interventionTypes: [
    {
      value: "Visio",
      label: "Masterclasse en visio",
      description: "j'anime une session en ligne depuis chez moi",
    },
    {
      value: "Atelier",
      label: "Atelier en physique",
      description: "je propose une activité dans mon lieu ou atelier",
    },
    {
      value: "Fenêtre",
      label: "Fenêtre sur le monde",
      description: "j'ouvre les portes d'un lieu exceptionnel en live",
    },
  ],
  confirmation: {
    title: "Merci — nous avons bien reçu votre candidature.",
    body: "Nous lisons chaque message personnellement. Vous recevrez une réponse de notre équipe sous 48 heures ouvrées. En attendant, n'hésitez pas à découvrir le programme VivreEnfin.",
    ctaLabel: "Découvrir le programme",
    ctaHref: "/planning",
  },
};
