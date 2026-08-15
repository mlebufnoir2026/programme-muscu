// Données du programme. Modifie ce fichier pour changer les séances,
// ajuster les poids, les séries, etc. Chaque fichier HTML de séance
// va chercher ses exercices ici via la clé "A", "B" ou "C".

const PROGRAMME = {
  A: {
    titre: "Séance A",
    sousTitre: "Haut du corps complet",
    exercices: [
      {
        nom: "Chest Press",
        machine: "Chest Press",
        image: "images/chest-press.png",
        description: "Assis, poignées devant la poitrine, pousser vers l'avant.",
        poids: "À calibrer",
        series: "3 × 8–12",
        repos: "90 sec"
      },
      {
        nom: "Tirage horizontal",
        machine: "Seated Row",
        image: "images/seated-row.png",
        description: "Assis, tirer les poignées vers le ventre / torse.",
        poids: "À calibrer",
        series: "3 × 8–12",
        repos: "90 sec"
      },
      {
        nom: "Développé épaules",
        machine: "Shoulder Press",
        image: "images/shoulder-press.png",
        description: "Assis, pousser les poignées au-dessus de la tête.",
        poids: "À calibrer",
        series: "2 × 8–12",
        repos: "90 sec"
      },
      {
        nom: "Tirage vertical",
        machine: "Lat Pulldown",
        image: "images/lat-pulldown.png",
        description: "Tirer la barre vers le haut de la poitrine.",
        poids: "À calibrer",
        series: "2 × 8–12",
        repos: "90 sec"
      },
      {
        nom: "Curl biceps",
        machine: "Poulie basse + barre ou poignée",
        image: "images/poulie-basse.png",
        description: "Coudes fixes, ramener les avant-bras vers soi.",
        poids: "À calibrer",
        series: "2 × 10–15",
        repos: "60 sec"
      },
      {
        nom: "Extension triceps",
        machine: "Poulie haute + corde",
        image: "images/poulie-haute-corde.png",
        description: "Coudes contre le corps, pousser la corde vers le bas.",
        poids: "À calibrer",
        series: "2 × 10–15",
        repos: "60 sec"
      }
    ]
  },

  B: {
    titre: "Séance B",
    sousTitre: "Haut du corps + jambes",
    exercices: [
      {
        nom: "Chest Press inclinée",
        machine: "Incline Chest Press",
        image: "images/presse-inclinee.png",
        description: "Pousser les poignées vers l'avant et légèrement vers le haut.",
        poids: "À calibrer",
        series: "3 × 8–12",
        repos: "90 sec"
      },
      {
        nom: "Tirage vertical",
        machine: "Lat Pulldown",
        image: "images/lat-pulldown.png",
        description: "Tirer la barre vers le haut de la poitrine.",
        poids: "À calibrer",
        series: "3 × 8–12",
        repos: "90 sec"
      },
      {
        nom: "Élévations latérales",
        machine: "Lateral Raise ou haltères",
        image: "images/lateral-raise.png",
        description: "Bras montés latéralement jusqu'aux épaules.",
        poids: "Léger",
        series: "2 × 12–15",
        repos: "60 sec"
      },
      {
        nom: "Tirage horizontal",
        machine: "Seated Row",
        image: "images/seated-row.png",
        description: "Tirer les poignées vers le ventre.",
        poids: "À calibrer",
        series: "2 × 8–12",
        repos: "90 sec"
      },
      {
        nom: "Presse à jambes",
        machine: "Leg Press",
        image: "images/leg-press.png",
        description: "Pieds sur la plateforme, repousser celle-ci avec les jambes.",
        poids: "À calibrer",
        series: "2 × 10–15",
        repos: "90 sec"
      },
      {
        nom: "Leg Curl",
        machine: "Leg Curl",
        image: "images/leg-curl.png",
        description: "Replier les jambes contre la résistance pour travailler l'arrière des cuisses.",
        poids: "À calibrer",
        series: "2 × 10–15",
        repos: "60–90 sec"
      }
    ]
  },

  C: {
    titre: "Séance C",
    sousTitre: "Pecs / épaules / bras",
    exercices: [
      {
        nom: "Pec Deck",
        machine: "Pec Deck / Butterfly",
        image: "images/pec-deck.png",
        description: "Bras ouverts, rapprocher les poignées devant la poitrine.",
        poids: "À calibrer",
        series: "3 × 10–15",
        repos: "60–90 sec"
      },
      {
        nom: "Tirage horizontal ou vertical",
        machine: "Seated Row ou Lat Pulldown",
        image: "images/seated-row.png",
        description: "Mouvement de tirage pour travailler le dos.",
        poids: "À calibrer",
        series: "3 × 8–12",
        repos: "90 sec"
      },
      {
        nom: "Développé épaules",
        machine: "Shoulder Press",
        image: "images/shoulder-press.png",
        description: "Pousser les poignées au-dessus de la tête.",
        poids: "À calibrer",
        series: "2 × 8–12",
        repos: "90 sec"
      },
      {
        nom: "Élévations latérales",
        machine: "Lateral Raise ou haltères",
        image: "images/lateral-raise.png",
        description: "Bras montés latéralement jusqu'aux épaules.",
        poids: "Léger",
        series: "2 × 12–15",
        repos: "60 sec"
      },
      {
        nom: "Curl biceps",
        machine: "Poulie basse",
        image: "images/poulie-basse.png",
        description: "Coudes fixes, ramener les avant-bras vers soi.",
        poids: "À calibrer",
        series: "2 × 10–15",
        repos: "60 sec"
      },
      {
        nom: "Extension triceps",
        machine: "Poulie haute + corde",
        image: "images/poulie-haute-corde.png",
        description: "Coudes fixes, pousser la corde vers le bas.",
        poids: "À calibrer",
        series: "2 × 10–15",
        repos: "60 sec"
      }
    ]
  }
};
