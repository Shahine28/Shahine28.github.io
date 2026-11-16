# MEMORY

Notes de session : décisions, choses à savoir, erreurs à ne pas refaire.

## Décisions (migration, novembre 2026)

- Plateforme : GitHub Pages, dépôt public `Shahine28/Shahine28.github.io`, construit avec Astro. Pas de nom de domaine pour l'instant.
- Site en anglais uniquement. Les textes du site myportfolio sont la référence. Le Google Doc « Portefolio » (en français) est un ancien brouillon qui ne couvre que 8 projets.
- Structure identique à l'ancien site : Home (3 projets mis en avant + hero vidéo), Games (grille), About Me. Le design reste proche de l'ancien, la refonte se fera plus tard sur `GP/Redesign`.
- GIF convertis en MP4 en boucle (1,6 Go de médias ramenés à environ 140 Mo). Trailers sur YouTube en non répertorié, mis en ligne par le propriétaire.
- C'est Claude qui fait la mise en page des nouveaux projets (skill `/add-project`), le propriétaire valide.
- Pas de branche `Dev` : `main` = en ligne, une branche `GP/...` par chantier.

## Sauvegardes

- Sauvegarde complète du site myportfolio : `C:\Cours_Backup\Cours_IIM\Annee_2\PorteFolio\_myportfolio_backup` (HTML brut, `data.json` par page, images en pleine résolution, `_videos/` avec les 12 vidéos Adobe en qualité maximale).
- Médias sources d'origine (GIF, rushs, projets Premiere) : `C:\Cours_Backup\Cours_IIM\Annee_2\PorteFolio\<Projet>`.

## Points en attente

- Trailers : seuls UMAI et Night Shift ont un id YouTube. Les 12 autres attendent l'upload (fichiers dans `_myportfolio_backup/_videos/`).
- Purina : la liste Tasks est un copier-coller de celle de Hellcooker sur l'ancien site, à réécrire avec le propriétaire.
- About Me et CV datent de 2024-2025 (stage « early 2025 », CV qui pointe vers l'URL myportfolio morte), à mettre à jour.

## À ne pas refaire

- `logo.psd` dans le dossier Année 2 n'est pas un logo perso, c'est la couverture de Synaptik. Le favicon est un monogramme « SB » fait main.
- Les modules `tree` de myportfolio dupliquent leurs enfants : ne pas compter leurs images deux fois.
- `window.scrollTo` est en défilement doux (`scroll-behavior: smooth`) : pour une capture, utiliser `behavior: 'instant'` et attendre que les images lazy soient chargées.
