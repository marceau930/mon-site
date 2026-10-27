
const joueurs = [
    {
        nom: "Jack Nicklaus",
        pays: "🇺🇸 États-Unis",
        titres: "18 titres majeurs",
        page: "Jack Nicklaus",
        texte: "Le joueur qui possède le plus de victoires dans les tournois majeurs masculins. Il a notamment remporté six fois le Masters."
    },
    {
        nom: "Tiger Woods",
        pays: "🇺🇸 États-Unis",
        titres: "15 titres majeurs",
        page: "Tiger Woods",
        texte: "Une légende du golf moderne. Il est connu pour sa puissance, sa précision et ses grandes victoires."
    },
    {
        nom: "Gary Player",
        pays: "🇿🇦 Afrique du Sud",
        titres: "9 titres majeurs",
        page: "Gary Player",
        texte: "Un champion international qui a remporté les quatre grands tournois masculins au cours de sa carrière."
    },
    {
        nom: "Ben Hogan",
        pays: "🇺🇸 États-Unis",
        titres: "9 titres majeurs",
        page: "Ben Hogan",
        texte: "Un joueur historique, célèbre pour la précision de son swing et sa technique exceptionnelle."
    },
    {
        nom: "Arnold Palmer",
        pays: "🇺🇸 États-Unis",
        titres: "7 titres majeurs",
        page: "Arnold Palmer",
        texte: "Un champion très populaire qui a contribué à faire connaître le golf à un large public."
    },
    {
        nom: "Rory McIlroy",
        pays: "🇬🇧 Irlande du Nord",
        titres: "6 titres majeurs",
        page: "Rory McIlroy",
        texte: "Un grand champion moderne, réputé pour la puissance de son jeu. Il a remporté les quatre grands tournois masculins."
    },
    {
        nom: "Annika Sörenstam",
        pays: "🇸🇪 Suède",
        titres: "10 titres majeurs",
        page: "Annika Sörenstam",
        texte: "L'une des plus grandes championnes du golf féminin, connue pour sa régularité et sa domination sur le circuit."
    },
    {
        nom: "Mickey Wright",
        pays: "🇺🇸 États-Unis",
        titres: "13 titres majeurs",
        page: "Mickey Wright",
        texte: "Une légende du golf féminin, reconnue pour la qualité de son swing et son immense palmarès."
    }
];

const competitions = [
    {
        nom: "The Masters",
        icone: "🟢",
        categorie: "Tournoi majeur",
        lieu: "Augusta, États-Unis",
        texte: "Un tournoi mythique disputé à Augusta National. Le vainqueur reçoit la célèbre veste verte."
    },
    {
        nom: "U.S. Open",
        icone: "🏆",
        categorie: "Tournoi majeur",
        lieu: "États-Unis",
        texte: "Un tournoi réputé pour ses parcours très exigeants et ses conditions de jeu difficiles."
    },
    {
        nom: "The Open Championship",
        icone: "🏴",
        categorie: "Tournoi majeur",
        lieu: "Royaume-Uni",
        texte: "Le plus ancien des quatre tournois majeurs masculins. Il se joue souvent sur des parcours côtiers appelés links."
    },
    {
        nom: "PGA Championship",
        icone: "🥇",
        categorie: "Tournoi majeur",
        lieu: "États-Unis",
        texte: "L'un des quatre grands rendez-vous du golf masculin professionnel, disputé chaque année."
    },
    {
        nom: "Ryder Cup",
        icone: "🇪🇺",
        categorie: "Compétition par équipes",
        lieu: "Europe contre États-Unis",
        texte: "Une compétition spectaculaire où les meilleurs golfeurs européens affrontent ceux des États-Unis."
    },
    {
        nom: "Solheim Cup",
        icone: "⛳",
        categorie: "Compétition féminine",
        lieu: "Europe contre États-Unis",
        texte: "La grande compétition par équipes du golf féminin, organisée entre l'Europe et les États-Unis."
    }
];

const parcours = [
    {
        nom: "Royal County Down",
        pays: "🇬🇧 Irlande du Nord",
        page: "Royal County Down Golf Club",
        texte: "Un parcours côtier spectaculaire, célèbre pour ses dunes, ses bunkers et ses vues sur les montagnes de Mourne."
    },
    {
        nom: "Old Course de St Andrews",
        pays: "🏴 Écosse",
        page: "Old Course at St Andrews",
        texte: "Un parcours historique considéré comme le berceau du golf. Son pont Swilcan est devenu une image emblématique du sport."
    },
    {
        nom: "Augusta National",
        pays: "🇺🇸 Géorgie, États-Unis",
        page: "Augusta National Golf Club",
        texte: "Le parcours du Masters, célèbre pour ses fleurs, ses pins et ses trous mythiques."
    },
    {
        nom: "Pebble Beach",
        pays: "🇺🇸 Californie, États-Unis",
        page: "Pebble Beach Golf Links",
        texte: "Un parcours magnifique situé au bord de l'océan Pacifique, régulièrement associé à de grands tournois."
    },
    {
        nom: "Pine Valley",
        pays: "🇺🇸 New Jersey, États-Unis",
        page: "Pine Valley Golf Club",
        texte: "Un parcours réputé pour sa difficulté, ses bunkers impressionnants et son tracé exigeant."
    },
    {
        nom: "TPC Sawgrass",
        pays: "🇺🇸 Floride, États-Unis",
        page: "TPC at Sawgrass",
        texte: "Le parcours du Players Championship, connu pour son célèbre 17e trou avec un green entouré d'eau."
    }
];

function chargerPhoto(page, image) {
    const adresse = "https://en.wikipedia.org/api/rest_v1/page/summary/"
        + encodeURIComponent(page);

    fetch(adresse)
        .then(reponse => reponse.json())
        .then(donnees => {
            if (donnees.thumbnail && donnees.thumbnail.source) {
                image.onload = function() {
                    image.style.display = "block";
                };

                image.src = donnees.thumbnail.source;
            }
        })
        .catch(() => {});
}

function afficherJoueurs() {
    const zone = document.getElementById("cartes-joueurs");

    zone.innerHTML = joueurs.map(j => `
        <article class="carte">
            <div class="carte-interieur">
                <div class="recto">
                    <div class="photo">
                        <div class="photo-placeholder">⛳</div>
                        <img data-page="${j.page}" alt="Photo de ${j.nom}">
                    </div>

                    <div class="infos">
                        <h3>${j.nom}</h3>
                        <p>${j.pays}</p>
                        <p>${j.titres}</p>
                        <button class="bouton-carte ouvrir">Découvrir</button>
                    </div>
                </div>

                <div class="verso">
                    <h3>${j.nom}</h3>
                    <p>${j.texte}</p>
                    <button class="bouton-carte fermer">Retourner</button>
                </div>
            </div>
        </article>
    `).join("");

    zone.querySelectorAll(".carte").forEach(carte => {
        carte.querySelector(".ouvrir").addEventListener("click", () => {
            carte.classList.add("retournee");
        });

        carte.querySelector(".fermer").addEventListener("click", () => {
            carte.classList.remove("retournee");
        });
    });

    zone.querySelectorAll("img[data-page]").forEach(image => {
        chargerPhoto(image.dataset.page, image);
    });
}

function afficherCompetitions() {
    const zone = document.getElementById("cartes-competitions");

    zone.innerHTML = competitions.map(c => `
        <article class="carte-simple">
            <div class="photo">
                <div class="photo-placeholder">${c.icone}</div>
            </div>

            <div class="description">
                <span class="categorie">${c.categorie}</span>
                <h3>${c.nom}</h3>
                <p><strong>Lieu :</strong> ${c.lieu}</p>
                <p>${c.texte}</p>
            </div>
        </article>
    `).join("");
}

function afficherParcours() {
    const zone = document.getElementById("cartes-parcours");

    zone.innerHTML = parcours.map(p => `
        <article class="carte-simple">
            <div class="photo">
                <div class="photo-placeholder">🌿</div>
                <img data-page="${p.page}" alt="Photo du parcours ${p.nom}">
            </div>

            <div class="description">
                <h3>${p.nom}</h3>
                <p><strong>Lieu :</strong> ${p.pays}</p>
                <p>${p.texte}</p>
            </div>
        </article>
    `).join("");

    zone.querySelectorAll("img[data-page]").forEach(image => {
        chargerPhoto(image.dataset.page, image);
    });
}

afficherJoueurs();
afficherCompetitions();
afficherParcours();
