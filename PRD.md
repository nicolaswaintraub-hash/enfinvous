# PRD — Plateforme de masterclass VivreEnfin

**Document de spécifications produit (Product Requirements Document)**

|                   |                                                            |
| ----------------- | ---------------------------------------------------------- |
| **Projet**        | VivreEnfin — Plateforme de rendez-vous du savoir en direct |
| **Version**       | 1.0                                                        |
| **Date**          | 20 juin 2026                                               |
| **Statut**        | Proposition — à valider                                    |
| **Budget**        | 40 000 € HT                                                |
| **Durée estimée** | ~3,5 mois (3 à 4 mois selon la vitesse de portage du design) |

---

## 1. Contexte et vision

VivreEnfin est un service premium destiné aux seniors actifs de 70 ans et plus. Le site vitrine actuel (Next.js) présente l'offre ; il s'agit désormais de construire la **plateforme réelle** qui permet aux membres abonnés de **participer en direct aux rendez-vous du savoir** — des séances de transmission animées par des intervenants d'exception, depuis le confort de leur domicile.

L'enjeu central : offrir une expérience de visioconférence **native**, intégrée à VivreEnfin, **sans installation ni friction technique** pour un public senior. Le membre se connecte, et d'un clic rejoint la séance dans un environnement chaleureux, à la marque, en français.

### Principe directeur

> Zéro installation, zéro friction. Le membre clique sur « Rejoindre » depuis une page où il est déjà connecté — et il est dans la séance. Toute complexité technique reste invisible.

---

## 2. Objectifs

| #   | Objectif                                               | Indicateur de succès                                              |
| --- | ------------------------------------------------------ | ----------------------------------------------------------------- |
| O1  | Permettre la connexion sécurisée des membres           | Inscription et connexion fonctionnelles                           |
| O2  | Gérer l'abonnement payant via Stripe                   | Souscription, paiement récurrent, accès conditionné               |
| O3  | Diffuser des rendez-vous du savoir en direct, en natif | Séance vidéo fluide, sans installation, jusqu'à ~100 participants |
| O4  | Permettre l'échange en direct (public et privé)        | Messagerie publique + question privée à l'intervenant             |
| O5  | Présenter le planning des séances à venir              | Calendrier consultable, accès « Rejoindre » au bon moment         |

---

## 3. Périmètre (Scope)

### 3.1. Inclus dans la version 1

1. **Authentification** — inscription, connexion, gestion de session.
2. **Abonnement Stripe** — une offre unique (« Illimité », 29 €/mois), paiement récurrent, gestion des webhooks, accès aux séances conditionné à l'abonnement actif.
3. **Salle de masterclass native** — visioconférence type Zoom :
   - Diffusion vidéo/audio de l'intervenant vers les participants.
   - Messagerie **publique** (visible de tous) et **privée** (question adressée uniquement à l'intervenant).
   - Rejoindre en un clic, sans installation, dans l'interface VivreEnfin.
4. **Planning** — calendrier des rendez-vous du savoir à venir, avec accès à la séance le moment venu.
5. **Back-office d'administration** — zone protégée réservée à l'administrateur, permettant de **créer, modifier et planifier les masterclass en autonomie** (CRUD de la table `masterclasses` : titre, thème, intervenant, date, heure, durée). La séance ajoutée apparaît immédiatement dans le planning des membres. Aucune intervention technique requise pour programmer une séance.

### 3.2. Explicitement hors périmètre (V2 / demandes de changement)

- Offres d'abonnement multiples ou tarification par paliers (V1 = une seule offre).
- Replays en tant que produit (enregistrement et médiathèque).
- Applications mobiles natives (iOS / Android).
- Tableau de bord d'administration **avancé** au-delà du CRUD des masterclass (statistiques, gestion fine des membres, exports, rôles multiples, modération…).
- Diffusion HLS pour très grandes audiences (path de montée en charge — voir §8).
- Filtrage des messages par IA / modération automatique.
- Travail de **nouveau** design : la V1 reproduit le design existant, sans création graphique nouvelle.

> Tout élément hors de ces cinq fonctionnalités fera l'objet d'une demande de changement chiffrée séparément.

---

## 4. Personae

| Persona                           | Description                                                                                         | Besoins clés                                                                             |
| --------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Le membre senior** (70+)        | Abonné, peu à l'aise avec la technique. Sur ordinateur ou tablette, connexion Wi-Fi parfois faible. | Rejoindre sans installer, gros boutons, interface simple, poser une question facilement. |
| **L'intervenant**                 | Expert qui anime la séance en direct.                                                               | Diffuser sa vidéo, voir les questions publiques et privées, animer sereinement.          |
| **L'administrateur** (VivreEnfin) | Gère les séances et les membres.                                                                    | Créer/planifier une séance, suivre les inscriptions.                                     |

---

## 5. Spécifications fonctionnelles

### 5.1. Authentification (O1)

- Inscription par e-mail / mot de passe (l'UI existe déjà : `entrer/SignupForm`, `LoginForm`).
- Connexion, déconnexion, session persistante (cookie sécurisé `httpOnly`).
- Hachage des mots de passe (argon2).
- Mot de passe oublié / réinitialisation.

### 5.2. Abonnement Stripe (O2)

- Souscription à l'offre « Illimité » (29 €/mois) via Stripe Checkout.
- Gestion des webhooks Stripe (paiement réussi, échec, annulation) — vérification de signature, idempotence.
- L'état de l'abonnement (actif / inactif) **conditionne l'accès** aux séances : seul un membre à l'abonnement actif reçoit un jeton d'accès à la salle.
- Portail client Stripe pour la gestion de l'abonnement (résiliation, mise à jour du moyen de paiement).

### 5.3. Salle de masterclass native (O3, O4)

#### Vidéo

- L'intervenant diffuse sa vidéo/audio à l'ensemble des participants (modèle **un intervenant → plusieurs participants**).
- Les participants rejoignent sans installation, depuis le navigateur.
- Adaptation automatique de la qualité selon la connexion (essentiel pour le public senior en Wi-Fi faible).
- Contrôles simples et lisibles : rejoindre, quitter, couper/activer son micro si autorisé.

#### Messagerie

- **Chat public** : messages visibles de tous les participants de la salle.
- **Message privé à l'intervenant** : un participant pose une question visible **uniquement par l'intervenant**.
- Messagerie en temps réel (WebSocket), persistée en base.
- Interface adaptée aux seniors : texte large, envoi simple.

#### Déroulé d'une séance

1. Le membre voit la séance à venir dans le planning.
2. Au moment venu, le bouton « Rejoindre » devient actif.
3. Un clic → vérification de l'abonnement → génération d'un jeton → entrée dans la salle.
4. Le membre suit la séance, échange en public ou en privé avec l'intervenant.
5. Fin de séance → retour à l'espace membre.

### 5.4. Planning (O5)

- Calendrier des rendez-vous du savoir à venir (l'UI existe : `planning/CalendarGrid`, `WeekSelector`, `SlotCard`).
- Détail d'une séance : thème, intervenant, date, heure, durée.
- Affichage de l'accès « Rejoindre » au bon créneau.

### 5.5. Back-office d'administration

- Zone `/admin` protégée, accessible aux seuls comptes dotés du rôle **administrateur**.
- **CRUD des masterclass** : créer, modifier, planifier et lister les séances (titre, thème, intervenant, description, date, heure, durée, statut).
- La création ou la modification d'une séance se répercute **immédiatement** dans le planning des membres — aucune intervention technique ni accès direct à la base requis.
- Réutilise la stack existante (auth/sessions, sqlx, templates Askama + htmx) ; pas de nouvelle dépendance.
- Périmètre V1 limité au CRUD des séances. Les fonctions d'administration avancées (statistiques, gestion fine des membres, exports, rôles multiples, modération) restent en V2.

---

## 6. Architecture technique

### 6.1. Stack

| Couche               | Technologie             | Rôle                                         |
| -------------------- | ----------------------- | -------------------------------------------- |
| **Langage backend**  | Rust                    | Langage serveur                              |
| **Runtime async**    | Tokio                   | Exécution asynchrone                         |
| **Framework web**    | Axum                    | API + WebSocket + service HTML, un seul port |
| **Base de données**  | PostgreSQL              | Membres, abonnements, séances, messages      |
| **Accès BDD**        | sqlx                    | Requêtes SQL vérifiées à la compilation      |
| **Templates**        | Askama                  | Templates HTML vérifiés à la compilation     |
| **Interactivité**    | htmx (+ îlots JS)       | Chat, formulaires, navigation                |
| **Styles**           | Tailwind CSS + DaisyUI  | Composants, design VivreEnfin                |
| **Authentification** | tower-sessions + argon2 | Sessions, hachage                            |
| **Paiement**         | Stripe (`async-stripe`) | Abonnements + webhooks                       |
| **Vidéo (SFU)**      | LiveKit                 | Moteur de visioconférence (le serveur média) |
| **Client vidéo**     | `livekit-client` (JS)   | Pilotage WebRTC dans le navigateur (îlot JS) |
| **NAT traversal**    | coturn                  | Relais réseau (intégré à LiveKit ou à côté)  |
| **Observabilité**    | tracing                 | Journalisation structurée                    |

### 6.2. Principe d'architecture

L'application Axum (un seul binaire, un seul port) gère **tout sauf le transport vidéo**. La vidéo circule directement entre le navigateur et LiveKit ; le rôle d'Axum côté vidéo se limite à **émettre un jeton d'accès** (~30 lignes).

```
┌──────────────── Axum (un binaire Rust, un port) ────────────────┐
│  /                  → coquille HTML Askama + htmx               │
│  /seance/:id        → page de la salle + îlot JS LiveKit        │
│  /api/livekit/token → génère le jeton d'accès (seul lien vidéo) │
│  /ws/chat           → messages publics + privés                │
│  /api/billing/*     → Stripe (checkout + webhook)              │
│  /api/auth/*        → connexion / inscription                  │
│  /admin/*           → back-office (CRUD masterclass, rôle admin)│
│  sqlx ─► PostgreSQL (membres · abonnements · séances · messages)│
└───────────────────────────────────────────────────────────────────┘
        │ jeton uniquement                  ▲ chat (htmx/WS)
        ▼                                   │
   ┌──────────────┐                Intervenant + participants
   │ LiveKit SFU  │◄────WebRTC─────────────┘
   │ (moteur vidéo)│
   └──────────────┘
```

**Deux connexions indépendantes depuis le navigateur :**

- **Vidéo** → LiveKit (WebRTC)
- **Messages** → application Axum (WebSocket)

### 6.3. Pourquoi LiveKit

La diffusion d'un intervenant vers de nombreux participants nécessite un **SFU** (Selective Forwarding Unit) — le serveur qui reçoit le flux de l'intervenant et le redistribue à tous. C'est l'architecture qu'utilise Google Meet. LiveKit est un SFU open source, auto-hébergeable, doté d'un SDK Rust pour la génération des jetons. Construire ce SFU soi-même représenterait 6 à 12 mois de développement supplémentaires — LiveKit l'évite tout en gardant le reste de la stack 100 % Rust.

### 6.4. Réutilisation du design existant

Le design VivreEnfin (palette terracotta/anthracite/crème, Roboto Slab, tokens de `globals.css`) est **reproduit** dans la nouvelle stack via Askama + DaisyUI. Les composants React existants (`.tsx`) ne sont pas réutilisables tels quels : ils sont **re-exprimés** en templates Askama. Le rendu visuel est conservé à l'identique ; aucun nouveau design n'est produit en V1.

---

## 7. Modèle de données (esquisse)

| Table           | Champs principaux                                                              |
| --------------- | ------------------------------------------------------------------------------ |
| `members`       | id, email, mot_de_passe (hash), nom, créé_le                                   |
| `subscriptions` | id, member_id, stripe_customer_id, stripe_subscription_id, statut, période_fin |
| `masterclasses` | id, titre, thème, intervenant, description, date, heure, durée, statut         |
| `sessions`      | id, masterclass_id, livekit_room, démarrée_le, terminée_le                     |
| `messages`      | id, session_id, member_id, contenu, visibilité (public/privé), créé_le         |

---

## 8. Contraintes et exigences non fonctionnelles

- **Accessibilité senior** : texte large, contrastes, gros boutons, respect de `prefers-reduced-motion`, parcours simplifié.
- **Langue** : français, vouvoiement, pas d'emoji. Vocabulaire VivreEnfin respecté (« rendez-vous du savoir », invariable).
- **Fiabilité réseau** : gestion des reconnexions WebSocket/WebRTC (public senior en Wi-Fi variable).
- **Capacité V1** : jusqu'à ~100 participants par séance en direct (WebRTC).
- **Montée en charge (V2)** : au-delà de plusieurs centaines de spectateurs passifs, ajout possible d'une diffusion **HLS** (LiveKit Egress → FFmpeg → CDN) sans réécriture de l'application.
- **Sécurité** : aucun traitement de données de carte (délégué à Stripe), mots de passe hachés, jetons d'accès signés et à durée limitée.

---

## 9. Coûts d'exploitation (à la charge du client)

Le forfait de développement (§11) **ne couvre pas** les coûts récurrents d'exploitation :

| Poste                                   | Ordre de grandeur                          |
| --------------------------------------- | ------------------------------------------ |
| LiveKit (vidéo)                         | ~25–40 € par séance de 100 personnes / 1 h |
| Hébergement (serveur Axum + PostgreSQL) | ~20–50 €/mois à petite échelle             |
| Frais Stripe                            | Commission standard par transaction        |

---

## 10. Planning de développement

Ordre retenu : **masterclass d'abord, puis Stripe.**

| Phase                       | Livrable                                                                             | Durée           |
| --------------------------- | ------------------------------------------------------------------------------------ | --------------- |
| **0. Initialisation**       | Setup projet, schéma BDD, début du portage du design                                 | ~2–3 sem.       |
| **1. Salle de masterclass** | Vidéo LiveKit + messagerie publique/privée + auth + parcours de connexion à la salle | ~3–4 sem.       |
| **2. Stripe + planning + back-office** | Abonnement, conditionnement de l'accès, calendrier, CRUD admin des masterclass | ~4–5 sem.       |
| **3. Finition + livraison** | Intégration, reconnexions, tests, recette, transfert                                 | ~2–3 sem.       |
| **Total**                   |                                                                                      | **~3 à 4 mois** |

> La durée de ~3,5 mois est l'hypothèse cible ; elle dépend principalement de la vitesse de portage du design existant vers Askama/DaisyUI.

---

## 11. Budget et modalités de facturation

**Montant : 40 000 € HT** pour le développement des cinq fonctionnalités (authentification, abonnement Stripe, salle de masterclass native avec messagerie publique/privée, planning, back-office d'administration des masterclass).

Facturation par **jalons**, dans l'ordre de développement :

| Jalon                    | Livrable                                    | Part      | Montant      |
| ------------------------ | ------------------------------------------- | --------- | ------------ |
| **0. Acompte**           | Démarrage, setup, schéma, portage du design | 50 %      | 20 000 €     |
| **1. Masterclass**       | Vidéo + messagerie publique/privée + auth   | 25 %      | 10 000 €     |
| **2. Stripe + planning + back-office** | Abonnement, accès conditionné, planning, back-office admin | 17,5 %    | 7 000 €      |
| **3. Finition**          | Intégration, tests, livraison               | 7,5 %     | 3 000 €      |
| **Total**                |                                             | **100 %** | **40 000 €** |

**Exclusions** : coûts d'exploitation (LiveKit, hébergement, frais Stripe — à la charge du client), nouveau travail de design au-delà du portage de l'existant, et toute fonctionnalité hors des cinq nommées (offres multiples, replays, enregistrement, applications natives, modération IA, tableau de bord d'administration avancé au-delà du CRUD des masterclass).

---

## 12. Risques identifiés

| Risque                                       | Impact                 | Mitigation                                                                          |
| -------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------- |
| Portage du design plus long que prévu        | Glissement vers 4 mois | DaisyUI couvre une large part des composants ; périmètre design figé sur l'existant |
| Webhooks Stripe (cas limites)                | Retard sur la phase 2  | Budget dédié, une seule offre en V1                                                 |
| Reconnexions réseau (public senior)          | Expérience dégradée    | Gestion des reconnexions dès le départ, pas en finition                             |
| Montée en charge au-delà de 100 participants | Limite technique V1    | Path HLS prévu en V2 sans réécriture                                                |

---
