
const images = [
    "voiture.jpg",
    "voiture1.jpg",
    "voiture2.jpg",
    "voiture3.jpg",
    "voiture4.jpg"
];

let position = 0;

const photo = document.getElementById("photo");
const compteur = document.getElementById("compteur");
const indicateurs = document.getElementById("indicateurs");

function afficher() {
    photo.src = images[position];

    if (compteur) {
        compteur.textContent = (position + 1) + " / " + images.length;
    }

    if (indicateurs) {
        indicateurs.innerHTML = "";

        for (let i = 0; i < images.length; i++) {
            const bouton = document.createElement("button");
            bouton.textContent = "●";
            bouton.className = i === position ? "actif" : "";
            bouton.addEventListener("click", function () {
                position = i;
                afficher();
            });
            indicateurs.appendChild(bouton);
        }
    }
}

function suivant() {
    position++;

    if (position >= images.length) {
        position = 0;
    }

    afficher();
}

function precedent() {
    position--;

    if (position < 0) {
        position = images.length - 1;
    }

    afficher();
}

document.getElementById("suivant").addEventListener("click", suivant);
document.getElementById("precedent").addEventListener("click", precedent);

afficher();
