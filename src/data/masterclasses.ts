// Contenu de la page Les rendez-vous du savoir — maquette statique, ton EnfinVous.

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
  date: string;
  time: string;
  /** Mois de la prochaine séance, pour le filtre. */
  month: string;
  duration: string;
  /** Nombre de membres inscrits, à l'échelle du cercle. */
  registered: number;
  /** Séance déjà disponible en replay dans la médiathèque. */
  replayAvailable: boolean;
  status: MasterclassStatus;
}

export const themeFilters: string[] = [
  "Toutes les familles",
  "Culture et découverte",
  "Gastronomie",
  "Créativité et apprentissage",
  "Philosophie",
  "Bien-être",
];

export const monthFilters: string[] = ["Tous les mois", "Mai", "Juin"];

export const statusFilters: string[] = [
  "Tous les statuts",
  "Inscriptions ouvertes",
  "Bientôt complet",
  "Disponible en replay",
];

export const programme: ProgrammeEntry[] = [
  {
    id: "p1",
    theme: "Créativité et apprentissage",
    title: "Les secrets de la photographie argentique",
    summary:
      "Le grain, la patience, la lumière qui se dépose. Marc Riboud vous ouvre les portes de la chambre noire et raconte comment le tirage devient un geste de création à part entière. Une heure pour réapprendre à regarder, à attendre, à laisser l'image advenir — loin de l'instantané numérique.",
    image:
      "https://image.shutterstock.com/image-photo/man-hanging-painting-on-wall-art-600nw-2580519975.jpg",
    expertName: "Marc Riboud",
    expertDiscipline: "Photographie",
    expertBio:
      "Photographe de presse durant quarante ans, Marc a couvert les grands reportages avant de se consacrer à la transmission. Il enseigne le regard plus que la technique.",
    expertImage:
      "https://image.shutterstock.com/image-photo/70-year-old-senior-man-standing-600nw-1107806642.jpg",
    date: "Mardi 27 mai",
    time: "14h30",
    month: "Mai",
    duration: "1h15",
    registered: 64,
    replayAvailable: true,
    status: "Inscriptions ouvertes",
  },
  {
    id: "p2",
    theme: "Gastronomie",
    title: "Les grands crus de Bourgogne, sans mystère",
    summary:
      "Claire Vallée déroule la carte des climats bourguignons comme on lit une partition. Vous apprenez à reconnaître un terroir, à poser les mots justes sur ce que vous ressentez, à recevoir avec assurance. Une conversation autour du vin, où la culture compte autant que le palais.",
    image:
      "https://image.shutterstock.com/image-photo/group-man-woman-sommelier-tasting-red-600nw-2310290235.jpg",
    expertName: "Claire Vallée",
    expertDiscipline: "Œnologie & Gastronomie",
    expertBio:
      "Sommelière passée par les plus belles tables, Claire défend une approche sensible et joyeuse du vin, débarrassée de tout snobisme.",
    expertImage:
      "https://image.shutterstock.com/image-photo/mature-senior-woman-winemaker-stand-basement-600nw-2471839275.jpg",
    date: "Mercredi 28 mai",
    time: "18h00",
    month: "Mai",
    duration: "1h30",
    registered: 78,
    replayAvailable: true,
    status: "Bientôt complet",
  },
  {
    id: "p3",
    theme: "Créativité et apprentissage",
    title: "Trouver sa voix après soixante ans",
    summary:
      "Écrire, non pour publier, mais pour se retrouver. Annie Ernaux partage les chemins de l'écriture de soi : comment puiser dans la mémoire, transformer le quotidien en matière, oser la première phrase. Un espace de liberté où chaque vie devient un livre possible.",
    image:
      "https://image.shutterstock.com/image-photo/side-view-portrait-black-senior-woman-600nw-2487420187.jpg",
    expertName: "Annie Ernaux",
    expertDiscipline: "Littérature",
    expertBio:
      "Autrice de récits intimes salués par la critique, elle anime des ateliers d'écriture où la sincérité prime sur la performance.",
    expertImage:
      "https://image.shutterstock.com/image-photo/calm-senior-woman-red-sweater-sitting-600nw-2573037971.jpg",
    date: "Vendredi 30 mai",
    time: "11h00",
    month: "Mai",
    duration: "1h",
    registered: 52,
    replayAvailable: false,
    status: "Inscriptions ouvertes",
  },
  {
    id: "p4",
    theme: "Philosophie",
    title: "Repenser le temps libre",
    summary:
      "Et si la retraite n'était pas une fin, mais une œuvre à composer ? Cynthia Fleury interroge notre rapport au temps retrouvé : comment lui donner forme, sens et désir. Un rendez-vous du savoir exigeant et lumineux, pour faire de ses journées un acte de création de soi.",
    image:
      "https://image.shutterstock.com/image-photo/senior-asian-woman-have-happiness-wellbeing-600nw-1103392058.jpg",
    expertName: "Cynthia Fleury",
    expertDiscipline: "Philosophie",
    expertBio:
      "Philosophe et psychanalyste, elle explore les liens entre soin, vulnérabilité et accomplissement personnel dans une langue accessible.",
    expertImage:
      "https://image.shutterstock.com/image-photo/happy-senior-woman-crossed-arms-isolated-600nw-1367956424.jpg",
    date: "Lundi 2 juin",
    time: "17h00",
    month: "Juin",
    duration: "1h15",
    registered: 86,
    replayAvailable: true,
    status: "Inscriptions ouvertes",
  },
  {
    id: "p5",
    theme: "Culture et découverte",
    title: "Lire un tableau : l'art contemporain apprivoisé",
    summary:
      "Devant une toile abstraite, beaucoup se sentent démunis. Caroline Bourgeois vous donne les clés pour entrer dans l'œuvre sans mode d'emploi : observer, ressentir, questionner. Une initiation au regard qui rend l'art contemporain enfin hospitalier.",
    image:
      "https://image.shutterstock.com/image-photo/portrait-elderly-woman-holding-abstract-painting-600nw-2632939801.jpg",
    expertName: "Caroline Bourgeois",
    expertDiscipline: "Art contemporain",
    expertBio:
      "Commissaire d'exposition, Caroline accompagne le public dans les grandes collections privées et défend un art vivant, ouvert à tous.",
    expertImage:
      "https://image.shutterstock.com/image-photo/calm-senior-woman-red-sweater-sitting-600nw-2573037971.jpg",
    date: "Jeudi 5 juin",
    time: "15h00",
    month: "Juin",
    duration: "1h",
    registered: 47,
    replayAvailable: false,
    status: "Bientôt complet",
  },
  {
    id: "p6",
    theme: "Bien-être",
    title: "Le désir après 60 ans, une conversation sincère",
    summary:
      "Un sujet trop souvent tu, abordé ici avec délicatesse et sans tabou. La Dr Sylvie Lacombe ouvre un espace de parole sur l'intimité, le corps qui change, le désir qui demeure. Une heure bienveillante, pour mettre des mots sur ce qui compte vraiment.",
    image:
      "https://image.shutterstock.com/image-photo/senior-adult-couple-enjoying-view-their-600nw-2461499359.jpg",
    expertName: "Dr. Sylvie Lacombe",
    expertDiscipline: "Sexualité & intimité",
    expertBio:
      "Médecin et thérapeute, elle accompagne depuis vingt ans les couples et les personnes seules autour des questions de l'intimité.",
    expertImage:
      "https://image.shutterstock.com/image-photo/senior-6070-year-old-age-woman-600nw-1144737599.jpg",
    date: "Jeudi 29 mai",
    time: "10h00",
    month: "Mai",
    duration: "1h30",
    registered: 73,
    replayAvailable: true,
    status: "Inscriptions ouvertes",
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
    expert: "Marc Riboud",
    image:
      "https://image.shutterstock.com/image-photo/man-hanging-painting-on-wall-art-600nw-2580519975.jpg",
  },
  {
    id: "r2",
    title: "Cuisiner les saveurs d'ailleurs",
    duration: "1h20",
    expert: "Claire Vallée",
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
    expert: "Philippe Jordan",
    image:
      "https://image.shutterstock.com/image-photo/side-view-portrait-black-senior-woman-600nw-2487420187.jpg",
  },
  {
    id: "r5",
    title: "Méditation et souffle, l'art de ralentir",
    duration: "45 min",
    expert: "Cynthia Fleury",
    image:
      "https://image.shutterstock.com/image-photo/senior-asian-woman-have-happiness-wellbeing-600nw-1103392058.jpg",
  },
  {
    id: "r6",
    title: "Voyager par les grands récits",
    duration: "1h15",
    expert: "Annie Ernaux",
    image:
      "https://image.shutterstock.com/image-photo/happy-senior-adult-enjoying-excursion-bicycle-600nw-1405246964.jpg",
  },
];
