
const joueurs = [
    {
        nom: "Garry Kasparov",
        dates: "1963 —",
        epoque: "1985–2000",
        pays: "URSS puis Russie",
        wikipedia: "Garry_Kasparov",
        description: "Champion du monde de 1985 à 2000, il est célèbre pour son style dynamique, son énergie et ses préparations théoriques."
    },
    {
        nom: "Magnus Carlsen",
        dates: "1990 —",
        epoque: "Depuis les années 2000",
        pays: "Norvège",
        wikipedia: "Magnus_Carlsen",
        description: "Champion du monde de 2013 à 2023, il est reconnu pour sa précision, sa polyvalence et sa maîtrise des finales."
    },
    {
        nom: "Bobby Fischer",
        dates: "1943–2008",
        epoque: "Champion en 1972",
        pays: "États-Unis",
        wikipedia: "Bobby_Fischer",
        description: "Génie américain des échecs, il remporte le titre mondial en 1972 après son duel historique contre Boris Spassky."
    },
    {
        nom: "José Raúl Capablanca",
        dates: "1888–1942",
        epoque: "Champion de 1921 à 1927",
        pays: "Cuba",
        wikipedia: "José_Raúl_Capablanca",
        description: "Surnommé la machine à jouer aux échecs, il était célèbre pour sa simplicité apparente et sa technique exceptionnelle."
    },
    {
        nom: "Anatoly Karpov",
        dates: "1951 —",
        epoque: "Champion de 1975 à 1985",
        pays: "URSS puis Russie",
        wikipedia: "Anatoly_Karpov",
        description: "Stratège remarquable, il dominait ses adversaires grâce à son positionnement, sa patience et sa précision."
    },
    {
        nom: "Viswanathan Anand",
        dates: "1969 —",
        epoque: "Champion de 2007 à 2013",
        pays: "Inde",
        wikipedia: "Viswanathan_Anand",
        description: "Champion du monde indien, il s'est distingué par sa rapidité de calcul et son excellence en parties rapides."
    },
    {
        nom: "Mikhail Tal",
        dates: "1936–1992",
        epoque: "Champion en 1960",
        pays: "Lettonie / URSS",
        wikipedia: "Mikhail_Tal",
        description: "Surnommé le magicien de Riga, il était connu pour ses sacrifices spectaculaires et son jeu imaginatif."
    },
    {
        nom: "Judit Polgár",
        dates: "1976 —",
        epoque: "Légende du jeu moderne",
        pays: "Hongrie",
        wikipedia: "Judit_Polgár",
        description: "Considérée comme l'une des plus grandes joueuses de l'histoire, elle a affronté et battu plusieurs champions du monde."
    }
];

const listeJoueurs = document.getElementById("liste-joueurs");

const imageSecours =
    "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=700&q=80";

joueurs.forEach((joueur, index) => {
    const carte = document.createElement("article");
    carte.className = "carte-joueur";

    const photo = document.createElement("div");
    photo.className = "carte-photo";

    const image = document.createElement("img");
    image.src = imageSecours;
    image.alt = "Portrait de " + joueur.nom;
    image.loading = "lazy";
    image.onerror = () => {
        image.onerror = null;
        image.src = imageSecours;
    };

    const numero = document.createElement("span");
    numero.className = "carte-numero";
    numero.textContent = String(index + 1).padStart(2, "0");

    const contenu = document.createElement("div");
    contenu.className = "carte-contenu";

    const epoque = document.createElement("span");
    epoque.className = "carte-epoque";
    epoque.textContent = joueur.epoque;

    const titre = document.createElement("h3");
    titre.textContent = joueur.nom;

    const description = document.createElement("p");
    description.textContent = joueur.description;

    const pays = document.createElement("span");
    pays.className = "carte-pays";
    pays.textContent = joueur.pays + " · " + joueur.dates;

    photo.append(image, numero);
    contenu.append(epoque, titre, description, pays);
    carte.append(photo, contenu);
    listeJoueurs.appendChild(carte);

    fetch(
        "https://en.wikipedia.org/api/rest_v1/page/summary/" +
        encodeURIComponent(joueur.wikipedia)
    )
        .then(reponse => {
            if (!reponse.ok) {
                throw new Error("Portrait indisponible");
            }

            return reponse.json();
        })
        .then(donnees => {
            if (donnees.thumbnail && donnees.thumbnail.source) {
                image.src = donnees.thumbnail.source;
            }
        })
        .catch(() => {
            image.src = imageSecours;
        });
});

const liensMenu = document.querySelectorAll(".menu a");

liensMenu.forEach(lien => {
    lien.addEventListener("click", () => {
        liensMenu.forEach(element => {
            element.classList.remove("actif");
        });

        lien.classList.add("actif");
    });
});

const sections = document.querySelectorAll(
    "#accueil, #joueurs, #histoire, #competitions"
);

if ("IntersectionObserver" in window) {
    const observateur = new IntersectionObserver(
        entrees => {
            entrees.forEach(entree => {
                if (entree.isIntersecting) {
                    liensMenu.forEach(lien => {
                        lien.classList.toggle(
                            "actif",
                            lien.getAttribute("href") === "#" + entree.target.id
                        );
                    });
                }
            });
        },
        {
            rootMargin: "-25% 0px -60% 0px"
        }
    );

    sections.forEach(section => observateur.observe(section));
}
