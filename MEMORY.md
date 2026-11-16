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

- CV : `public/resume.pdf` vient du design Canva « Shahine Benthanane - CV English 2026 » (id `DAHbEjGMHz0`), copie anglaise du CV bleu français (id `DAHbEgsdX_o`, dossier « Ami de Florent Jin »). Pas de numéro de téléphone (retiré à la demande du propriétaire).

## Publication

- Site en ligne depuis le 16/11/2026 : https://shahine28.github.io (dépôt public `Shahine28/Shahine28.github.io`, Pages en mode GitHub Actions).
- Sur ce PC, `git push` échoue en HTTPS (« unable to get local issuer certificate »). Pousser avec le magasin de certificats Windows et l'identification gh :
  `git -c http.sslBackend=schannel -c credential.helper= -c "credential.helper=!'C:/Program Files/GitHub CLI/gh.exe' auth git-credential" push`
- `gh` n'est pas dans le PATH du shell Bash : ajouter `C:/Program Files/GitHub CLI` au PATH ou appeler `gh.exe` par son chemin.

## CV Canva : pièges

- Remplacer du texte à cheval sur plusieurs segments (gras, lien) mélange les styles et les liens : toujours remplacer à l'intérieur d'un seul segment.
- L'outil ne change un lien que sur un bloc entier. Le lien du site a été corrigé à la main dans Canva par le propriétaire (16/11/2026) : l'export PDF pointe directement vers `https://shahine28.github.io/`, plus de correction pdf-lib nécessaire. Vérifier quand même les liens après chaque export.
- Les icônes « équipe » à côté des projets sont des images à position fixe : si le texte change de longueur, les redéplacer.
- Même chose pour les logos moteurs (C#, Unity, C++, Unreal) sous « Blender » dans Skills : la liste doit garder le même nombre de lignes, sinon les logos cachent une compétence. C'est pour ça que la ligne s'écrit « Game Programming (Unity, Unreal Engine 5, Godot) / Git » (2 lignes).
- `public/resume.pdf` et `src/assets/resume-preview.png` (export PNG 1654 px) se remplacent toujours ensemble.

## Situation du propriétaire (novembre 2026)

- M2 Game Programming à l'IIM, diplôme début juillet 2027.
- Alternance Gameplay Programmer Assistant chez Ketchapp (Ubisoft) depuis septembre 2026, jusqu'à fin août 2027.
- Recherche : CDI Gameplay Programmer à partir de septembre 2027, Paris / Île-de-France ou télétravail.
- Projet de fin d'études sous Godot en cours : rester vague sur le site.
- Contact public : `shahine.benthanane@gmail.com` uniquement, pas de numéro de téléphone sur le site.

## À ne pas refaire

- `logo.psd` dans le dossier Année 2 n'est pas un logo perso, c'est la couverture de Synaptik. Le favicon est un monogramme « SB » fait main.
- Les modules `tree` de myportfolio dupliquent leurs enfants : ne pas compter leurs images deux fois.
- `window.scrollTo` est en défilement doux (`scroll-behavior: smooth`) : pour une capture, utiliser `behavior: 'instant'` et attendre que les images lazy soient chargées.
