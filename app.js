"use strict";

/* Saisie du code en cliquant : */

let mdp = document.getElementById("mdp");

let identifiant = document.getElementById("identifiant");

function saisieCode(x) {

  if (mdp.value.length < 6) {

    mdp.value = mdp.value + x;
  }

}


/* Effacer le mot de passe + remélanger les chiffres: */

function effacement() {
  mdp.value = "";
  identifiant.value="";
  melangeTab(tab);
  shuffle();
}

/* Changement de position : */

let boutonCode = document.getElementsByClassName("boutonCode");

console.log(boutonCode[0])

let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 22, 22, 22, 22, 22]

function melangeTab(tabAMelanger) {
  tabAMelanger.sort(() => Math.random() - 0.5);
}

melangeTab(tab);
console.log(tab);

function shuffle() {

  for (let i = 0; i < tab.length; i++) {

    boutonCode[i].attributes[2].value = tab[i];
    boutonCode[i].innerHTML = tab[i];
    boutonCode[i].style.background="rgb(204,204,204)";

    if (tab[i] == 22) {
      boutonCode[i].attributes[2].value = "";
      boutonCode[i].innerHTML = "";
      boutonCode[i].style.background="rgb(221,221,221)"
    }

  }

}

shuffle();

/* API */ 

const messAuth = document.getElementById("messAuth");

formElem.onsubmit = async (e) => {
  e.preventDefault();

  let response = await fetch('https://www.ericfreelance.fr/api/check_user.php', {
    method: 'POST',
    body: new FormData(formElem)
  });

  let result = await response.json();

/* Affichage message de connexion : */ 

  if (result.check == true){
    messAuth.style.display="flex"
    messAuth.innerHTML=result.message
  } else{
    messAuth.style.display="flex"
    messAuth.innerHTML=result.message
  }

}



