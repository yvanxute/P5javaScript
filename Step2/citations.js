// reconstruction de l'object avec les methods et les datas
const Citation = {
    data: {
        //creation d'un tableau de kaamelot 
        kaamelott: {
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
        // creation d'un second tableau kaamelott 2 
        kaamelott2: {
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
        nbCit: document.getElementById('nbCit'),
        chCit: document.getElementById('chCit'),
        error: document.getElementById('error'),
        lancement: document.getElementById('lancement'),
        finProgramme: document.getElementById("finProgramme")
    },
    methods: {
        // Renvoie la description de Citation avec 3 constantes
        formatGlobalCitation: function (debutCitation, milieuCitation, finCitation) {
            return (debutCitation + " " + milieuCitation + " " + finCitation); // sinon  3 morceaux
        },
        // retour un entier aleatoir de 1 à max dans le tableau des citations le nombre max et aleatoirement redonnée un morceau de citation
        selectIndexCitation: function (citationArray, max) {
            var index = Math.floor((Math.random() * max));
            return citationArray[index];
        },
        // produire une citation complete aleatoirement 
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
        // verification de la valeur du nombre de citation demandée par l'utilisateur 
        verifNbcit: function (el) {
            Citation.dom.error.innerHTML = '';
            var result = {
                result: "",
                message: ""
            };
            // Avant de commencé le traitement nous ecrasons les données de l'ancienne demande pour repartir sur de bonne base 
            // Si la valeur et inferieur ou egale a 0 alors nous avons un message 
            if (el <= 0) {
                
                result.message = 'Il y a un probleme la valeur est inférieur à 1';
                result.result = false;
                // Sinon si la valeur et superieur a 5 nous ne somme dans les conditions demandé un message d'erreur en retour 
            } else if (el > 5) {
                result.message = 'Il y a un probleme la valeur est superieur à 5';
                result.result = false;
                // Sinon nous somme dans les conditions demandé entre 1 et 5 
            } else {
                result.message = 'felicitation voila les citation que vous avez demandé';
                result.result = true;
            }
            Citation.dom.error.innerHTML = message;
            return result;
        },
        updateSelect: function () {
            // récupération la valeur
            return Citation.dom.chCit = document.getElementById("chCit").value;
        },
        // on recupere la valeur de select pour commencer a faire le choix de tableau de citation
        // et on check le type de generateur demandé par l'utilisateur 
        checkType: function (el) {
            var typeChoice = {
                choice: "",
                message: "",
                el: ""
            };
            Citation.dom.error.innerHTML = '';
            if (el == 'default') {
                typeChoice.message = "merci de choisir un generateur ";
                typeChoice.choice = false;
                typeChoice.el = el;
            } else if (el == 'kaamelott') {
                
                typeChoice.message = 'bravo maintenant merci de bien choisir le nombre de citation a generer';
                typeChoice.choice = true;
                typeChoice.el = el;
            } else if (el == 'kaamelott2') {
                
                typeChoice.message = 'bravo maintenant merci de bien choisir le nombre de citation a generer';
                typeChoice.choice = true;
                typeChoice.el = el;
            }
            return typeChoice;

        },

        init: function () {
            message = '';
            divHtml = "";
            Citation.dom.result = "";
            // Mise à jour du select 
            var valueSelect = Citation.methods.updateSelect(this.value);


           

            // Vérifier la valeur approprié soit "kamelot" soit "starwars"
            var nouvelleVerif = Citation.methods.checkType(valueSelect); // nouvelle fonction
            var maValue = Citation.methods.updateNbCit();
            // Vérifier que les conditions soient respectés
            var result = Citation.methods.verifNbcit(maValue);

           
            // Si et seulement si les conditions sont bien respecter on commence a traité la demande 
            if (result.result && nouvelleVerif.choice) {
                
                // A chaque nouvel demande nous ecrasons les anciennes demande pour en crée de nouvel 
                Citation.dom.result = '';
                // une fois le resultat verifié on demande alors de rajouté +1 jusqu'a la valeur demandé chaque citation dans une nouvel div
                for (i = 0; i < maValue; i++) {
                    // La divHtml va alors crée une nouvel div pour chaque citatition 
                    var divHtml = document.createElement('li');
                    // Une citation correspond à la constante de citation dans la methods ou ce trouve ma generationCitation 
                    // qui est allimenté par mes tableau de debut, milieu et fin de citation
                    if (valueSelect == 'kaamelott') {
                        var citation = Citation.methods.generationCitation(
                            Citation.data.kaamelott.debutCitation,
                            Citation.data.kaamelott.milieuCitation,
                            Citation.data.kaamelott.finCitation
                        );
                        Citation.methods.suiteEvent();
                    } else if (valueSelect == 'kaamelott2') {
                        var citation = Citation.methods.generationCitation(
                            Citation.data.kaamelott2.debutCitation,
                            Citation.data.kaamelott2.milieuCitation,
                            Citation.data.kaamelott2.finCitation
                        );
                        Citation.methods.suiteEvent();
                    }       
                    divHtml.innerHTML = citation;
                    // Chaque nouvel div(citation) aura une ID qui commance par 0 et non par 1 
                    divHtml.setAttribute("id", "citation" + i)
                    document.getElementById('result').append(divHtml);
                };
                // Si aprés verif value n'est pas conforme un message d'erreur et alors transmit 
            } else {
                message = '';
                if (!nouvelleVerif.choice) {
                    message = nouvelleVerif.message;
                } else if (!result.result) {
                    message = result.message;
                }
                Citation.dom.error.innerHTML = message;
            }

        },
        // la function resetAction qui donne le choix à l'utilisateur de regéneré ou pas les citations 
        resetAction: function (el) {
            
            if (el == 'oui') {
                // remetre a zero la page 
                document.location.reload(true);

            } else if (el == 'non') {
                // confirmationSession je le rend invisible
                document.getElementById("finProgramme").classList.add("hide");
            };
        },
        // la function suiteEvent est crée pour faire apparaitre ou rendre inactif les btn 
        suiteEvent: function () {
            // on fait disparaitre le btn ou on le disable
            document.getElementById("chCit").disabled = true;
            document.getElementById("nbCit").disabled = true;
            document.getElementById("lancement").disabled = true;
            // confirmationSession je le rend visible
            let confirm = document.getElementsByClassName("confirmationSession");
            confirm[0].classList.remove("hide");
        }
    }
};