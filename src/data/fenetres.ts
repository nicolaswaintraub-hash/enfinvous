// Contenu de la page Fenêtres sur le monde — escapades culturelles commentées
// en direct, depuis chez soi. Maquette statique, ton VivreEnfin.

import type { ProgrammeEntry } from "@/data/masterclasses";

export const monthFilters: string[] = [
  "Tous les mois",
  "Juillet",
  "Août",
  "Septembre",
];

export const statusFilters: string[] = [
  "Tous les statuts",
  "Inscriptions ouvertes",
  "Bientôt complet",
  "Disponible en replay",
];

export const fenetres: ProgrammeEntry[] = [
  {
    id: "w1",
    theme: "Fenêtres sur le monde",
    title: "La médina de Fès",
    summary:
      "Un guide vous fait descendre vers les célèbres tanneries et remonter les ruelles de la plus ancienne cité impériale du Maroc, où le savoir-faire se transmet depuis mille ans. Une plongée dans les couleurs, les odeurs et les gestes du Fès éternel.",
    image:
      "https://images.unsplash.com/photo-1738616470148-3a48e9a365a8?w=900&q=80",
    expertName: "Leïla Mansouri",
    expertDiscipline: "Guide-conférencière, Maroc",
    expertBio:
      "Native de Fès, Leïla accompagne depuis vingt ans les voyageurs dans la médina et raconte sa ville comme on déroule une histoire de famille.",
    expertImage:
      "https://image.shutterstock.com/image-photo/70-year-old-senior-man-standing-600nw-1107806642.jpg",
    cadence: "Vendredi 11 juillet",
    time: "15h00",
    month: "Juillet",
    duration: "1h15",
    registered: 58,
    replayAvailable: false,
    status: "Inscriptions ouvertes",
  },
  {
    id: "w2",
    theme: "Fenêtres sur le monde",
    title: "La pyramide de Khéops",
    summary:
      "Au plus près de la dernière des sept merveilles, un égyptologue éclaire les énigmes de la Grande Pyramide et la vie de ceux qui l'ont bâtie. Une heure pour approcher le mystère, sans la chaleur ni la foule du plateau de Gizeh.",
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=900&q=80",
    expertName: "Antoine Royer",
    expertDiscipline: "Égyptologie",
    expertBio:
      "Égyptologue de terrain, il a passé de longues années en Égypte et excelle à rendre limpides les grandes énigmes de l'Antiquité.",
    expertImage:
      "https://image.shutterstock.com/image-photo/senior-man-old-using-smartphone-tablet-600nw-2163446129.jpg",
    cadence: "Vendredi 25 juillet",
    time: "17h00",
    month: "Juillet",
    duration: "1h",
    registered: 91,
    replayAvailable: true,
    status: "Bientôt complet",
  },
  {
    id: "w3",
    theme: "Fenêtres sur le monde",
    title: "Le Machu Picchu",
    summary:
      "Au-dessus des nuages, la cité inca du Pérou révèle ses terrasses et ses temples. Une exploration commentée, marche après marche, des chemins sacrés aux observatoires astronomiques — toute la majesté des Andes, sans l'altitude.",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900&q=80",
    expertName: "Carmen Delgado",
    expertDiscipline: "Civilisations andines",
    expertBio:
      "Anthropologue spécialiste du monde inca, Carmen partage avec passion les secrets d'une civilisation qui continue de nous émerveiller.",
    expertImage:
      "https://image.shutterstock.com/image-photo/mature-senior-woman-winemaker-stand-basement-600nw-2471839275.jpg",
    cadence: "Vendredi 8 août",
    time: "18h00",
    month: "Août",
    duration: "1h15",
    registered: 67,
    replayAvailable: false,
    status: "Inscriptions ouvertes",
  },
  {
    id: "w4",
    theme: "Fenêtres sur le monde",
    title: "Une visite industrielle en France",
    summary:
      "Derrière les portes d'un atelier, le geste, la matière et la fierté d'un savoir-faire. Un maître artisan vous ouvre ses fourneaux et raconte un patrimoine vivant que l'on visite rarement, transmis d'une génération à l'autre.",
    image:
      "https://images.unsplash.com/photo-1528717384022-f8d665c86909?w=900&q=80",
    expertName: "André Lefèvre",
    expertDiscipline: "Patrimoine industriel",
    expertBio:
      "Ancien maître de forge, André défend les métiers d'art et fait découvrir les ateliers qui perpétuent l'excellence française.",
    expertImage:
      "https://image.shutterstock.com/image-photo/70-year-old-senior-man-standing-600nw-1107806642.jpg",
    cadence: "Vendredi 22 août",
    time: "14h30",
    month: "Août",
    duration: "1h",
    registered: 44,
    replayAvailable: false,
    status: "Inscriptions ouvertes",
  },
  {
    id: "w5",
    theme: "Fenêtres sur le monde",
    title: "Les pièces cachées de l'Opéra",
    summary:
      "Loges secrètes, dessous de scène et lac souterrain : un conférencier vous ouvre les coulisses du Palais Garnier, à Paris, là où le public n'entre jamais. Une visite privée d'un des plus beaux théâtres du monde, depuis votre fauteuil.",
    image:
      "https://images.unsplash.com/photo-1762284917086-2ae5908f48af?w=900&q=80",
    expertName: "Hélène Dautry",
    expertDiscipline: "Histoire de l'Opéra",
    expertBio:
      "Conférencière au Palais Garnier, Hélène connaît chaque recoin du monument et fait revivre les fastes et les légendes de l'Opéra.",
    expertImage:
      "https://image.shutterstock.com/image-photo/calm-senior-woman-red-sweater-sitting-600nw-2573037971.jpg",
    cadence: "Vendredi 12 septembre",
    time: "11h00",
    month: "Septembre",
    duration: "1h15",
    registered: 82,
    replayAvailable: true,
    status: "Bientôt complet",
  },
  {
    id: "w6",
    theme: "Fenêtres sur le monde",
    title: "Monet, dans les coulisses de l'exposition",
    summary:
      "À l'occasion du centenaire, un médiateur des Franciscaines, à Deauville, vous ouvre les portes des réserves où l'on conserve et restaure les œuvres de Claude Monet. Gestes de conservation, toiles rarement montrées, regard d'expert : une heure dans les coulisses d'une exposition, là où le public n'entre jamais.",
    image:
      "https://images.pexels.com/photos/9063025/pexels-photo-9063025.jpeg?w=900",
    expertName: "Brigitte Lemoine",
    expertDiscipline: "Médiation culturelle",
    expertBio:
      "Médiatrice en musée depuis trente ans, elle fait dialoguer les œuvres et les visiteurs et raconte les coulisses d'une exposition comme on partage un secret.",
    expertImage:
      "https://image.shutterstock.com/image-photo/calm-senior-woman-red-sweater-sitting-600nw-2573037971.jpg",
    cadence: "Vendredi 18 juillet",
    time: "16h00",
    month: "Juillet",
    duration: "1h15",
    registered: 88,
    replayAvailable: false,
    status: "Bientôt complet",
  },
  {
    id: "w7",
    theme: "Fenêtres sur le monde",
    title: "Les coulisses du monde équestre",
    summary:
      "Depuis le Pôle du Cheval de Deauville, un cavalier de haut niveau vous fait entrer dans son univers : l'entraînement quotidien, le lien tissé avec l'animal, les grandes ventes de yearlings. Une plongée commentée dans un monde d'ordinaire fermé au public, à vivre en direct depuis votre fauteuil.",
    image:
      "https://images.pexels.com/photos/5663046/pexels-photo-5663046.jpeg?w=900",
    expertName: "Bernard Delcourt",
    expertDiscipline: "Univers équestre",
    expertBio:
      "Cavalier et enseignant, il a couru les plus grands concours et transmet aujourd'hui sa passion du cheval, du travail de l'aube aux grandes ventes de yearlings.",
    expertImage:
      "https://image.shutterstock.com/image-photo/70-year-old-senior-man-standing-600nw-1107806642.jpg",
    cadence: "Vendredi 29 août",
    time: "15h00",
    month: "Août",
    duration: "1h",
    registered: 51,
    replayAvailable: false,
    status: "Inscriptions ouvertes",
  },
];
