// Contenu de la page Les rendez-vous du savoir — maquette statique, ton VivreEnfin.

export interface PrincipleStep {
  num: string;
  title: string;
  text: string;
}

export const principleSteps: PrincipleStep[] = [
  {
    num: "01",
    title: "Je choisis",
    text: "Vous parcourez le programme du mois et retenez le rendez-vous du savoir qui vous appelle. Une inscription, un clic, c'est noté.",
  },
  {
    num: "02",
    title: "Je rejoins",
    text: "La veille, vous recevez votre lien personnel. À l'heure dite, vous cliquez : vous voilà dans le cercle, depuis votre fauteuil.",
  },
  {
    num: "03",
    title: "J'échange",
    text: "Vous participez en direct, vous posez vos questions à l'intervenant. Et vous revoyez la séance en replay, quand bon vous semble.",
  },
];

export type MasterclassStatus = "Inscriptions ouvertes" | "Bientôt complet";

export interface ProgrammeEntry {
  id: string;
  theme: string;
  title: string;
  summary: string;
  /** Visuel du sujet pour la carte (séniors 70+, hôte image.shutterstock.com déjà autorisé). */
  image: string;
  expertName: string;
  expertDiscipline: string;
  expertBio: string;
  expertImage: string;
  /** Rythme du rendez-vous, ex. « Tous les lundis » ou une date pour une séance unique. */
  cadence: string;
  time: string;
  /** Mois de lancement, pour le filtre. */
  month: string;
  duration: string;
  /** Nombre de séances encore à venir dans ce cycle (absent pour une séance unique). */
  sessionsAhead?: number;
  /** Nombre de membres inscrits, à l'échelle du cercle. */
  registered: number;
  /** Séance déjà disponible en replay dans la médiathèque. */
  replayAvailable: boolean;
  status: MasterclassStatus;
}

export const themeFilters: string[] = [
  "Toutes les familles",
  "Bien-être",
  "Culture et découverte",
  "Gastronomie",
  "Philosophie",
];

export const monthFilters: string[] = ["Tous les mois", "Juillet", "Août"];

export const statusFilters: string[] = [
  "Tous les statuts",
  "Inscriptions ouvertes",
  "Bientôt complet",
  "Disponible en replay",
];

export const programme: ProgrammeEntry[] = [
  {
    id: "p-equestre",
    theme: "Culture et découverte",
    title: "L'homme qui murmure à l'oreille des chevaux",
    summary:
      "Derrière les victoires se cachent des histoires. Une plongée passionnante dans le monde équestre avec un guide exceptionnel : au Pôle International du Cheval de Deauville, à la rencontre des champions.",
    image: "/cheval-deauville.jpeg",
    expertName: "Astier Nicolas",
    expertDiscipline:
      "Champion olympique de concours complet · Médaillé de bronze aux JO de Paris 2024",
    expertBio:
      "Cavalier de concours complet et médaillé olympique, il ouvre les portes de son univers : le lien rare qui unit l'homme et le cheval, loin des projecteurs.",
    expertImage: "/astier-nicolas.jpg",
    cadence: "Rendez-vous unique",
    time: "11h00",
    month: "Juillet",
    duration: "1h",
    registered: 52,
    replayAvailable: false,
    status: "Inscriptions ouvertes",
  },
  {
    id: "p1",
    theme: "Bien-être",
    title: "L'intimité après 60 ans",
    summary:
      "Un cycle sincère et bienveillant sur le désir, le corps qui change et le dialogue amoureux. Six rendez-vous pour aborder, sans tabou et avec délicatesse, ce dont on parle si rarement. Vous posez vos questions, vous échangez, à votre rythme.",
    image:
      "https://image.shutterstock.com/image-photo/senior-adult-couple-enjoying-view-their-600nw-2461499359.jpg",
    expertName: "Dr. Camille Fontaine",
    expertDiscipline:
      'Médecin et sexologue clinicienne · Diplômée de l\'Université Paris Descartes · Auteure de "Désir et intimité après 60 ans"',
    expertBio:
      "Médecin et thérapeute, elle accompagne depuis vingt ans les couples et les personnes seules autour des questions de l'intimité, dans une parole apaisée et sans jugement.",
    expertImage:
      "https://image.shutterstock.com/image-photo/senior-6070-year-old-age-woman-600nw-1144737599.jpg",
    cadence: "Tous les lundis",
    time: "12h00",
    month: "Juillet",
    duration: "1h",
    sessionsAhead: 6,
    registered: 73,
    replayAvailable: false,
    status: "Inscriptions ouvertes",
  },
  {
    id: "p2",
    theme: "Culture et découverte",
    title: "Les secrets de la Bible",
    summary:
      "Un regard culturel et historique, jamais religieux, sur les grands récits que l'on croit connaître. Quatre rendez-vous pour redécouvrir les symboles, les femmes oubliées et les énigmes des textes fondateurs, en compagnie d'un historien.",
    image:
      "https://images.pexels.com/photos/8675090/pexels-photo-8675090.jpeg?w=900",
    expertName: "Étienne Vasseur",
    expertDiscipline:
      "Historien des religions · Spécialiste des trois religions abrahamiques · Conférencier à l'École Pratique des Hautes Études",
    expertBio:
      "Historien des religions, il explore l'Antiquité et les textes fondateurs avec un souci constant de clarté, loin de tout dogme, pour rendre la culture accessible à tous.",
    expertImage:
      "https://image.shutterstock.com/image-photo/70-year-old-senior-man-standing-600nw-1107806642.jpg",
    cadence: "Tous les mardis",
    time: "14h30",
    month: "Juillet",
    duration: "1h",
    sessionsAhead: 4,
    registered: 61,
    replayAvailable: false,
    status: "Inscriptions ouvertes",
  },
  {
    id: "p3",
    theme: "Gastronomie",
    title: "Gastronomie & plaisirs",
    summary:
      "Décoder un grand vin, comprendre les terroirs, composer sa cave : quatre rendez-vous gourmands menés par un sommelier passionné. La culture du goût, sans snobisme, pour recevoir et déguster avec assurance.",
    image:
      "https://image.shutterstock.com/image-photo/group-man-woman-sommelier-tasting-red-600nw-2310290235.jpg",
    expertName: "Bertrand Caillaux",
    expertDiscipline:
      "Œnologue certifié · Expert en grands crus de Bourgogne · Formateur en dégustation depuis 15 ans",
    expertBio:
      "Sommelier passé par les plus belles tables, il défend une approche sensible et joyeuse du vin, débarrassée de tout snobisme, où la culture compte autant que le palais.",
    expertImage:
      "https://images.pexels.com/photos/16779595/pexels-photo-16779595.jpeg?w=1200",
    cadence: "Tous les mercredis",
    time: "18h00",
    month: "Août",
    duration: "1h",
    sessionsAhead: 4,
    registered: 84,
    replayAvailable: false,
    status: "Bientôt complet",
  },
  {
    id: "p4",
    theme: "Bien-être",
    title: "Bien vieillir, pleinement",
    summary:
      "Mieux dormir, manger pour l'énergie, entretenir sa mémoire, bouger sans se faire mal. Quatre rendez-vous tournés vers la vitalité — non pour éviter les problèmes, mais pour profiter pleinement de chaque journée.",
    image:
      "https://image.shutterstock.com/image-photo/senior-couple-yoga-meditation-breathing-nature-600nw-2710892563.jpg",
    expertName: "Dr. Paul Mercier",
    expertDiscipline: "Vitalité & santé active",
    expertBio:
      "Médecin du mouvement et du vieillissement actif, il aborde la santé comme un art de vivre : des conseils concrets pour rester énergique, mobile et libre après 60 ans.",
    expertImage:
      "https://image.shutterstock.com/image-photo/70-year-old-senior-man-standing-600nw-1107806642.jpg",
    cadence: "Tous les jeudis",
    time: "11h00",
    month: "Août",
    duration: "1h",
    sessionsAhead: 4,
    registered: 57,
    replayAvailable: false,
    status: "Inscriptions ouvertes",
  },
  {
    id: "p5",
    theme: "Philosophie",
    title: "Repenser le temps libre",
    summary:
      "Et si la retraite n'était pas une fin, mais une œuvre à composer ? Un cycle pour interroger notre rapport au temps retrouvé : comment lui donner forme, sens et désir. Un rendez-vous exigeant et lumineux, pour faire de ses journées un acte de création de soi.",
    image:
      "https://image.shutterstock.com/image-photo/senior-asian-woman-have-happiness-wellbeing-600nw-1103392058.jpg",
    expertName: "Hélène Delaunay",
    expertDiscipline: "Philosophie & art de vivre",
    expertBio:
      "Philosophe de formation, elle explore les liens entre soin, vulnérabilité et accomplissement personnel, dans une langue claire et accessible à tous.",
    expertImage:
      "https://image.shutterstock.com/image-photo/happy-senior-woman-crossed-arms-isolated-600nw-1367956424.jpg",
    cadence: "Tous les vendredis",
    time: "17h00",
    month: "Juillet",
    duration: "1h15",
    sessionsAhead: 4,
    registered: 86,
    replayAvailable: false,
    status: "Inscriptions ouvertes",
  },
  {
    id: "p6",
    theme: "Culture et découverte",
    title: "Lire un tableau : l'art contemporain apprivoisé",
    summary:
      "Devant une toile abstraite, beaucoup se sentent démunis. Ce cycle vous donne les clés pour entrer dans l'œuvre sans mode d'emploi : observer, ressentir, questionner. Une initiation au regard qui rend l'art contemporain enfin hospitalier.",
    image:
      "https://image.shutterstock.com/image-photo/portrait-elderly-woman-holding-abstract-painting-600nw-2632939801.jpg",
    expertName: "Vincent Aubert",
    expertDiscipline: "Art contemporain",
    expertBio:
      "Commissaire d'exposition, il accompagne le public dans les grandes collections et défend un art vivant, ouvert à tous, sans jargon.",
    expertImage:
      "https://image.shutterstock.com/image-photo/calm-senior-woman-red-sweater-sitting-600nw-2573037971.jpg",
    cadence: "Tous les samedis",
    time: "15h00",
    month: "Août",
    duration: "1h",
    sessionsAhead: 4,
    registered: 47,
    replayAvailable: false,
    status: "Bientôt complet",
  },
];

export interface ReplayItem {
  id: string;
  title: string;
  duration: string;
  expert: string;
  image: string;
}

export const replayItems: ReplayItem[] = [
  {
    id: "r1",
    title: "L'aquarelle pour le plaisir des sens",
    duration: "1h05",
    expert: "Julien Faure",
    image:
      "https://image.shutterstock.com/image-photo/man-hanging-painting-on-wall-art-600nw-2580519975.jpg",
  },
  {
    id: "r2",
    title: "Cuisiner les saveurs d'ailleurs",
    duration: "1h20",
    expert: "Bertrand Caillaux",
    image:
      "https://image.shutterstock.com/image-photo/group-man-woman-sommelier-tasting-red-600nw-2310290235.jpg",
  },
  {
    id: "r3",
    title: "Apprivoiser son téléphone en confiance",
    duration: "55 min",
    expert: "Complice du numérique",
    image:
      "https://image.shutterstock.com/image-photo/senior-man-old-using-smartphone-tablet-600nw-2163446129.jpg",
  },
  {
    id: "r4",
    title: "Les grandes voix de la chanson française",
    duration: "1h10",
    expert: "Henri Lemaire",
    image:
      "https://image.shutterstock.com/image-photo/side-view-portrait-black-senior-woman-600nw-2487420187.jpg",
  },
  {
    id: "r5",
    title: "Méditation et souffle, l'art de ralentir",
    duration: "45 min",
    expert: "Pascal Rivière",
    image:
      "https://images.pexels.com/photos/8939925/pexels-photo-8939925.jpeg?w=1200",
  },
  {
    id: "r6",
    title: "Voyager par les grands récits",
    duration: "1h15",
    expert: "Margaux Lenoir",
    image:
      "https://image.shutterstock.com/image-photo/happy-senior-adult-enjoying-excursion-bicycle-600nw-1405246964.jpg",
  },
];
