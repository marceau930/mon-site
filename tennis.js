const joueurs = [
    {
        nom: "Margaret Court",
        pays: "🇦🇺 Australie",
        titres: 24,
        genre: "femme",
        photo: "margaret.png",
        texte: "24 titres : 11 Open d'Australie, 5 Roland-Garros, 3 Wimbledon et 5 US Open."
    },
    {
        nom: "Novak Djokovic",
        pays: "🇷🇸 Serbie",
        titres: 24,
        genre: "homme",
        photo: "djocko.jpg",
        texte: "24 titres : 10 Open d'Australie, 4 Roland-Garros, 7 Wimbledon et 3 US Open."
    },
    {
        nom: "Serena Williams",
        pays: "🇺🇸 États-Unis",
        titres: 23,
        genre: "femme",
        photo: "serena.avif",
        texte: "23 titres : 7 Open d'Australie, 3 Roland-Garros, 7 Wimbledon et 6 US Open."
    },
    {
        nom: "Steffi Graf",
        pays: "🇩🇪 Allemagne",
        titres: 22,
        genre: "femme",
        photo: "steffi.jpg",
        texte: "22 titres : 4 Open d'Australie, 6 Roland-Garros, 7 Wimbledon et 5 US Open."
    },
    {
        nom: "Rafael Nadal",
        pays: "🇪🇸 Espagne",
        titres: 22,
        genre: "homme",
        photo: "nadal.png",
        texte: "22 titres : 2 Open d'Australie, 14 Roland-Garros, 2 Wimbledon et 4 US Open."
    },
    {
        nom: "Roger Federer",
        pays: "🇨🇭 Suisse",
        titres: 20,
        genre: "homme",
        photo: "roger.png",
        texte: "20 titres : 6 Open d'Australie, 1 Roland-Garros, 8 Wimbledon et 5 US Open."
    },
    {
        nom: "Martina Navratilova",
        pays: "🇺🇸 États-Unis",
        titres: 18,
        genre: "femme",
        photo: "navratilova.jpg",
        texte: "18 titres : 3 Open d'Australie, 2 Roland-Garros, 9 Wimbledon et 4 US Open."
    },
    {
        nom: "Pete Sampras",
        pays: "🇺🇸 États-Unis",
        titres: 14,
        genre: "homme",
        photo: "sampras.png",
        texte: "14 titres : 2 Open d'Australie, 7 Wimbledon et 5 US Open."
    },
    {
        nom: "Björn Borg",
        pays: "🇸🇪 Suède",
        titres: 11,
        genre: "homme",
        photo: "blorn.jpg",
        texte: "11 titres : 6 Roland-Garros et 5 Wimbledon."
    },
    {
        nom: "Andre Agassi",
        pays: "🇺🇸 États-Unis",
        titres: 8,
        genre: "homme",
        photo: "andre.jpg",
        texte: "8 titres : 4 Open d'Australie, 1 Roland-Garros, 1 Wimbledon et 2 US Open."
    }
];

const zone = document.querySelector("#classement");

function afficherJoueurs(liste) {
    zone.innerHTML = "";

    liste.forEach(function(j) {
        let ligne = document.createElement("div");
        ligne.className = "ligne";

        let interieur = document.createElement("div");
        interieur.className = "carte-interieur";

        let avant = document.createElement("div");
        avant.className = "carte-avant";

        let photo = document.createElement("img");
        photo.src = j.photo;
        photo.alt = j.nom;

        let nom = document.createElement("h3");
        nom.textContent = j.nom;

        let pays = document.createElement("p");
        pays.textContent = j.pays;

        let titres = document.createElement("p");
        titres.textContent = j.titres + " titres du Grand Chelem";

        let boutonAvant = document.createElement("button");
        boutonAvant.textContent = "Voir le palmarès";

        boutonAvant.onclick = function() {
            ligne.classList.add("retournee");
        };

        avant.appendChild(photo);
        avant.appendChild(nom);
        avant.appendChild(pays);
        avant.appendChild(titres);
        avant.appendChild(boutonAvant);

        let arriere = document.createElement("div");
        arriere.className = "carte-arriere";

        let titreArriere = document.createElement("h3");
        titreArriere.textContent = "🏆 Palmarès";

        let texte = document.createElement("p");
        texte.textContent = j.texte;

        let boutonArriere = document.createElement("button");
        boutonArriere.textContent = "Retour";

        boutonArriere.onclick = function() {
            ligne.classList.remove("retournee");
        };

        arriere.appendChild(titreArriere);
        arriere.appendChild(texte);
        arriere.appendChild(boutonArriere);

        interieur.appendChild(avant);
        interieur.appendChild(arriere);
        ligne.appendChild(interieur);
        zone.appendChild(ligne);
    });
}

afficherJoueurs(joueurs);

let boutons = document.querySelectorAll(".filtre");

boutons.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        let genre = bouton.dataset.genre;

        if (genre === "tous") {
            afficherJoueurs(joueurs);
        } else {
            let selection = joueurs.filter(function(j) {
                return j.genre === genre;
            });

            afficherJoueurs(selection);
        }
    });
});

