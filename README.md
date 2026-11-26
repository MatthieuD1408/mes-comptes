# Mes comptes

Appli de suivi de budget mensuel : revenus du mois, charges fixes (avec un montant par mois), dépenses variables, vue sur 12 mois et export Excel.

Les données restent sur le téléphone (stockage local du navigateur). Aucun compte, aucun serveur.

## Installer sur le téléphone

- **iPhone (Safari)** : ouvrir le lien, bouton Partager, puis « Sur l'écran d'accueil ».
- **Android (Chrome)** : ouvrir le lien, menu ⋮, puis « Installer l'application » ou « Ajouter à l'écran d'accueil ».

Une fois installée, l'appli s'ouvre en plein écran et fonctionne sans connexion.

## Sauvegarde

Réglages (engrenage) : copier le texte de sauvegarde pour le garder, ou le coller pour restaurer. L'onglet Année permet d'exporter un classeur Excel.

## Fichiers

- `index.html` : toute l'appli
- `sw.js` : fonctionnement hors connexion
- `manifest.webmanifest` et `icons/` : installation sur l'écran d'accueil
- `vendor/exceljs.min.js` : génération du fichier Excel (ExcelJS, licence MIT)
