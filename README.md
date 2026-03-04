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
| **État du projet** | Version bêta / prototype |
| **Formats principaux** | Texte brut (HTML, Markdown, TXT) |

### Description du projet

Ce dépôt contient les données et les ressources constitutives de l'édition numérique du *Traité des hernies* de Pierre Franco (1561), chirurgien français pionnier de la herniotomie et de la lithotomie. Le projet vise à produire une interface de consultation enrichie du texte, permettant l'accès à la transcription, aux images du document source et aux métadonnées associées.


## Informations méthodologiques

### Conditions et cadre de production

Ce projet a été produit dans le cadre d'un mémoire de recherche présenté en 2025 à l'université de la Sorbonne. 

### Sources et méthodes de collecte

Le texte source est issu d'une numérisation pré-existante. Les données ont été produites selon les méthodes suivantes :

- **Numérisation** : Numérisation Gallica, cote NUMM-206601. 
- **Transcription automatique (OCR/HTR)** : le texte a été produit par reconnaissance automatique de caractères avec Transkribus.
- **Post-correction** : Une relecture manuelle a été effectuée. 
- **Export** : Les transcriptions sont mises à dispositions sur une interface accessible ligne et codée en HTML 5, CSS et JavaScript. Elles sont également disponibles au téléchargement en .txt et .md. 

### Traitement des données

*[Décrire chaque étape de traitement appliquée aux données brutes :]*

1. Récupération des images sources. 
3. Transcription automatique par OCR/HTR Transkribus. 
4. Post-correction manuelle partielle. 
6. Export en formats texte brut : `.txt`, `.md`, `.html`

> ⚠️ **Projet en version bêta.** Les données sont susceptibles d'évoluer. Le taux d'erreur de transcription n'est pas encore définitivement validé. Consulter la section « Vérifications qualité » pour l'état actuel.

> Tout script ou outil utilisé est documenté dans le dossier `scripts/` (voir arborescence ci-dessous).

### Arborescence du dépôt

```
/
├── README.md                      # Ce fichier
├── index.html                     # Index HTML. 
├── style.css                      # Feuille de style CSS. 
├── script.js                      # Script du projet. 
├── assets/downloads/              # Dossier rassemblant les données en format exportable. 
│   │   ├── txt/                   # Transcriptions en texte brut (.txt). 
│   │   ├── markdown/              # Transcriptions en Markdown (.md). 
└──downloads.html                  # Page où sont disponibles les transcriptions exportables. 
├── projet.html                    # Description du projet dans le cadre du mémoire de recherche sur Pierre Franco. 
