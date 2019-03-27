
// reconstruction de l'object avec les methods et les datas
const Citation = {
    data: {
        //creation d'un tableau de sport pour exemple 
        sport: {
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
            ],
        },
        // creation d'un second tableau culture exemple 
        culture: {
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
            ],
        },

    },
    dom: {
        result: document.getElementById('result'),
        nbCit: null,
        error: document.getElementById('error')
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
        generationCitation: function (randomDebutCitation, randomMilieuCitation, randomFinCitation) {

            var firstElement = Citation.methods.selectIndexCitation(randomDebutCitation, randomDebutCitation.length),
                secondElement = Citation.methods.selectIndexCitation(randomMilieuCitation, randomMilieuCitation.length),
                finalElement = Citation.methods.selectIndexCitation(randomFinCitation, randomFinCitation.length);

            var maGlobalCitation = Citation.methods.formatGlobalCitation(firstElement, secondElement, finalElement);
            return maGlobalCitation;

        },
        updateNbCit: function () {
            // récupération la valeur
            return Citation.dom.nbCit = document.getElementById("nbCit").value;
        },
        verifValue: function (el) {

            Citation.dom.error.innerHTML = '';
            var result = null;
            // Avant de commencé le traitement nous ecrasons les données de l'ancienne demande pour repartir sur de bonne base 
            var message = "";
            // Si la valeur et inferieur ou egale a 0 alors nous avons un message 
            if (el <= 0) {
                console.log('error : ', el);
                message = 'Il y a un probleme la valeur est inférieur à 1';
                result = false;
                // Sinon si la valeur et superieur a 5 nous ne somme dans les conditions demandé un message d'erreur en retour 
            } else if (el > 5) {
                message = 'Il y a un probleme la valeur est supérieur à 5';
                result = false;
                // Sinon nous somme dans les conditions demandé entre 1 et 5 
            } else {
                message = 'Condition respecté';
                result = true;
            }
            Citation.dom.error.innerHTML = message;
            return result;
        },
        // on recupere la valeur de select pour commencer a faire le choix de tableau de citation
        checkvalue: function(el){

            console.log("la fonction choisi et ", el);

        },

        init: function () {

            var maValue = Citation.methods.updateNbCit();
            // Vérifier que les conditions soient respectés
            var result = Citation.methods.verifValue(maValue);
            console.log('result', result);
            // Si et seulement si les conditions sont bien respecter on commence a traité la demande 
            if (result) {
                console.log("je commence a traité la demande");
                // A chaque nouvel demande nous ecrasons les anciennes demande pour en crée de nouvel 
                Citation.dom.result = '';
                // une fois le resultat verifié on demande alors de rajouté +1 jusqu'a la valeur demandé chaque citation dans une nouvel div
                for (i = 0; i < maValue; i++) {
                    // La divHtml va alors crée une nouvel div pour chaque citatition 
                    var divHtml = document.createElement('div');
                    // Une citation correspond à la constante de citation dans la methods ou ce trouve ma generationCitation 
                    // qui est allimenté par mes tableau de debut, milieu et fin de citation
                    var citation = Citation.methods.generationCitation(
                        Citation.data.debutCitation,
                        Citation.data.milieuCitation,
                        Citation.data.finCitation
                    );
                    divHtml.innerHTML = citation;
                    // Chaque nouvel div(citation) aura une ID qui commance par 0 et non par 1 
                    divHtml.setAttribute("id", "citation" + i)
                    document.getElementById('result').append(divHtml);
                };
                // Si aprés verif value n'est pas conforme un message d'erreur et alors transmit 
            } else {
                console.log("verifValue n'est pas conforme")
            }
        }
    }
};
// pour la step 3 crée une nouvel imput a moi de voir la facon pour collecter la nouvel valeur qui sera compris en 1 et 2 
// crée un nouveau dom et donnée le choix a l'utilisateur pour le dom 