// Contenu de l'espace membre /mon-compte — maquette statique, démo.

import { type Event, events } from "@/data/landing";

export const member = {
  firstName: "Hélène",
  greeting: "Bonjour Hélène",
  memberSince: "Membre du cercle depuis mars 2025",
};

export const subscription = {
  planName: "Illimité",
  price: 29,
  period: "mois",
  nextBilling: "Prochaine échéance le 1er juin 2026",
};

export const referral = {
  code: "HELENE-2026",
  count: 0,
  max: 5,
};

export const sideMenu: string[] = [
  "Tableau de bord",
  "Infos personnelles",
  "Préférences",
  "Déconnexion",
];

export interface Favorite {
  id: string;
  title: string;
  image: string;
}

export const favorites: Favorite[] = [
  {
    id: "f1",
    title: "Trouver sa voix après soixante ans",
    image:
      "https://image.shutterstock.com/image-photo/elderly-woman-sitting-desk-writing-notebook-600nw-2590888363.jpg",
  },
  {
    id: "f2",
    title: "Repenser le temps libre",
    image:
      "https://image.shutterstock.com/image-photo/active-old-age-senior-people-lifestyle-600nw-1544007563.jpg",
  },
  {
    id: "f3",
    title: "Visite privée : la collection Pinault",
    image:
      "https://image.shutterstock.com/image-photo/senior-man-sitting-on-pouf-looking-600nw-2591493445.jpg",
  },
];

// Les trois prochains rendez-vous réservés par la membre (affichés sans visuel).
export const upcomingEvents: Event[] = events.slice(0, 3);

// Le carrousel « À découvrir cette semaine » — sélection dédiée à l'espace membre.
export const discoverEvents: Event[] = [
  {
    id: "d1",
    title: "L'art du portrait au fusain",
    date: "Mardi 27 mai",
    time: "15h00",
    duration: "1h",
    expert: "Marc Riboud",
    variant: "visio",
    description:
      "Saisir un visage en quelques traits, apprivoiser l'ombre et la lumière.",
    image:
      "https://image.shutterstock.com/image-photo/active-senior-man-his-70s-posing-600nw-4857259.jpg",
  },
  {
    id: "d2",
    title: "Récital de piano à quatre mains",
    date: "Mercredi 28 mai",
    time: "18h30",
    duration: "1h30",
    expert: "Philippe Jordan",
    variant: "presentiel",
    description:
      "Un moment musical intimiste, joué pour le cercle dans un salon feutré.",
    image:
      "https://image.shutterstock.com/image-photo/old-man-playing-piano-home-600nw-2575505181.jpg",
  },
  {
    id: "d3",
    title: "Dîner œnologique d'exception",
    date: "Jeudi 29 mai",
    time: "19h30",
    duration: "3h",
    expert: "Claire Vallée",
    variant: "signature",
    description:
      "Accords mets et grands crus, commentés au fil d'un dîner d'exception.",
    image:
      "https://image.shutterstock.com/image-photo/professional-caucasian-man-sommelier-tasting-sniffing-600nw-2442727947.jpg",
  },
  {
    id: "d4",
    title: "Bien vieillir, le corps en mouvement",
    date: "Vendredi 30 mai",
    time: "10h00",
    duration: "1h",
    expert: "Cynthia Fleury",
    variant: "visio",
    description:
      "Des gestes simples pour entretenir souplesse, équilibre et vitalité.",
    image:
      "https://image.shutterstock.com/image-photo/happy-senior-couple-push-scooter-riding-600nw-2221722177.jpg",
  },
  {
    id: "d5",
    title: "Promenade botanique commentée",
    date: "Samedi 31 mai",
    time: "11h00",
    duration: "2h",
    expert: "Hélène Carrère",
    variant: "presentiel",
    description:
      "Les essences rares d'un jardin remarquable, racontées pas à pas.",
    image:
      "https://image.shutterstock.com/image-photo/nice-couple-beautiful-caucasian-senior-70-600nw-1109189666.jpg",
  },
  {
    id: "d6",
    title: "Le numérique sans appréhension",
    date: "Lundi 2 juin",
    time: "16h00",
    duration: "55 min",
    expert: "Complice du numérique",
    variant: "visio",
    description:
      "Messageries, photos, visioconférence : prendre ses outils en main, sereinement.",
    image:
      "https://image.shutterstock.com/image-photo/active-old-age-technology-senior-people-600nw-1428189446.jpg",
  },
];
