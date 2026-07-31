# Brief de développement — Site vitrine ETS (English and Translation Services)

> **Instructions pour l'IA qui exécute ce brief :** construis un site vitrine complet, moderne et responsive à partir de ce document. Respecte strictement la charte graphique décrite (couleurs, typographies, motifs visuels). Utilise le contenu texte fourni tel quel (ne l'invente pas, ne le raccourcis pas) sauf indication contraire. Priorise la vitesse de chargement, l'accessibilité et la conversion (CTA).

---

## 1. Contexte client

**Nom de l'entreprise :** English and Translation Services (ETS)
**Positionnement :** Cabinet de langues basé en Côte d'Ivoire (Abidjan)
**Slogan :** *« Votre passerelle vers une communication mondiale sans frontières »*
**Secteur :** Formation linguistique, traduction certifiée, interprétariat, séjours linguistiques

**Pitch (à utiliser en section "Qui sommes-nous") :**
> Chez English and Translation Services (ETS), nous sommes bien plus qu'un simple cabinet de langues. Basés en Côte d'Ivoire, nous nous positionnons comme un partenaire stratégique pour les particuliers et les entreprises souhaitant briser la barrière de la langue. Grâce à une équipe d'experts certifiés et une approche pédagogique moderne, nous offrons des solutions sur mesure qui allient rigueur académique et immersion pratique. Que ce soit pour une certification internationale ou une conférence de haut niveau, ETS garantit une excellence opérationnelle.

**Notre mission (à utiliser en section dédiée) :**
> Faciliter votre insertion professionnelle et booster votre compétitivité internationale par la maîtrise de l'anglais et d'autres langues stratégiques, tout en assurant une fidélité parfaite dans vos besoins de traduction et d'interprétation.

**Cibles clients (à illustrer avec 3 cartes/profils) :**
- **Étudiants & Jeunes Diplômés** — préparation aux tests (TOEFL, TOEIC, IELTS, GMAT…) et séjours linguistiques
- **Professionnels & Cadres** — entretiens d'embauche, promotions, anglais des affaires
- **Entreprises & Institutions** — interprétation lors de conférences, traduction de documents officiels

---

## 2. Charte graphique (à respecter strictement)

### 2.1 Couleurs
| Rôle | Couleur | Hex approx. |
|---|---|---|
| Vert de marque (primaire, CTA, accents) | Vert lime | `#78B913` (variantes acceptées entre `#7CB518` et `#8CB934`) |
| Bleu de marque (secondaire, titres, blocs) | Bleu royal | `#2F5CAD` (variantes entre `#2E5CAB` et `#1E70B9`) |
| Bleu foncé (texte, fonds sombres) | Navy | `#1B2A44` |
| Fond principal | Blanc | `#FFFFFF` |
| Fond secondaire / sections alternées | Gris très clair | `#F6F7F5` |
| Texte courant | Gris charbon | `#2B2B2B` |
| Ligne décorative topographique | Beige/taupe clair | `#D9CBAE` (opacité réduite, ~15-25%) |

Utiliser le vert et le bleu en **blocs pleins** (bannières, sections CTA) plutôt qu'en petites touches — c'est la signature visuelle du client (voir supports existants). Le blanc reste dominant entre les blocs de couleur.

### 2.2 Typographie
- **Titres (H1, H2, gros chiffres, logo wordmark) :** police sans-serif géométrique et grasse, arrondie — **Poppins** (600/700/800) ou équivalent (Montserrat).
- **Corps de texte :** police sans-serif lisible et neutre — **Inter** (400/500/600/700) ou équivalent (Open Sans).
- Les titres sont toujours en gras, parfois en majuscules pour les intitulés de section courts (« NOS SERVICES », « QUI SOMMES-NOUS ? »).

### 2.3 Logo
- Logo composé d'un **globe stylisé vert** avec une **silhouette humaine bleue** intégrée à gauche, suivi du texte **« E·T·S »** en bleu (grandes lettres séparées par des points), avec la mention **« ENGLISH AND TRANSLATION SERVICES »** en petite typo dessous, sous une ligne de soulignement bleue.
- Le fichier logo existe déjà chez le client en JPG basse résolution (extrait de leurs supports imprimés) — prévoir un placeholder `/assets/logo-ets.svg` à remplacer par la version vectorielle dès qu'elle sera fournie par le client. Ne pas recréer un logo différent.

### 2.4 Éléments graphiques signature (à reproduire en CSS/SVG, pas en images bitmap)
1. **Découpes diagonales** : transitions obliques nettes entre les blocs de couleur (vert → blanc, bleu → blanc), à la manière d'un ruban incliné. Utiliser `clip-path: polygon(...)` en CSS.
2. **Motif topographique** : fines lignes courbes concentriques (courbes de niveau), couleur `#D9CBAE`, placées discrètement dans les coins (haut-gauche, bas-droite) de certaines sections, en arrière-plan, opacité faible. Reproduire en SVG inline.
3. **Photos de personnes réelles** en situation (salle de classe, bureau moderne, poignée de main, personnes avec casque audio en visio) — jamais d'illustrations stylisées ni de stock générique cliché. Coins de photo parfois découpés en diagonale pour s'intégrer aux bandeaux de couleur.
4. **Icônes rondes** : pictogrammes simples (chapeau de diplômé, casque d'interprète, document avec flèche de traduction, globe) dans des cercles à dégradé bleu→vert, utilisés pour illustrer les 4 piliers de services.
5. **Badges/pilules** pour lister les langues proposées (contour bleu, fond blanc, texte bleu, coins très arrondis).
6. **Coches vertes rondes** (✓ blanc sur fond vert) pour toutes les listes d'engagements/avantages.

### 2.5 Ton éditorial
Professionnel, rassurant, orienté "administration/entreprise" mais chaleureux et accessible (marché ivoirien/ouest-africain). Phrases courtes, verbes d'action, mise en avant de la certification et de la validité officielle des traductions.

---

## 3. Objectifs du site

1. Générer des **appels/WhatsApp/emails qualifiés** (formations, devis de traduction, inscription séjours linguistiques).
2. Rassurer sur le **sérieux et l'officialité** des traductions (validité administrations/ambassades/universités).
3. Présenter clairement les **4 familles de services** : Formation, Interprétariat, Traduction, Séjours linguistiques.
4. Permettre une **prise de contact en un clic** depuis n'importe quelle page (téléphone, WhatsApp, email).
5. Être crédible visuellement au niveau des supports imprimés déjà produits par le client (cohérence de marque totale).

---

## 4. Arborescence du site (one-page scrollable + ancre, ou multi-pages — au choix technique, mais garder cette structure de contenu)

1. **Header / Navigation** (sticky au scroll)
2. **Hero** (accroche + CTA principal)
3. **Bandeau de confiance** (langues proposées, chiffres clés si dispo, sinon logos "validité officielle")
4. **Qui sommes-nous** (pitch + mission)
5. **Nos services** (4 piliers : Formation / Interprétariat / Traduction / Séjours linguistiques)
6. **Traduction certifiée — Types de documents** (section détaillée, c'est une offre phare)
7. **Qui accompagnons-nous** (3 profils cibles)
8. **Nos engagements** (bloc bleu, 4 points avec coches)
9. **Programme phare / actualité** (ex: "Holiday, Fun & English" — bloc modulaire réutilisable pour futures offres saisonnières)
10. **Nos centres** (3 adresses + carte si possible)
11. **Témoignages** (placeholder à activer plus tard — prévoir la structure même sans contenu réel pour l'instant)
12. **CTA final / Contact** (formulaire + coordonnées directes)
13. **Footer**

---

## 5. Contenu détaillé par section

### 5.1 Header
- Logo ETS à gauche.
- Menu : Accueil · Services · Traduction certifiée · À propos · Contact
- **CTA bouton dans le header (toujours visible)** : « Nous contacter » (vert plein) → lien direct WhatsApp `https://wa.me/22501718567 77` (retirer espaces) ou ancre `#contact`.

### 5.2 Hero
- **Titre (H1) :** « Votre passerelle vers une communication mondiale sans frontières »
- **Sous-titre :** « Formation en langues, traduction certifiée et interprétariat — par des experts assermentés, à Abidjan. »
- **CTA primaire (bouton vert plein) :** « Demander un devis »
- **CTA secondaire (bouton contour blanc/bleu) :** « Appeler maintenant — +225 05 08 79 22 88 »
- Visuel : photo d'une professionnelle en environnement de bureau moderne (cf. supports existants), avec découpe diagonale verte en arrière-plan.

### 5.3 Langues proposées
Affichage en pilules horizontales : **Français · Anglais · Espagnol · Portugais · Allemand · Chinois**

### 5.4 Qui sommes-nous
Utiliser le pitch de la section 1 ci-dessus. Ajouter une photo (collaboration/équipe, mains jointes ou binôme au bureau).
CTA secondaire discret : « En savoir plus sur nos engagements » → ancre vers section engagements.

### 5.5 Nos services (4 cartes/piliers)

**FORMATION**
- Cours d'Anglais intensifs
- Préparation aux tests internationaux (TOEFL, TOEIC, IELTS, GMAT…)
- Préparation aux entretiens (embauche, visa)
- Formation en Traduction et interprétation
- Cours de Français, Chinois, Espagnol, Allemand
- Séjour linguistique à l'étranger
- *NB : les cours se font en ligne ou en présentiel*

**INTERPRÉTARIAT**
- Interprétation simultanée
- Interprétation consécutive
- Escorte bilingue
- Matériel d'interprétation de conférences (cabine insonorisée, récepteurs, console…)

**TRADUCTION**
- Traduction certifiée de tout type de documents
- Transcription et traduction de vidéos et audios
- Sous-titrage et traduction de vidéos

**SÉJOURS LINGUISTIQUES**
- Partez en immersion totale à l'étranger pour accélérer votre apprentissage et découvrir de nouvelles cultures

Chaque carte : icône ronde dégradé bleu/vert + titre + liste à coches + **micro-CTA** « Demander un renseignement » en lien vers le formulaire de contact avec le service pré-rempli (si formulaire dynamique) ou vers WhatsApp avec message pré-rempli, ex :
`https://wa.me/2250171856777?text=Bonjour, je suis intéressé(e) par vos services de Formation.`
(adapter le texte pré-rempli par carte).

### 5.6 Traduction certifiée — section détaillée
**Titre :** « Besoin d'une traduction certifiée ? »
**Sous-titre :** « Vos documents officiels traduits par des traducteurs assermentés. »

Types de documents (grille 2 colonnes, puce verte) :
- **Actes d'état civil** — Naissance, mariage, décès, divorce
- **Documents d'identité** — CNI, passeport, certificat de nationalité, casier judiciaire, attestation de résidence
- **Documents académiques** — Diplômes, relevés de notes, certificat de scolarité
- **Documents d'entreprise** — Déclaration fiscale d'existence, registre de commerce, bilans comptables, attestation de travail
- **Documents financiers** — Relevés bancaires, fiches de paie, attestation de revenus
- **Documents médicaux** — Assurances, visites médicales, certificats médicaux, ordonnances, arrêt maladie
- **Documents juridiques** — Contrats commerciaux, statuts de société, accord de confidentialité, jugements, assignations, actes notariés

**CTA fort en fin de section (bloc vert plein, pleine largeur) :** « Obtenir un devis de traduction » → formulaire ou WhatsApp.

### 5.7 Qui accompagnons-nous (3 cartes)
1. **Étudiants & Jeunes Diplômés** — Pour la préparation aux tests (TOEFL, TOEIC, etc.) et les séjours linguistiques.
2. **Professionnels & Cadres** — Pour les entretiens d'embauche, les promotions et l'anglais des affaires.
3. **Entreprises & Institutions** — Pour l'interprétation lors de conférences et la traduction de documents officiels.

### 5.8 Nos engagements (bloc bleu plein, texte blanc, coches vertes)
- Validité officielle auprès des administrations, ambassades et universités
- Terminologie précise et systématique
- Confidentialité absolue de vos données personnelles
- Délais rapides adaptés à vos urgences

### 5.9 Programme phare — module réutilisable (exemple actuel : "Holiday, Fun & English")
> Prévoir ce bloc comme un **composant modulaire** (le client lance régulièrement des offres saisonnières), avec :
- Titre accrocheur (ex: « HOLIDAY, FUN & ENGLISH »)
- Accroche (ex: « Des vacances formidables pour maîtriser l'anglais »)
- Pourquoi s'inscrire (liste à coches)
- Qui peut s'inscrire
- Durée / dates
- Lieux
- CTA dédié : « Je m'inscris »

Contenu actuel disponible (à titre d'exemple à intégrer si le client le souhaite, sinon garder le composant vide/générique) :
- Pourquoi s'inscrire : 100% pratique · Apprentissage par les jeux · Immersion totale dans le monde anglophone · Flexible et amusant
- Qui peut s'inscrire : Élèves et étudiants
- Durée : Deux mois
- Début des cours : 15 juin
- Lieux : Angré 22e · Riviera 3 · Yopougon Bel-Air · En ligne

### 5.10 Nos centres
Trois emplacements, avec icône de localisation :
- **Angré 22ème**
- **Riviera 3**
- **Yopougon Bel-Air**

Ajouter note : *« Tous nos cours sont disponibles en présentiel pour une immersion totale ou en ligne pour plus de flexibilité. »*
Intégrer une carte (Google Maps embed) si les adresses précises sont fournies plus tard ; sinon simples cartes avec pin.

### 5.11 Témoignages (placeholder)
Structure de 3 cartes (photo/avatar, nom, fonction, citation, étoiles) — laisser en contenu factice clairement identifiable comme tel dans les commentaires du code, à remplacer par le client.

### 5.12 CTA final / Contact
**Titre :** « Prêt à franchir le pas ? »
**Sous-titre :** « Contactez-nous dès aujourd'hui »

Bloc contact (fond vert plein) avec icônes blanches rondes :
- 📞 Téléphone : **+225 05 08 79 22 88**
- 💬 WhatsApp : **+225 01 71 85 67 77**
- ✉️ Email : **englishandtranslations2023@gmail.com**

Formulaire de contact simple : Nom · Email/Téléphone · Service souhaité (menu déroulant : Formation / Traduction / Interprétariat / Séjour linguistique / Autre) · Message · Bouton « Envoyer ma demande » (vert plein).

### 5.13 Footer
- Logo + slogan
- Liens rapides (mêmes items que le header)
- Coordonnées + adresses des 3 centres
- Icônes réseaux sociaux (placeholders à activer)
- Mentions légales / © année en cours

---

## 6. Stratégie des CTA (Call To Action)

| Emplacement | CTA | Action |
|---|---|---|
| Header (sticky) | "Nous contacter" | Scroll vers `#contact` ou WhatsApp direct |
| Hero | "Demander un devis" (primaire) | Scroll vers formulaire |
| Hero | "Appeler maintenant" (secondaire) | `tel:+22505087922 88` |
| Chaque carte de service | "Demander un renseignement" | WhatsApp pré-rempli par service |
| Section Traduction certifiée | "Obtenir un devis de traduction" | Formulaire pré-filtré sur "Traduction" |
| Section programme phare | "Je m'inscris" | Formulaire pré-filtré sur le programme |
| Footer | Icônes contact directes | tel: / WhatsApp / mailto: |
| Bouton flottant (persistant, mobile + desktop) | Icône WhatsApp verte, coin bas-droit | Ouvre WhatsApp avec message générique pré-rempli |

**Principe :** jamais plus d'un scroll sans un CTA visible. Toujours proposer à la fois une option "rapide" (appel/WhatsApp direct) et une option "réfléchie" (formulaire).

---

## 7. Exigences techniques

- **Responsive mobile-first**, testé sur breakpoints 375px / 768px / 1024px / 1440px.
- **Performance** : images optimisées (WebP), lazy-loading, Lighthouse score cible > 90 sur Performance/Accessibilité/SEO.
- **Stack suggérée** (au choix de l'exécutant selon ses capacités) : HTML/CSS/JS vanilla ou React + Tailwind CSS — dans les deux cas, variables CSS pour la palette de couleurs de la section 2.1 (`--brand-green`, `--brand-blue`, etc.) pour faciliter la maintenance.
- **Accessibilité** : contrastes AA minimum, `alt` descriptifs sur toutes les images, navigation clavier complète, formulaire avec `label` associés.
- **SEO de base** :
  - `<title>` : « ETS — Traduction certifiée, formation en langues et interprétariat à Abidjan »
  - `meta description` reprenant le pitch condensé
  - Balises `h1`-`h2` cohérentes avec la hiérarchie de contenu ci-dessus
  - Données structurées `LocalBusiness` (schema.org) avec les 3 adresses et coordonnées
  - Open Graph tags pour le partage sur réseaux sociaux/WhatsApp
- **Formulaire de contact** : prévoir intégration simple (Formspree, EmailJS, ou endpoint à définir) envoyant vers `englishandtranslations2023@gmail.com`.
- **Multilingue** : contenu en français par défaut ; prévoir la structure pour une bascule FR/EN future (non prioritaire pour la v1).
- **Favicon** et logo à préparer en plusieurs formats (svg, png 512, apple-touch-icon).

---

## 8. Informations de contact (à utiliser exactement telles quelles)

- **Téléphone :** +225 05 08 79 22 88
- **WhatsApp :** +225 01 71 85 67 77
- **Email :** englishandtranslations2023@gmail.com
- **Adresses :** Angré 22ème · Riviera 3 · Yopougon Bel-Air (Abidjan, Côte d'Ivoire)

---

## 9. Ce qui manque encore (à demander au client avant/pendant le développement)

- Logo en haute résolution / format vectoriel (SVG ou AI)
- Photos officielles en haute résolution (les visuels actuels sont issus de flyers imprimés, donc basse résolution une fois extraits)
- Adresses précises (quartier + repère) pour Google Maps
- Contenu réel pour la section Témoignages
- Liens réseaux sociaux actifs (Facebook, Instagram, LinkedIn…) si existants
- Confirmation des tarifs si le client souhaite les afficher (actuellement absents des supports fournis, donc à ne pas inventer)

---

*Fin du brief — document prêt à être transmis tel quel à un outil de génération de code (Gemini, Claude Code, etc.) pour production du site.*
