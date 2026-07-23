# Devis — Plateforme de rendez-vous du savoir Veevre

**Devis commercial**

|                       |                                                                 |
| --------------------- | --------------------------------------------------------------- |
| **Numéro de devis**   | DEV-2026-001                                                    |
| **Date d'émission**   | 20 juin 2026                                                    |
| **Validité du devis** | 30 jours (jusqu'au 20 juillet 2026)                             |
| **Référence projet**  | Veevre — Plateforme de rendez-vous du savoir en direct (V1) |
| **Document associé**  | PRD Veevre v1.0 du 20 juin 2026                             |

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
| **Raison sociale** | Veevre _[à compléter]_ |
| **Adresse**        | _[à compléter]_            |
| **SIRET**          | _[à compléter]_            |
| **Contact**        | _[à compléter]_            |

---

## 1. Contexte

Veevre dispose aujourd'hui d'un **site vitrine** en ligne, qui présente l'offre et son univers : palette de couleurs, typographie, mise en page, ambiance générale. Ce site donne déjà à la marque une identité visuelle aboutie et reconnaissable.

L'objet du présent devis est de construire, **par-dessus cette identité existante**, la plateforme réelle qui permet aux membres de s'abonner et de participer en direct aux rendez-vous du savoir.

Point structurant du projet : **la plateforme reprend exactement le même design que le site actuel.** Les membres ne doivent percevoir aucune rupture entre le site qu'ils connaissent et leur nouvel espace — mêmes couleurs, même typographie, mêmes codes visuels, même esprit d'interface (gros boutons, texte large, sobriété adaptée à un public senior). Il ne s'agit donc **pas** de créer un nouveau design, mais de **prolonger fidèlement l'existant** dans les nouvelles pages (connexion, abonnement, planning, salle de séance, espace d'administration).

Cette reprise à l'identique du design existant est **comprise dans le forfait** ; en revanche, toute nouvelle création graphique (refonte, nouveaux écrans inventés de zéro, nouvelle charte) est hors périmètre de cette V1.

---

## 2. Objet du devis

Conception et développement de la **plateforme Veevre (version 1)** : un espace web sur lequel les membres abonnés se connectent et, **d'un seul clic, rejoignent en direct les rendez-vous du savoir** — des séances animées par des intervenants d'exception, dans un environnement entièrement aux couleurs de Veevre, en français, **sans rien à installer ni paramétrer**.

Le présent devis couvre les **cinq fonctionnalités** définies au périmètre de la version 1 :

1. **Comptes membres** — création de compte, connexion, mot de passe oublié, session sécurisée. Un membre reste connecté d'une visite à l'autre.
2. **Abonnement (Stripe)** — souscription à l'offre unique « Illimité » (29 €/mois), prélèvement automatique mensuel, résiliation en autonomie depuis l'espace membre. L'accès aux séances est **réservé aux abonnés à jour** : la vérification est automatique à chaque connexion à une salle.
3. **Salle de séance Veevre** — la visioconférence en direct, **intégrée au site** (un intervenant face à jusqu'à ~100 participants) : vidéo et son de l'intervenant, messagerie publique pour échanger entre membres, et **question privée** adressée uniquement à l'intervenant. On rejoint en un clic, depuis le navigateur, sans logiciel à télécharger.
4. **Planning** — l'agenda des rendez-vous du savoir à venir (thème, intervenant, date, heure). Le bouton « Rejoindre » s'active automatiquement au bon moment.
5. **Espace d'administration** — une zone réservée à Veevre pour **créer, modifier et programmer les séances en toute autonomie**, sans aucune intervention technique de notre part. Une séance ajoutée apparaît **immédiatement** dans le planning des membres.

Chacune de ces fonctionnalités est développée dans le **même design que le site actuel** (voir §1), pour une continuité visuelle totale avec l'existant.

---

## 3. Une salle de séance Veevre, pas un simple lien Zoom

Le cœur de ce projet est la salle de séance. Le choix a été fait de la construire **dans la plateforme**, et non de renvoyer les membres vers un outil externe comme Zoom. Ce choix structure tout le reste — voici ce qu'il apporte concrètement à Veevre.

- **Aucune sortie du site, aucune installation.** Le membre clique sur « Rejoindre » sur une page où il est déjà connecté — et il est dans la séance. Pas de logiciel à télécharger, pas de code de réunion à saisir, pas de salle d'attente : un point décisif pour un public senior, et la première cause d'abandon avec les solutions grand public.

- **Une expérience entièrement à la marque.** La salle est aux couleurs de Veevre, avec une interface pensée pour vos membres (gros boutons, texte large, parcours épuré). Aucun logo, aucune mention ni publicité d'un tiers ne vient s'intercaler. Le membre reste chez Veevre du début à la fin.

- **Le contrôle total des échanges.** Les messages échangés pendant la séance vous appartiennent et transitent par votre plateforme. Vous maîtrisez ce qui s'affiche, vous distinguez le **chat public** (entre membres) de la **question privée** (réservée à l'intervenant), et l'ensemble est conservé côté Veevre. Avec un outil externe, ces échanges vous échapperaient.

- **Pas de limites imposées par un éditeur.** Pas de durée de réunion plafonnée, pas de nombre de participants bridé par une formule, pas de fonctionnalité qui change ou disparaît au gré des décisions d'un fournisseur. Les règles de la salle, c'est Veevre qui les fixe.

- **Une base prête à évoluer.** Parce que la séance vit dans votre plateforme, on peut **y greffer demain de nouvelles capacités** sans tout reconstruire : par exemple un **filtrage intelligent des messages** (modération assistée par IA pour écarter automatiquement un message déplacé), une mise en avant des questions, ou des outils d'animation. Ces évolutions ne sont pas comprises dans la V1, mais le socle retenu les rend possibles — ce qui serait fermé avec une solution clé en main externe.

> En clair : payer un abonnement Zoom donnerait une salle générique, hors de votre marque, soumise aux limites et aux changements d'un tiers. La salle Veevre est **la vôtre** — maîtrisée, à votre image, et faite pour grandir avec le service.

---

## 4. Détail des prestations

| Fonctionnalité                                                                                                                                                                                                                                                   | Montant HT |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Salle de séance Veevre (visio live)** — vidéo et son de l'intervenant en direct intégrés au site (live kit), messagerie publique et question privée en temps réel, entrée dans la salle en un clic depuis le navigateur, gestion jusqu'à ~100 participants | 25 000 €   |
| **Abonnement Stripe + connexion** — comptes membres (création, connexion, mot de passe oublié, session persistante), souscription et prélèvement automatique mensuel via Stripe, renouvellements et résiliation en autonomie, accès réservé aux abonnés à jour   | 10 000 €   |
| **Backoffice + planning** — espace d'administration pour créer, modifier, programmer et lister les séances en autonomie ; agenda des rendez-vous côté membres avec bouton « Rejoindre » qui s'active au bon moment ; report immédiat de toute séance ajoutée     | 5 000 €    |

---

## 5. Récapitulatif financier

| Désignation   | Montant      |
| ------------- | ------------ |
| **Total HT**  | **40 000 €** |
| TVA (20 %)    | 8 000 €      |
| **Total TTC** | **48 000 €** |

> _Si le prestataire relève du régime de la franchise en base de TVA, la mention « TVA non applicable, art. 293 B du CGI » remplace la ligne de TVA et le Total TTC est égal au Total HT (40 000 €). À ajuster selon le statut du prestataire._

---

## 6. Échéancier de facturation

Facturation en **deux versements égaux**, sans paliers intermédiaires :

| Versement           | Ce qui déclenche la facture                                                                                                                 | Part      | Montant HT   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------ |
| **Fonctionnalités** | À la signature — développement des trois fonctionnalités (salle de séance visio live, abonnement Stripe + connexion, backoffice + planning) | 50 %      | 20 000 €     |
| **Livraison**       | À la recette et remise finale — mise en route, reprise du design, assemblage, robustesse réseau, tests et livraison                         | 50 %      | 20 000 €     |
| **Total**           |                                                                                                                                             | **100 %** | **40 000 €** |

---

## 7. Délais

**Durée estimée : ~3,5 mois** (3 à 4 mois selon la vitesse de reprise du design existant ; l'ajout de l'espace d'administration porte la cible vers le haut de la fourchette).

| Phase                            | Livrable                                                                          | Durée     |
| -------------------------------- | --------------------------------------------------------------------------------- | --------- |
| 0. Mise en route                 | Préparation du projet, base de données, début de la reprise du design             | ~2–3 sem. |
| 1. Salle de séance               | Vidéo + son + messagerie publique/privée + comptes membres + entrée dans la salle | ~3–4 sem. |
| 2. Abonnement + planning + admin | Abonnement, accès réservé, agenda, espace d'administration des séances            | ~4–5 sem. |
| 3. Finition + livraison          | Assemblage, gestion des coupures réseau, tests, recette, remise                   | ~2–3 sem. |

Le démarrage est conditionné à la signature du devis et au versement de l'acompte.

---

## 8. Prestations incluses

- Développement des cinq fonctionnalités décrites au §2 (comptes membres, abonnement, salle de séance intégrée avec messagerie publique et question privée, planning, espace d'administration des séances).
- **Reprise à l'identique du design du site actuel** dans toutes les pages de la plateforme (voir §1).
- Gestion des coupures et reconnexions réseau pour un public senior en Wi-Fi variable.
- Capacité jusqu'à **~100 participants** par séance en direct.
- Tests, recette avec vous, et remise du projet (code et documentation de livraison).

---

## 9. Prestations exclues (hors devis)

Les éléments suivants ne sont **pas** couverts par le présent devis et feront, le cas échéant, l'objet d'une **demande de changement chiffrée séparément** :

- **Coûts de fonctionnement récurrents**, à la charge du client (détaillés au §10) : service vidéo, hébergement, frais Stripe.
- **Nouvelle création graphique** au-delà de la reprise du design existant (refonte, écrans inventés de zéro, nouvelle charte) — voir §1.
- Offres d'abonnement multiples ou tarifs par paliers (la V1 propose une seule offre).
- Replays : enregistrement et médiathèque des séances passées.
- Applications mobiles à installer (iPhone / Android).
- **Espace d'administration avancé** au-delà de la gestion des séances comprise au lot P3 (statistiques, gestion détaillée des membres, exports, plusieurs niveaux de rôles…).
- Diffusion pour de très grandes audiences (plusieurs centaines de spectateurs), prévue comme une évolution ultérieure.
- **Filtrage intelligent des messages par IA** : envisageable plus tard grâce au socle retenu (voir §3), mais non développé en V1.

-

## 10. Coûts de fonctionnement (à la charge du client)

Le forfait de développement **ne couvre pas** les frais récurrents liés à l'exploitation de la plateforme une fois en service. Ces postes restent maîtrisés et proportionnels à l'usage réel :

| Poste                                    | Ordre de grandeur                          |
| ---------------------------------------- | ------------------------------------------ |
| Service vidéo — abonnement mensuel       | à partir de ~45 €/mois (offre « Ship »)    |
| Service vidéo — coût par séance diffusée | ~10–15 € par séance de 100 personnes / 1 h |
| Hébergement de la plateforme             | ~20–50 €/mois à petite échelle             |
| Frais Stripe                             | commission standard par transaction        |

Le service vidéo retenu est **LiveKit Cloud**. Sa facturation combine un **abonnement mensuel** (palier « Ship » à partir de ~50 \$/mois, soit ~45 €, incluant un large volume d'usage) et une **part variable à l'usage** au-delà des volumes inclus, facturée à la minute de connexion et au volume de données diffusées. Pour une séance type (un intervenant diffusant vers ~100 participants pendant 1 h), la part variable représente de l'ordre de **10 à 15 €** : environ 6 000 minutes de connexion (~101 participants × 60 min) et ~70–110 Go de données diffusées selon la qualité vidéo retenue.

Concrètement, à petit volume (quelques séances par mois), les volumes inclus dans l'abonnement « Ship » absorbent l'essentiel de l'usage : le coût réel par séance reste alors le plus souvent **proche de 0 €** une fois l'abonnement mensuel payé. Le tableau ci-dessus retient une fourchette prudente intégrant la montée en charge.

> À noter : contrairement à un abonnement Zoom payé à l'année quel que soit l'usage, le service vidéo retenu ici se facture **à l'usage réel**. Hors séance, seul l'abonnement mensuel de base court ; aucune minute ni donnée diffusée n'est facturée.
>
> _Tarifs LiveKit Cloud relevés en juin 2026 (palier « Ship » à partir de 50 \$/mois ; dépassements ~0,0005 \$/min de connexion et ~0,12 \$/Go diffusé) ; convertis en euros à titre indicatif et susceptibles d'évoluer._

---

## 11. Conditions

- **Validité du devis** : 30 jours à compter de la date d'émission.
- **Facturation en deux versements égaux** : 50 % (Fonctionnalités, 20 000 € HT) à la commande, exigible à la signature ; 50 % (Livraison, 20 000 € HT) à la recette et remise finale.
- **Règlement** : par virement bancaire, à réception de facture. Délai de paiement : 30 jours.
- **Pénalités de retard** : taux d'intérêt légal en vigueur, plus indemnité forfaitaire de recouvrement de 40 € (art. L441-10 du Code de commerce).
- **Propriété intellectuelle** : le transfert des droits sur le code livré intervient au paiement intégral des sommes dues.
- **Réserve de propriété** : les livrables restent la propriété du prestataire jusqu'au complet paiement.
- Le présent devis est établi sur la base du **PRD Veevre v1.0 du 20 juin 2026** ; toute évolution du périmètre fera l'objet d'un avenant.

---

## 12. Acceptation

Bon pour accord — devis à retourner daté, signé et précédé de la mention manuscrite **« Bon pour accord »**.

| Le client                      | Le prestataire                 |
| ------------------------------ | ------------------------------ |
| Date :                         | Date :                         |
| Nom et qualité du signataire : | Nom et qualité du signataire : |
| Signature :                    | Signature :                    |

---

_Devis établi en euros. Prix fermes pendant la durée de validité indiquée. Document généré à partir du PRD Veevre v1.0._
