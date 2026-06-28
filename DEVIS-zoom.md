# Devis — Plateforme de rendez-vous du savoir VivreEnfin

**Devis commercial**

|                       |                                                                 |
| --------------------- | --------------------------------------------------------------- |
| **Numéro de devis**   | DEV-2026-001                                                    |
| **Date d'émission**   | 21 juin 2026                                                    |
| **Validité du devis** | 30 jours (jusqu'au 21 juillet 2026)                             |
| **Référence projet**  | VivreEnfin — Plateforme de rendez-vous du savoir en direct (V1) |
| **Document associé**  | PRD VivreEnfin v1.0 du 20 juin 2026                             |

---

## Prestataire

| Champ                         | Valeur                        |
| ----------------------------- | ----------------------------- |
| **Nom / Raison sociale**      | _[à compléter]_               |
| **Adresse**                   | _[à compléter]_               |
| **SIRET**                     | _[à compléter]_               |
| **N° TVA intracommunautaire** | _[à compléter]_               |
| **Contact**                   | <jonathan.el.baz@outlook.com> |

## Client

| Champ              | Valeur                     |
| ------------------ | -------------------------- |
| **Raison sociale** | VivreEnfin _[à compléter]_ |
| **Adresse**        | _[à compléter]_            |
| **SIRET**          | _[à compléter]_            |
| **Contact**        | _[à compléter]_            |

---

## 1. Contexte

VivreEnfin dispose aujourd'hui d'un **site vitrine** en ligne, qui présente l'offre et son univers : palette de couleurs, typographie, mise en page, ambiance générale. Ce site donne déjà à la marque une identité visuelle aboutie et reconnaissable.

L'objet du présent devis est de construire, **par-dessus cette identité existante**, la plateforme réelle qui permet aux membres de s'abonner et de participer en direct aux rendez-vous du savoir.

Point structurant du projet : **la plateforme reprend exactement le même design que le site actuel.** Les membres ne doivent percevoir aucune rupture entre le site qu'ils connaissent et leur nouvel espace — mêmes couleurs, même typographie, mêmes codes visuels, même esprit d'interface (gros boutons, texte large, sobriété adaptée à un public senior). Cette continuité s'applique à **toutes les pages que nous construisons** (connexion, abonnement, espace d'administration) ; pour la **séance vidéo elle-même**, la plateforme s'appuie sur le composant Zoom intégré, dont l'apparence est encadrée mais pas entièrement à notre main (voir §3).

Cette reprise du design existant est **comprise dans le forfait** ; en revanche, toute nouvelle création graphique (refonte, nouveaux écrans inventés de zéro, nouvelle charte) est hors périmètre de cette V1.

---

## 2. Objet du devis

Conception et développement de la **plateforme VivreEnfin (version 1)** : un espace web sur lequel les membres abonnés se connectent et, **d'un seul clic, rejoignent en direct les rendez-vous du savoir** — des séances animées par des intervenants d'exception, en français, **sans rien à installer** côté participant.

Le présent devis couvre les **quatre fonctionnalités** définies au périmètre de la version 1 :

1. **Comptes membres** — création de compte, connexion, mot de passe oublié, session sécurisée. Un membre reste connecté d'une visite à l'autre.
2. **Abonnement (Stripe)** — souscription à l'offre unique « Illimité » (29 €/mois), prélèvement automatique mensuel, résiliation en autonomie depuis l'espace membre. L'accès aux séances est **réservé aux abonnés à jour** : la vérification est automatique à chaque entrée dans une séance.
3. **Séance vidéo intégrée (Zoom Meeting SDK)** — la visioconférence en direct, **embarquée dans une page du site** (un intervenant face à jusqu'à ~100 participants) : vidéo et son de l'intervenant, chat et **questions** via les fonctions natives de Zoom. Le membre rejoint **en un clic depuis le navigateur, sans télécharger de logiciel** : le composant Zoom s'ouvre **dans la page VivreEnfin**, sans renvoyer vers l'application Zoom externe.
4. **Espace d'administration** — une zone réservée à VivreEnfin pour **créer, modifier et programmer les séances en toute autonomie**, sans aucune intervention technique de notre part. Une séance ajoutée est **immédiatement** accessible aux membres.

Les pages que nous construisons (connexion, abonnement, administration, ainsi que la page d'accueil de la séance) reprennent le **même design que le site actuel** (voir §1).

---

## 3. L'approche retenue : la séance Zoom embarquée dans le site

Le cœur de ce projet est la séance vidéo. L'approche retenue est de **réutiliser le moteur de visioconférence de Zoom** (Zoom Meeting SDK) et de l'**embarquer dans une page de la plateforme**, plutôt que de reconstruire une salle vidéo de zéro. C'est un choix d'**économie et de rapidité** : on s'appuie sur une technologie éprouvée et déjà connue du public. Voici, en toute transparence, ce que cela implique.

### Ce que cette approche apporte

- **Un coût de développement et de fonctionnement réduit.** Zoom fournit déjà le moteur vidéo, l'interface de réunion et le chat. Nous n'avons pas à les reconstruire : le développement de la séance est nettement allégé (voir §4), et les coûts récurrents reposent sur un abonnement Zoom maîtrisé (voir §10).

- **Une technologie éprouvée et familière.** Zoom est une référence mondiale de la visioconférence, déjà connue de beaucoup de vos membres. La qualité vidéo/audio, la robustesse réseau et l'adaptation à une connexion faible sont assurées par Zoom.

- **Rejoindre depuis le site, sans installation.** Grâce au composant web (« Component View ») du Meeting SDK, la réunion s'ouvre **dans une page de VivreEnfin** : le membre clique sur « Rejoindre » et participe **depuis son navigateur**, sans télécharger ni installer l'application Zoom. La page d'accueil de la séance (avant et après) est à vos couleurs.

### Ce que cette approche implique — à connaître

Par honnêteté, voici les limites propres au Meeting SDK :

- **L'interface de la réunion reste celle de Zoom.** Une fois dans la séance, le membre voit l'interface Zoom (sa disposition, ses contrôles, et la **marque Zoom**). On peut **repositionner et habiller** certains éléments (barre de menu, vidéo, chat, participants) pour les intégrer à la page, mais on n'obtient pas une salle **entièrement** à la marque VivreEnfin : ce niveau de personnalisation totale supposerait de reconstruire la salle vidéo de zéro, hors périmètre de cette version.

- **Un compte Zoom est requis côté VivreEnfin.** Le Meeting SDK fonctionne avec une **licence Zoom** (compte hôte) : c'est ce compte qui « porte » les séances. Les participants, eux, n'ont rien à créer ni installer.

- **Les échanges transitent par Zoom.** Le chat et les questions passent par l'infrastructure de Zoom, et non par votre plateforme. La distinction **public / privé** s'appuie sur les fonctions natives de Zoom (message à tous / message privé à l'hôte). Si VivreEnfin souhaite **conserver et maîtriser** l'historique des messages côté plateforme, cela suppose un développement complémentaire (chiffré séparément) ; ce n'est pas inclus ici.

- **Le cadre est celui d'un éditeur tiers.** Les évolutions, limites et règles de la réunion dépendent de Zoom et de votre formule. C'est précisément le compromis retenu : on gagne en coût et en délai, on cède en maîtrise et en personnalisation.

> En clair : l'approche **réutilise Zoom**, intégré au plus près du site, pour livrer **plus vite et à moindre coût**. Elle fournit une **séance Zoom embarquée** dans l'univers VivreEnfin, plutôt qu'une salle vidéo entièrement reconstruite à vos couleurs. Le curseur est volontairement placé du côté du **coût** et du **délai**.

---

## 4. Détail des prestations

| Fonctionnalité                                                                                                                                                                                                                                                                                                                            | Montant HT |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Séance vidéo intégrée (Zoom Meeting SDK)** — intégration du composant Zoom dans une page du site, génération de la signature/jeton d'accès, ouverture en un clic depuis le navigateur sans installation, chat et questions via les fonctions natives Zoom, gestion jusqu'à ~100 participants, conditionnement de l'accès à l'abonnement | 12 000 €   |
| **Abonnement Stripe + connexion** — comptes membres (création, connexion, mot de passe oublié, session persistante), souscription et prélèvement automatique mensuel via Stripe, renouvellements et résiliation en autonomie, accès réservé aux abonnés à jour                                                                            | 8 000 €    |
| **Backoffice** — espace d'administration pour créer, modifier, programmer et lister les séances en autonomie ; insertion dynamique des séances sans intervention technique ; accès en un clic à la séance le moment venu ; toute séance ajoutée est immédiatement accessible aux membres                                                  | 4 000 €    |

> **Ce que couvre le lot « séance vidéo » (12 000 €) :** Zoom fournit déjà le moteur vidéo, l'interface de réunion, le chat et le modèle d'hôte ; le travail se concentre donc sur **l'intégration** du composant dans le site, la **signature d'accès** et le **conditionnement à l'abonnement**. Construire une salle vidéo de zéro (moteur, interface, messagerie publique/privée et persistance entièrement côté VivreEnfin) représenterait un coût sensiblement plus élevé — ce n'est pas le périmètre retenu ici. Le lot backoffice (4 000 €) ne comprend pas le planning des séances (agenda côté membres), hors périmètre de cette version.

---

## 5. Récapitulatif financier

| Désignation   | Montant      |
| ------------- | ------------ |
| **Total HT**  | **24 000 €** |
| TVA (20 %)    | 4 800 €      |
| **Total TTC** | **28 800 €** |

> _Si le prestataire relève du régime de la franchise en base de TVA, la mention « TVA non applicable, art. 293 B du CGI » remplace la ligne de TVA et le Total TTC est égal au Total HT (24 000 €). À ajuster selon le statut du prestataire._

---

## 6. Échéancier de facturation

Facturation en **deux versements égaux**, sans paliers intermédiaires :

| Versement           | Ce qui déclenche la facture                                                                                                      | Part      | Montant HT   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------ |
| **Fonctionnalités** | À la signature — développement des trois fonctionnalités (séance vidéo Zoom intégrée, abonnement Stripe + connexion, backoffice) | 50 %      | 12 000 €     |
| **Livraison**       | À la recette et remise finale — mise en route, reprise du design, assemblage, robustesse réseau, tests et livraison              | 50 %      | 12 000 €     |
| **Total**           |                                                                                                                                  | **100 %** | **24 000 €** |

---

## 7. Délais

**Durée estimée : ~2 à 2,5 mois.** L'intégration du composant Zoom permet une phase « séance vidéo » courte ; l'essentiel de l'effort porte sur l'abonnement Stripe, l'espace d'administration et la reprise du design existant.

| Phase                   | Livrable                                                                           | Durée     |
| ----------------------- | ---------------------------------------------------------------------------------- | --------- |
| 0. Mise en route        | Préparation du projet, base de données, début de la reprise du design              | ~2–3 sem. |
| 1. Séance vidéo Zoom    | Intégration du composant Zoom + comptes membres + entrée dans la séance en un clic | ~2 sem.   |
| 2. Abonnement + admin   | Abonnement, accès réservé, espace d'administration des séances                     | ~3–4 sem. |
| 3. Finition + livraison | Assemblage, gestion des coupures réseau, tests, recette, remise                    | ~2 sem.   |

Le démarrage est conditionné à la signature du devis et au versement de l'acompte.

---

## 8. Prestations incluses

- Développement des quatre fonctionnalités décrites au §2 (comptes membres, abonnement, séance vidéo Zoom intégrée, espace d'administration des séances).
- **Reprise du design du site actuel** dans toutes les pages que nous construisons (connexion, abonnement, administration, page d'accueil de la séance) — voir §1.
- **Tout changement visuel requis dans le périmètre du présent devis est compris** : les ajustements d'apparence sur les pages livrées (mise en page, couleurs, typographie, espacements, états des boutons) font partie de la prestation. Seule la création graphique nouvelle au-delà de ce périmètre (refonte, écrans inventés de zéro, nouvelle charte) reste hors devis — voir §9.
- Intégration du **Zoom Meeting SDK (Component View)** dans le site : entrée dans la séance en un clic, sans installation côté participant.
- Gestion des coupures et reconnexions réseau pour un public senior en Wi-Fi variable (transport vidéo assuré par Zoom).
- Capacité jusqu'à **~100 participants** par séance en direct.
- Tests, recette avec vous, et remise du projet (code et documentation de livraison).

---

## 9. Prestations exclues (hors devis)

Les éléments suivants ne sont **pas** couverts par le présent devis et feront, le cas échéant, l'objet d'une **demande de changement chiffrée séparément** :

- **Coûts de fonctionnement récurrents**, à la charge du client (détaillés au §10) : licence/abonnement Zoom, hébergement, frais Stripe.
- **Planning des séances** (agenda des rendez-vous du savoir à venir côté membres, avec bouton « Rejoindre » qui s'active au bon moment) : non inclus dans cette version. Le backoffice permet de programmer les séances, et chaque séance reste accessible le moment venu, mais sans calendrier consultable par les membres.
- **Salle entièrement à la marque** (interface de réunion 100 % VivreEnfin, sans interface ni marque Zoom) : supposerait de reconstruire la salle vidéo de zéro, hors périmètre de cette version.
- **Conservation et maîtrise des messages côté VivreEnfin** (historique du chat persisté et administrable sur votre plateforme) : non inclus, car les échanges transitent par Zoom (voir §3).
- **Nouvelle création graphique** au-delà de la reprise du design existant (refonte, écrans inventés de zéro, nouvelle charte) — voir §1.
- Offres d'abonnement multiples ou tarifs par paliers (la V1 propose une seule offre).
- Replays : enregistrement et médiathèque des séances passées (l'enregistrement Zoom peut être activé côté Zoom, mais sa reprise/médiathèque dans le site n'est pas incluse).
- Applications mobiles à installer (iPhone / Android).
- **Espace d'administration avancé** au-delà de la gestion des séances comprise au lot P3 (statistiques, gestion détaillée des membres, exports, plusieurs niveaux de rôles…).
- Diffusion pour de très grandes audiences (plusieurs centaines de spectateurs).
- **Filtrage intelligent des messages par IA.**

---

## 10. Coûts de fonctionnement (à la charge du client)

Le forfait de développement **ne couvre pas** les frais récurrents liés à l'exploitation de la plateforme une fois en service.

| Poste                                    | Ordre de grandeur                                       |
| ---------------------------------------- | ------------------------------------------------------- |
| Licence Zoom (compte hôte + Meeting SDK) | abonnement Zoom mensuel/annuel selon la formule retenue |
| Hébergement de la plateforme             | ~20–50 €/mois à petite échelle                          |
| Frais Stripe                             | commission standard par transaction                     |

Le service vidéo retenu est le **Zoom Meeting SDK**. Contrairement au Video SDK (facturé à l'usage, à la minute), le Meeting SDK s'utilise avec une **licence Zoom** (compte hôte / accord Zoom Workplace ou ISV) : la tarification dépend de la **formule souscrite auprès de Zoom**, généralement un **abonnement** (mensuel ou annuel) dimensionné selon le nombre de participants par séance et les options (webinaire, enregistrement). Pour des séances jusqu'à ~100 participants, une formule Zoom adaptée est nécessaire ; **le tarif exact se confirme directement auprès de Zoom** selon la formule et le contrat retenus.

> À noter : Zoom se règle **par abonnement**, dû quel que soit le volume de séances. Cette formule est donc d'autant plus avantageuse que la cadence des rendez-vous du savoir est régulière ; le coût par séance diminue à mesure que le nombre de séances mensuelles augmente.
>
> _Modèle de tarification Zoom Meeting SDK relevé en juin 2026 : licence via Zoom Workplace ou accord ISV (pas de tarif public unique à la minute, contrairement au Video SDK). Montants à confirmer auprès de Zoom selon la formule retenue et susceptibles d'évoluer._

---

## 11. Conditions

- **Validité du devis** : 30 jours à compter de la date d'émission.
- **Facturation en deux versements égaux** : 50 % (Fonctionnalités, 12 000 € HT) à la commande, exigible à la signature ; 50 % (Livraison, 12 000 € HT) à la recette et remise finale.
- **Règlement** : par virement bancaire, à réception de facture. Délai de paiement : 30 jours.
- **Pénalités de retard** : taux d'intérêt légal en vigueur, plus indemnité forfaitaire de recouvrement de 40 € (art. L441-10 du Code de commerce).
- **Propriété intellectuelle** : le transfert des droits sur le code livré intervient au paiement intégral des sommes dues. Le Zoom Meeting SDK reste soumis aux conditions de licence de Zoom.
- **Réserve de propriété** : les livrables restent la propriété du prestataire jusqu'au complet paiement.
- **Dépendance Zoom** : la plateforme requiert un compte/licence Zoom valide côté VivreEnfin ; la disponibilité et les conditions de la séance vidéo dépendent du service Zoom.
- **Disponibilité et collaboration du client** : la bonne marche du projet suppose la **disponibilité du client** tout au long de la prestation pour valider les étapes, répondre aux questions et fournir les éléments nécessaires. En particulier, la création des comptes et l'obtention des accès aux services tiers (**Stripe**, **Zoom**) requièrent des **informations que seul le client peut fournir** (données de l'entreprise, coordonnées bancaires, validations d'identité, etc.). Le client s'engage à transmettre ces informations et accès dans des délais raisonnables ; tout retard ou indisponibilité de sa part décale d'autant les délais de réalisation, sans que le prestataire en soit tenu pour responsable.
- Le présent devis est établi sur la base du **PRD VivreEnfin v1.0 du 20 juin 2026** ; toute évolution du périmètre fera l'objet d'un avenant.

---

## 12. Acceptation

Bon pour accord — devis à retourner daté, signé et précédé de la mention manuscrite **« Bon pour accord »**.

| Le client                      | Le prestataire                 |
| ------------------------------ | ------------------------------ |
| Date :                         | Date :                         |
| Nom et qualité du signataire : | Nom et qualité du signataire : |
| Signature :                    | Signature :                    |

---

_Devis établi en euros. Prix fermes pendant la durée de validité indiquée._
