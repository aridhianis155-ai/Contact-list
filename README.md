# ContactList

ContactList est une application web de gestion de contacts construite avec React et Vite. Elle permet de conserver un carnet d’adresses dans le navigateur, de rechercher et trier les contacts, et de les ajouter, modifier ou supprimer.

## Fonctionnalités

- Affichage des contacts sous forme de fiches avec photo, nom, adresse e-mail et téléphone.
- Ajout d’un contact à l’aide du formulaire.
- Modification d’un contact existant : sélectionner **Edit** sur sa fiche, modifier les champs, puis valider le formulaire.
- Suppression d’un contact après confirmation.
- Recherche par nom complet.
- Tri alphabétique croissant (**A à Z**) ou décroissant (**Z à A**).
- Notification temporaire après l’ajout ou la modification d’un contact.
- Sauvegarde automatique dans le stockage local du navigateur (`localStorage`).
- Mise en page adaptée aux écrans mobiles et aux grands écrans.

## Technologies

- React 19
- Vite
- React-Bootstrap et Bootstrap
- JavaScript (modules ES)
- CSS

## Prérequis

- Node.js et npm installés.
- Un navigateur web récent.

## Installation et démarrage

Dans un terminal, à la racine du projet :

```bash
npm install
npm run dev
```

Vite affiche l’adresse locale à ouvrir dans le navigateur, généralement `http://localhost:5173`.

## Commandes disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Démarre le serveur de développement avec rechargement à chaud. |
| `npm run build` | Génère la version de production dans le dossier `dist/`. |
| `npm run preview` | Sert localement la version générée après le build. |
| `npm run lint` | Analyse le code avec ESLint. |

Pour vérifier la version de production :

```bash
npm run build
npm run preview
```

## Utilisation

### Ajouter un contact

1. Remplir le formulaire **Ajouter un contact**.
2. Indiquer le nom complet, une adresse e-mail valide, un numéro de téléphone et une URL d’image.
3. Cliquer sur **Ajouter un contact**.
4. Une notification confirme l’ajout.

Tous les champs sont actuellement obligatoires. L’image doit être accessible via une URL.

### Modifier un contact

1. Cliquer sur **Edit** dans la fiche du contact.
2. Modifier les champs dans le formulaire, qui est prérempli.
3. Cliquer sur **Modifier le contact**.
4. Une notification confirme la modification.

### Rechercher et trier

- La recherche filtre les contacts à partir de leur nom complet.
- Le menu de tri propose **Nom : A à Z** et **Nom : Z à A**.

### Supprimer un contact

Cliquer sur **Supprimer** puis confirmer la suppression dans la boîte de dialogue du navigateur.

## Stockage des données

Les contacts sont enregistrés dans `localStorage` sous la clé `contacts`. Les modifications restent disponibles dans le même navigateur après rechargement de la page, mais ne sont pas synchronisées entre différents navigateurs ou appareils.

Au premier lancement, les contacts de démonstration définis dans `src/data/contact.js` sont utilisés. Si des données sont déjà présentes dans `localStorage`, elles sont chargées à la place.

Pour réinitialiser les données de démonstration, supprimer la clé `contacts` depuis les outils de développement du navigateur (Application/Stockage > Stockage local), puis recharger la page.

## Structure du projet

```text
src/
├── App.jsx                  # État principal, tri, persistance et assemblage de l’interface
├── App.css                  # Styles de la page et des composants
├── index.css                # Styles globaux
├── main.jsx                 # Point d’entrée React
├── components/
│   ├── ContactForm.jsx      # Formulaire d’ajout et de modification
│   ├── Contactcard.jsx     # Fiche individuelle et actions du contact
│   ├── Contactliste.jsx    # Filtrage et affichage des fiches
│   └── SearchBar.jsx       # Champ de recherche
└── data/
    └── contact.js          # Contacts de démonstration
```

## Format d’un contact

Chaque contact utilise les propriétés suivantes :

| Propriété | Description |
| --- | --- |
| `id` | Identifiant unique du contact. |
| `fullName` | Nom complet. |
| `email` | Adresse e-mail. |
| `phoneNumber` | Numéro de téléphone. |
| `image` | URL de la photo. |

## Développement

Le composant `App.jsx` centralise l’état de l’application et le transmet aux composants d’interface via leurs propriétés. `ContactForm.jsx` gère les valeurs du formulaire et distingue l’ajout de la modification selon la présence d’un contact sélectionné. Les styles de la liste et du formulaire se trouvent dans `App.css`.
