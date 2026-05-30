// Contenu de la page Planning de la semaine — maquette statique.

import type { EventVariant } from "@/data/landing";

export const weekLabel = "Du lundi 25 au dimanche 31 mai 2026";

export const dayNames = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

export const dayDates = ["25", "26", "27", "28", "29", "30", "31"];

export type SlotPeriod = "matin" | "apresmidi" | "soir";

export const periods: { key: SlotPeriod; label: string }[] = [
  { key: "matin", label: "Matin" },
  { key: "apresmidi", label: "Après-midi" },
  { key: "soir", label: "Soir" },
];

export interface PlanningSlot {
  day: number; // 0 = Lundi … 6 = Dimanche
  period: SlotPeriod;
  time: string;
  title: string;
  fullTitle: string;
  expert: string;
  duration: string;
  location: string;
  variant: EventVariant;
}

export const slots: PlanningSlot[] = [
  // Lundi
  {
    day: 0,
    period: "apresmidi",
    time: "15h00",
    title: "Lire un tableau",
    fullTitle: "Lire un tableau : l'art contemporain apprivoisé",
    expert: "Caroline Bourgeois",
    duration: "1h",
    location: "Visio",
    variant: "visio",
  },
  {
    day: 0,
    period: "soir",
    time: "17h00",
    title: "Repenser le temps libre",
    fullTitle: "Philosophie : repenser le temps libre",
    expert: "Cynthia Fleury",
    duration: "1h15",
    location: "Visio",
    variant: "visio",
  },
  // Mardi
  {
    day: 1,
    period: "matin",
    time: "10h30",
    title: "Souffle & méditation",
    fullTitle: "Méditation et souffle, l'art de ralentir",
    expert: "Cynthia Fleury",
    duration: "45 min",
    location: "Visio",
    variant: "visio",
  },
  {
    day: 1,
    period: "apresmidi",
    time: "14h30",
    title: "Photographie argentique",
    fullTitle: "Les secrets de la photographie argentique",
    expert: "Marc Riboud",
    duration: "1h15",
    location: "Visio",
    variant: "visio",
  },
  // Mercredi
  {
    day: 2,
    period: "apresmidi",
    time: "15h00",
    title: "Trouver sa voix",
    fullTitle: "Écriture : trouver sa voix après soixante ans",
    expert: "Annie Ernaux",
    duration: "1h",
    location: "Visio",
    variant: "visio",
  },
  {
    day: 2,
    period: "soir",
    time: "18h00",
    title: "Grands crus de Bourgogne",
    fullTitle: "Dégustation : les grands crus de Bourgogne",
    expert: "Claire Vallée",
    duration: "2h",
    location: "Domaine des Crayères, Reims",
    variant: "presentiel",
  },
  // Jeudi
  {
    day: 3,
    period: "matin",
    time: "10h00",
    title: "Le désir après 60 ans",
    fullTitle: "Le désir après 60 ans, une conversation sincère",
    expert: "Dr. Sylvie Lacombe",
    duration: "1h30",
    location: "Visio",
    variant: "signature",
  },
  {
    day: 3,
    period: "soir",
    time: "17h00",
    title: "Salon Annie Ernaux",
    fullTitle: "Salon littéraire autour d'Annie Ernaux",
    expert: "Annie Ernaux",
    duration: "2h",
    location: "Hôtel Particulier, Paris",
    variant: "signature",
  },
  // Vendredi
  {
    day: 4,
    period: "matin",
    time: "11h00",
    title: "Apprivoiser son téléphone",
    fullTitle: "Apprivoiser son téléphone en confiance",
    expert: "Complice du numérique",
    duration: "55 min",
    location: "Visio",
    variant: "visio",
  },
  {
    day: 4,
    period: "soir",
    time: "19h00",
    title: "Récital au crépuscule",
    fullTitle: "Concert privé : un récital au crépuscule",
    expert: "Philippe Jordan",
    duration: "1h30",
    location: "Salons du Petit Palais, Paris",
    variant: "presentiel",
  },
  // Samedi
  {
    day: 5,
    period: "matin",
    time: "10h30",
    title: "Collection Pinault",
    fullTitle: "Visite privée : la collection Pinault",
    expert: "Caroline Bourgeois",
    duration: "2h30",
    location: "Bourse de Commerce, Paris",
    variant: "signature",
  },
  {
    day: 5,
    period: "apresmidi",
    time: "12h30",
    title: "Table d'hôtes du Sud",
    fullTitle: "Table d'hôtes : les saveurs du Sud",
    expert: "Claire Vallée",
    duration: "3h",
    location: "Mas de la Lavande, Aix",
    variant: "presentiel",
  },
  // Dimanche
  {
    day: 6,
    period: "matin",
    time: "11h00",
    title: "Flânerie dans le Marais",
    fullTitle: "Promenade culturelle dans le Marais",
    expert: "Hélène Carrère",
    duration: "2h",
    location: "Le Marais, Paris",
    variant: "presentiel",
  },
];

export const legend: { variant: EventVariant; label: string }[] = [
  { variant: "visio", label: "Masterclass en visio" },
  { variant: "presentiel", label: "Rendez-vous en présentiel" },
  { variant: "signature", label: "Événement signature" },
];
