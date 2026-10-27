
const recettes = [
    {
        nom: "Tarte fine aux tomates",
        type: "sale",
        categorie: "Facile",
        temps: "35 minutes",
        description: "Une tarte croustillante avec des tomates, de la moutarde et des herbes.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80"
    },
    {
        nom: "Poulet rôti aux herbes",
        type: "sale",
        categorie: "Tradition",
        temps: "1 h 15",
        description: "Un grand classique familial avec des herbes aromatiques et des légumes.",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80"
    },
    {
        nom: "Moelleux au chocolat",
        type: "sucre",
        categorie: "Dessert",
        temps: "30 minutes",
        description: "Un dessert gourmand avec un cœur fondant et une texture moelleuse.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"
    },
    {
        nom: "Salade fraîche de saison",
        type: "sale",
        categorie: "Léger",
        temps: "15 minutes",
        description: "Des légumes colorés, des feuilles fraîches et une vinaigrette maison.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
    },
    {
        nom: "Tarte aux fruits",
        type: "sucre",
        categorie: "Pâtisserie",
        temps: "50 minutes",
        description: "Une pâte dorée garnie de fruits et d'une crème délicate.",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80"
    },
    {
        nom: "Pâtes à la tomate",
        type: "sale",
        categorie: "Rapide",
        temps: "20 minutes",
        description: "Des pâtes accompagnées d'une sauce tomate parfumée au basilic.",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80"
    }
];

const chefs = [
    {
        nom: "Paul Bocuse",
        specialite: "Cuisine française",
        description: "Une figure majeure de la gastronomie française, connue pour avoir contribué au rayonnement de la cuisine française.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Paul_Bocuse_2007_-2.jpg?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original"
    },
    {
        nom: "Anne-Sophie Pic",
        specialite: "Cuisine créative",
        description: "Une grande cheffe française reconnue pour ses associations de saveurs et son travail sur les arômes.",
        image: "https://www.leparisien.fr/resizer/Z6PeZLlL3b_P8ipMNtPQ6S62e6E=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XDNJMEB4AOKVVPV2BQELGBCLT4.jpg"
    },
    {
        nom: "Philippe Etchebest",
        specialite: "Cuisine et transmission",
        description: "Un chef français qui partage son savoir-faire et accompagne des cuisiniers dans leurs projets.",
        image: "https://www.bienetre-et-sante.fr/uploads/images/articles/philippe-etchebest-j-ai-toujours-aime-repousser-mes-limites-et-vivre-intensement-69df5c7193ca0.jpg"
    }
];

const restaurants = [
    {
        nom: "Mirazur",
        ville: "Menton",
        etoiles: "★★★",
        description: "Une grande table tournée vers les produits de saison, les jardins et les saveurs méditerranéennes.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80"
    },
    {
        nom: "Le Petit Nice",
        ville: "Marseille",
        etoiles: "★★★",
        description: "Une maison gastronomique réputée pour son travail autour des poissons et des produits de la mer.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"
    },
    {
        nom: "Le Cinq",
        ville: "Paris",
        etoiles: "★★★",
        description: "Un restaurant gastronomique parisien qui met à l'honneur une cuisine raffinée et créative.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=700&q=80"
    }
];

function afficherRecettes(type) {
    let zone = document.getElementById("liste-recettes");
    zone.innerHTML = "";

    for (let recette of recettes) {
        if (type === "tous" || recette.type === type) {
            let carte = document.createElement("article");
            carte.className = "carte";

            carte.innerHTML = `
                <img src="${recette.image}" alt="${recette.nom}" loading="lazy">
                <div class="carte-contenu">
                    <span class="etiquette">${recette.categorie}</span>
                    <h3>${recette.nom}</h3>
                    <p>${recette.description}</p>
                    <p class="details">⏱ ${recette.temps}</p>
                </div>
            `;

            zone.appendChild(carte);
        }
    }
}



function afficherChefs() {
    let zone = document.getElementById("liste-chefs");

    for (let chef of chefs) {
        let carte = document.createElement("article");
        carte.className = "carte";

        carte.innerHTML = `
            <img src="${chef.image}" alt="${chef.nom}" loading="lazy">
            <div class="carte-contenu">
                <span class="etiquette">${chef.specialite}</span>
                <h3>${chef.nom}</h3>
                <p>${chef.description}</p>
            </div>
        `;

        zone.appendChild(carte);
    }
}

function afficherRestaurants() {
    let zone = document.getElementById("liste-restaurants");

    for (let restaurant of restaurants) {
        let carte = document.createElement("article");
        carte.className = "carte";

        carte.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.nom}" loading="lazy">
            <div class="carte-contenu">
                <span class="etiquette">${restaurant.ville}</span>
                <h3>${restaurant.nom}</h3>
                <p>${restaurant.description}</p>
                <p class="details">${restaurant.etoiles} Michelin — édition 2026</p>
            </div>
        `;

        zone.appendChild(carte);
    }
}

let boutons = document.querySelectorAll(".filtre");

for (let bouton of boutons) {
    bouton.addEventListener("click", function() {
        for (let autre of boutons) {
            autre.classList.remove("actif");
        }

        bouton.classList.add("actif");
        afficherRecettes(bouton.dataset.type);
    });
}

afficherRecettes("tous");
afficherChefs();
afficherRestaurants();
