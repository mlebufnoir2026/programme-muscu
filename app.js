// Logique commune aux pages de séance : affichage des exercices,
// case à cocher avec reset automatique chaque jour, zoom image, barre de progression.

function todayKey() {
  const d = new Date();
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}

function storageKey(seanceId) {
  return "muscu_progress_" + seanceId;
}

function loadChecked(seanceId) {
  const raw = localStorage.getItem(storageKey(seanceId));
  if (!raw) return [];
  try {
    const data = JSON.parse(raw);
    if (data.date !== todayKey()) return []; // nouveau jour -> reset auto
    return data.checked || [];
  } catch (e) {
    return [];
  }
}

function saveChecked(seanceId, checkedArray) {
  localStorage.setItem(
    storageKey(seanceId),
    JSON.stringify({ date: todayKey(), checked: checkedArray })
  );
}

function renderSeance(seanceId) {
  const seance = PROGRAMME[seanceId];
  if (!seance) return;

  document.getElementById("seance-titre").textContent = seance.titre;
  document.getElementById("seance-soustitre").textContent = seance.sousTitre;
  document.title = seance.titre + " – Programme Muscu";

  const list = document.getElementById("exo-list");
  const checked = new Set(loadChecked(seanceId));

  function updateProgress() {
    const total = seance.exercices.length;
    const done = checked.size;
    const pct = total ? Math.round((done / total) * 100) : 0;
    document.getElementById("progress-fill").style.width = pct + "%";
    document.getElementById("progress-label").textContent = done + " / " + total + " terminés";
  }

  seance.exercices.forEach(function (exo, i) {
    const card = document.createElement("div");
    card.className = "exo-card" + (checked.has(i) ? " done" : "");

    const img = document.createElement("img");
    img.src = exo.image;
    img.alt = exo.machine;
    img.addEventListener("click", function () {
      openLightbox(exo.image, exo.machine);
    });

    const body = document.createElement("div");
    body.className = "exo-body";

    const head = document.createElement("div");
    head.className = "exo-head";

    const texts = document.createElement("div");
    const nom = document.createElement("p");
    nom.className = "exo-nom";
    nom.textContent = exo.nom;
    const machine = document.createElement("p");
    machine.className = "exo-machine";
    machine.textContent = exo.machine;
    texts.appendChild(nom);
    texts.appendChild(machine);

    const checkbox = document.createElement("button");
    checkbox.className = "checkbox";
    checkbox.setAttribute("aria-label", "Marquer comme fait");
    checkbox.textContent = "✓";
    checkbox.addEventListener("click", function () {
      if (checked.has(i)) {
        checked.delete(i);
        card.classList.remove("done");
      } else {
        checked.add(i);
        card.classList.add("done");
      }
      saveChecked(seanceId, Array.from(checked));
      updateProgress();
    });

    head.appendChild(texts);
    head.appendChild(checkbox);

    const desc = document.createElement("p");
    desc.className = "exo-desc";
    desc.textContent = exo.description;

    const meta = document.createElement("div");
    meta.className = "exo-meta";
    meta.innerHTML =
      "<span>" + exo.series + "</span>" +
      "<span>Repos " + exo.repos + "</span>" +
      "<span>" + exo.poids + "</span>";

    body.appendChild(head);
    body.appendChild(desc);
    body.appendChild(meta);

    card.appendChild(img);
    card.appendChild(body);
    list.appendChild(card);
  });

  updateProgress();

  document.getElementById("reset-btn").addEventListener("click", function () {
    checked.clear();
    saveChecked(seanceId, []);
    document.querySelectorAll(".exo-card").forEach(function (c) {
      c.classList.remove("done");
    });
    updateProgress();
  });
}

function openLightbox(src, alt) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  img.alt = alt;
  lb.classList.add("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const lb = document.getElementById("lightbox");
  if (lb) {
    lb.addEventListener("click", function () {
      lb.classList.remove("open");
    });
  }
});
