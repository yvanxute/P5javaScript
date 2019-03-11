
// reconstruction de l'object avec les methods et les datas
const Citation = {
    data: {
        debutCitation: [
            "Oh, mais c'est pas vrai, ",
            "Merlin, i'sait déjà pas monter des blancs en neige, ",
            "Mais comment voulez-vous que j'vous prouve que j'suis moi, ",
            "De toutes façons, ",
            "Rangez moi ça, débile, ",
            "Sur le principe, ",
            "Oui, je sais, ",
            "Au bout d'un moment, ",
            "On se fait couper les deux bras, ",
            "La prochaine fois que vous faites venir un barde, ",
            "Y a pas à dire, ",
            "Mon père, il n'était pas ébouriffé, ",
            "C’est vrai ce qu’on dit, ",
            "Nouvelle technique : on passe pour des cons, les autres se marrent, et on frappe, "
        ],
        milieuCitation: [
            " une heure que j'crapahute dans tout le château avec ma bougie, ",
            " alors préparer une potion de polymorphie… ",
            " ça devient débile, ",
            " c'est ma mère, ",
            " la table ronde, ",
            " mettons deux gardes là devant et allons boire un coup, ",
            " balancez-leur les radasses et qu'ils s'en aillent au diable, ",
            " ne comptez plus sur moi pour vous amener mes gâteaux à la purée de pomme dont vous êtes si friand, ",
            " je m'occupe d'aller chercher ces petites salopes par la peau du fion, ",
            " je tiens à préciser que l'incident n'a fait aucune victime, ",
            " faut que j'enlève mon armure sinon y va se passer quelque chose d'atroce, ",
            " il serait tout à fait possible que le Graal ne soit ni un vase, ni une coupe,",
            " je ne me sens pas dans mon assiette, ",
            "vous êtes un grand malade mental, ",
            " l'incident n'a fait aucune victime, "
        ],
        finCitation: [
            "c'est clair, ça ?",
            "ça va bien, maintenant !",
            "permettez-moi d'avoir des doutes.",
            "à la fin !",
            "j'vais pas la faire tabasser par la garde.",
            "c'est pas la fête de l'artisanat !",
            "le repas est tout de suite plus chaleureux !",
            "voilà ! Allez, au lit !",
            "vous avez plus pris de la pucelle.",
            "ah non, là-dessus on a une avance considérable.",
            "c'est pas obligatoire.",
            "mais en même temps…",
            "ou ça fait quinze ans qu'il me prend pour un con ?",
            "mettez-vous à la place des ennemis, c'est désespérant."
        ]
    },
    dom: {
        result: document.getElementById('result'),
        nbCit: document.getElementById("nbCit").onchange,
        resultChild: document.createElement('div')
    },
    methods: {
        // Renvoie la description de Citation avec 3 constantes
        formatGlobalCitation: function (el1, el2, el3) {

            return (el1 + " " + el2 + " " + el3); // sinon  3 morceaux
        },
        // retour un entier aleatoir de 1 à max
        selectIndexCitation: function (citationArray, max) {
            var index = Math.floor((Math.random() * max));
            return citationArray[index];
        },
        test: function () {
            var nbCit = Citation.dom.nbCit.value;
            console.log('test : ', nbCit);

        },
        generationCitation: function (randomDebutCitation, randomMilieuCitation, randomFinCitation) {

            var firstElement = Citation.methods.selectIndexCitation(randomDebutCitation, randomDebutCitation.length),
                secondElement = Citation.methods.selectIndexCitation(randomMilieuCitation, randomMilieuCitation.length),
                finalElement = Citation.methods.selectIndexCitation(randomFinCitation, randomFinCitation.length);

            // Création d'un nouvelle elements
            var maGlobalCitation = Citation.methods.formatGlobalCitation(firstElement, secondElement, finalElement);
            console.log('citation : ', maGlobalCitation);
            // le nouvel element qui prend son contenu

            // Le nouvel element est ajouter dans le dom

            citation.dom.resultChild.innerHTML = maGlobalCitation,
            Citation.dom.result.innerHTML = maGlobalCitation;

        },
        init: function () {

            let nbCit; // let nbCit => 5 choix possibles, générer de 1 à 5 citations
            var nbCit = document.getElementById("nbCit");
                
            while (nbCit !== "0") {
                console.log("1 : Générer 1 citation : ");
                console.log("2 : Générer 2 citations : ");
                console.log("3 : Générer 3 citations : ");
                console.log("4 : Générer 4 citations : ");
                console.log("5 : Générer 5 citations : ");
                console.log("0 : Quitter");
                const nbCit = prompt("Choisissez une option : ");

                if ((nbCit >= 0) && (nbCit <= 5)) { // nbCit saisie par l' utilisateur est compris entre 1 et 5
                    const maGlobalCitation = prompt("Saississez 3 pour une (des) citation(s) à 3 variables, 4 pour 4 variables :"); // choix du nombre de constiables
                    if (maGlobalCitation == 3 || maGlobalCitation == 4) { // 2 choix possibles : générer 1 ou plusieurs citations à 3 (saisir 3) ou 4 (saisir 4) constiables
                        const maGlobalCitation = generationCitation(nbCit, maGlobalCitation);
                        for (let i = 0; i < let ;i ++) {
                            const maGlobalCitation = citation[i];
                            console.log("Voici la citation " + (i + 1) + " : ");
                            console.log(citation.selectIndexCitation());
                        }
                    } else { // si l'utilisateur choisit autre chose que 3 ou 4 constantes (chiffre autre que 3 ou 4, lettre,....)
                        console.log("Vous avez saisi un autre chiffre que 3 ou 4, le programme ne peut générer vo(s)tre citation(s) !");
                    };
                }
                if ((nbCit > 5) || (nbCit !== 'numbers')) { //si la nbCit saisie par l'utilisateur est supérieur à 5 ou n'est pas un chiffre
                    console.log("Veuillez saisir un chiffre entre 1 et 5 pour générer des citations ou 0 pour quitter.");
                }
                if (nbCit === 0) { // quitte le programme si la nbCit saisie par l' utilisateur est 0
                    console.log("Au revoir !");
                    break;
                };

                // Création de la fonction propre de la récupération et la vérification du nombre de citation
                // Créer la boucle pour afficher les citations
            }
        }
    }
};

// retour un entier aleatoir de 1 à max

Citation.methods.maGlobalGeneration(
    Citation.data.debutCitation,
    Citation.data.milieuCitation,
    Citation.data.finCitation
);

//= function () { init() }

//function myFunction() {
    //var x = document.getElementById("nbCit");
//}