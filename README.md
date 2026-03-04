# Interface numérique du *Traité des hernies* de Pierre Franco

> Ce fichier README a été généré le 2026-03-04 par Lou Deplus.  
> Dernière mise à jour : 2026-03-04

---

## Informations générales

| Champ | Valeur |
|---|---|
| **Titre** | Interface numérique du *Traité des hernies* de Pierre Franco |
| **DOI** | [10.5281/zenodo.18863333](https://doi.org/10.5281/zenodo.18863333) |
| **Contact** | loudeplus@proton.me |
| **Auteur du dépôt** | Lou Deplus |
| **Langue des données** | Français (moyen français, XVIe s.) |
| **Licence** | *[À préciser — ex. CC BY 4.0]* |
| **État du projet** | Version bêta / prototype |
| **Formats principaux** | HTML, Markdown (.md), Texte brut (.txt) |

### Description du projet

Ce dépôt contient les données et les ressources constitutives de l'édition numérique du *Traité des hernies* de Pierre Franco (1561), chirurgien français pionnier de la herniotomie et de la lithotomie. Le projet vise à produire une interface de consultation enrichie du texte, permettant l'accès à la transcription, aux images du document source et aux métadonnées associées.

Ce projet a été produit dans le cadre d'un mémoire de recherche présenté en 2025 à l'université de la Sorbonne.

---

## Informations méthodologiques

### Conditions et cadre de production

Ce projet est issu d'un mémoire de recherche soutenu en 2025 à l'université de la Sorbonne. Il s'inscrit dans une démarche d'édition numérique de sources médicales de l'époque moderne, visant à rendre accessibles des textes peu diffusés dans leur version numérique enrichie.

### Sources et méthodes de collecte

Le texte source est issu d'une numérisation préexistante. Les données ont été produites selon les méthodes suivantes :

- **Numérisation** : numérisation Gallica, cote NUMM-206601 (Bibliothèque nationale de France). Les images sont accessibles librement via le portail [gallica.bnf.fr](https://gallica.bnf.fr).
- **Transcription automatique (OCR/HTR)** : le texte a été produit par reconnaissance automatique de caractères à l'aide de [Transkribus](https://readcoop.eu/transkribus/). 
- **Post-correction** : une relecture manuelle partielle a été effectuée sur la transcription produite automatiquement.
- **Export et diffusion** : les transcriptions sont mises à disposition sur une interface accessible en ligne, codée en HTML5, CSS et JavaScript. Elles sont également disponibles au téléchargement en `.txt` et `.md`.

### Traitement des données

Les étapes de traitement appliquées aux données brutes sont les suivantes :

1. Récupération des images sources depuis Gallica (cote NUMM-206601).
2. Transcription automatique par HTR via Transkribus.
3. Post-correction manuelle partielle de la transcription.
4. Export en formats texte brut : `.txt`, `.md`, `.html`.

> ⚠️ **Projet en version bêta.** Les données sont susceptibles d'évoluer. Le taux d'erreur de transcription n'est pas encore définitivement validé. Consulter la section « Vérifications qualité » pour l'état actuel.

### Vérifications qualité

*[Préciser les contrôles effectués — ex. : estimation du CER sur un échantillon de pages, relecture humaine sur X folios, comparaison avec une édition imprimée de référence, etc.]*

### Logiciels et dépendances

| Outil | Version | Usage |
|---|---|---|
| Transkribus | *[x.x]* | Transcription HTR |
| HTML5 / CSS / JavaScript | — | Interface de consultation en ligne |
| *[ex. Pandoc]* | *[x.x]* | Conversion entre formats (MD → TXT / HTML) |

---

## Aperçu des données et fichiers

### Convention de nommage

*[Décrire la logique de nommage des fichiers de transcription — ex. un fichier par chapitre, nommé `franco_chap01.txt`, etc.]*

### Arborescence du dépôt

```
/
├── README.md                      # Ce fichier
├── index.html                     # Page d'accueil de l'interface
├── style.css                      # Feuille de style CSS
├── script.js                      # Script JavaScript du projet
├── downloads.html                 # Page de téléchargement des transcriptions
├── projet.html                    # Description du projet et du mémoire de recherche
└── assets/
    └── downloads/
        ├── txt/                   # Transcriptions en texte brut (.txt)
        └── markdown/              # Transcriptions en Markdown (.md)
```

---

## Informations spécifiques aux données

### Fichiers de transcription

Les transcriptions sont distribuées en trois formats complémentaires :

| Format | Extension | Usage recommandé |
|---|---|---|
| HTML | `.html` | Consultation via l'interface en ligne |
| Markdown | `.md` | Lecture humaine, réutilisation légère |
| Texte brut | `.txt` | Traitement automatique, indexation, NLP |


## Réutilisation et citation

Si vous utilisez ces données dans vos travaux, merci de citer ce dépôt :

> Deplus, Lou. (2026). *Interface numérique du Traité des hernies de Pierre Franco*. Zenodo. https://doi.org/10.5281/zenodo.18863333

Ce projet est issu du mémoire de recherche suivant :

> Deplus, Lou. (2025). *[Faire profession chirurgicale au XVIème siècle : Le Traité des hernies, manifeste des empiriques ?]*. Sorbonne Université. 

---
