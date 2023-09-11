// Votre console affichera beaucoup d'erreurs c'est tout à fait normal si vous suivez l'ordre synchrone des exercices à la fin vous ne devriez plus avoir d'erreur.

// Exercice 1 V
// Insérez votre code ici
const firstname = "Bubulle";
const lastname = "XXXX";

// Ne touchez pas à ceci
document.querySelector("h1").textContent = `Bonjour ${firstname} ${lastname}`;

// Exercice 2
// Insérez votre code ici
let age = Number(32);

// Ne touchez pas à ceci
document.querySelector(
  "p"
).textContent = `Tu t'appelles donc ${firstname} et tu as ${age} ans 😊 si mes calculs sont justes tu es né en ${
  2023 - age
}`;
// Exercice 3
// Insérez votre code ici
let year = Number(2023);
const birthYear = Number(year - age);

// Exercice 4
// Insérez votre code ici
let user = [firstname, lastname, age, year, birthYear];
// Ne touchez pas à ceci
user.forEach((infoUser) => {
  switch (infoUser) {
    case firstname:
      document.getElementById("firstname").textContent = `Salut ${firstname} !`;
      break;
    case lastname:
      document.getElementById(
        "lastname"
      ).textContent = `Bonjour Monsieur/Madame ${lastname} !`;
      break;
    case age:
      document.getElementById(
        "age"
      ).textContent = `Quel âge as-tu ? ${age} ans`;
      break;
    case year:
      document.getElementById(
        "year"
      ).textContent = `On est toujours en ${year}`;
      break;
    case birthYear:
      document.getElementById(
        "birthYear"
      ).textContent = `Tu es donc né en ${birthYear}`;
      break;
    default:
      console.log("Oups il y a une erreur");
      break;
  }
});
// Exercice 5
// Insérez votre code ici
/* Merci Sara
let colorLigthBlue = "lightblue";
let colorPink = "pink";
document.body.style.background = `linear-gradient(${colorPink}, ${colorLigthBlue})`;
*/
let backgroundColor = "crimson";
// Ne touchez pas à ceci
document.body.style.backgroundColor = backgroundColor;

// Insérez votre réassignation de backgroundColor ici
backgroundColor = "lightblue";

// Ne touchez pas à ceci
document.body.style.backgroundColor = backgroundColor;

// Exercice 6
// Insérez votre code ici
// Insérer une image
let myImage = new Image(100, 200);
let car = {
  brand: "peogot",
  model: "403",
  yearConstruct: 1956,
  color: "lightblue",
  image: myImage.src = "./Ressources/images/128.jpg",
};
console.log(car);
// Ne touchez pas à ceci
document.getElementById(
  "firstItem"
).textContent = `La marque de ta voiture : ${car.brand}`;
document.getElementById(
  "secondItem"
).textContent = `Le modèle de ta voiture : ${car.model}`;
document.getElementById(
  "thirdItem"
).textContent = `Ta voiture a été contruite en : ${car.yearConstruct}`;
document.getElementById(
  "fourthItem"
).textContent = `Ta voiture est de couleur : ${car.color}`;
document.getElementById("car").src = car.image;

// Exercice 7
// Insérez votre code ici
// const matches = document.querySelectorAll("p");
const buttons = document.querySelectorAll("button");
console.log(buttons);
const cat = document.getElementById("cat");
console.log(cat); // <img id="cat" />

// Ne touche pas à ceci
const catURL = [
  "https://s1.1zoom.me/big0/812/Cats_Glance_Kittens_558640_1280x720.jpg",
  "https://img3.wallspic.com/crops/4/8/6/4/94684/94684-chat_siberien-chat_siamois-chaton-chat_persan-chat-1280x720.jpg",
  "https://chatfaitdubien.fr/wp-content/uploads/2016/09/chaton.jpg",
];
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "Photo 1":
        cat.src = catURL[0];
        break;
      case "Photo 2":
        cat.src = catURL[1];
        break;
      case "Photo 3":
        cat.src = catURL[2];
        break;
      default:
        console.log("Erreur");
        break;
    }
  });
});

// Exercice 8
// Insérez votre code ici
// Sélectionnez l'élément ayant l'ID "output" en utilisant getElementById() et insérez deux nouvelles balises HTML avec innerHTML. Vous aurez besoin d'une balise "p" avec un contenu de votre choix et d'une balise "img" avec la source suivante : https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png.

let output = document.getElementById("output");
console.log(output);
output.innerHTML += `<p>Hello mon p </p>
                      <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript-logo" />`;

/*
Dans l'exercice TodoList
------------------------
 output.innerHTML += `<li>
    <p>${taskValue}</p>
    <div>
      <button class="done"></button>
      <button class="delete">
        Delete
      </button>
    </div>
  </li>`;
*/



// Exercice 9
// Insérez votre code ici
const fruits = ["pomme", "poire", "cerise", "banane"];
const listOutput = document.getElementById("listOutput");
// user.forEach((infoUser) => {
  fruits.forEach((fruitValue) => {
      listOutput.innerHTML += ` <li> ${fruitValue} </li>
      `;
  });

// Exercice 10
// Vous allez rendre l'icône affichée aléatoire lorsque vous accédez à votre page.

// Ne touchez pas au tableau
const icons = [
  "cat-solid",
  "dog-solid",
  "dragon-solid",
  "fish-solid",
  "hippo-solid",
  "horse-solid",
  "otter-solid",
  "paw-solid",
  "shrimp-solid",
];

// Insérez votre code ici
const logo = document.getElementById("logo");
// Pour éviter de compter le nombre d'éléments de notre tableau, créez une variable contenant la longueur de votre tableau et soustrayez 1 (car l'index commence à 0).
const indexIcons = (icons.length) -1;
console.log(indexIcons);

const aleatoire = Math.round(Math.random()*indexIcons);
console.log(aleatoire);
// images/chemin tableau valeur du tableau via son index
const iconURL = `./Ressources/images/${icons[aleatoire]}.svg`;
// document.getElementById("myImg").src = "hackanm.gif"; https://www.w3schools.com/jsref/prop_img_src.asp, https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_src2
//  <img id="logo" src="" alt="" /> la balise img dont l'id est logo va recevoir la source d'une image produite aléatoirement
// pour l'id logo qui est stocké dans la variable logo, je lui attribue l'icone url qui elle va chercher une image aléatoirement : const iconURL = `./Ressources/images/${icons[aleatoire]}.svg`;
logo.src = iconURL;



// Exercice 11 : Optionnel
/*
  <div>
      <label for="iconSelect">Select an Icon:</label>
      <select id="iconSelect">
        <option value="">Select an icon...</option>
        <option value="cat-solid">Cat</option>
        <option value="shrimp-solid">Shrimp</option>
      </select>
      <button id="changeIcon">Change Icon</button>
    </div>
    <img id="iconImage" src="" alt="User's Icon" />
*/

// Insérez votre code ici

/*
Exercice 11
Exercice optionnel

Pour cet exercice, nous allons réutiliser le tableau de l'exercice 10.
const icons = [
  "cat-solid",
  "dog-solid",
  "dragon-solid",
  "fish-solid",
  "hippo-solid",
  "horse-solid",
  "otter-solid",
  "paw-solid",
  "shrimp-solid",
];

Cette fois, l'objectif est de permettre à l'utilisateur de choisir son icône.

Dans le HTML, récupérez plusieurs éléments en utilisant la méthode de votre choix. Enregistrez les IDs "iconSelect" (qui permet à l'utilisateur de choisir dans un menu déroulant), "changeIcon" (qui permet de valider le choix) et "iconImage" (qui affichera l'icône sélectionnée).
*/

const iconSelect = document.getElementById("iconSelect");
console.log(iconSelect);
const changeIcon = document.getElementById("changeIcon");
console.log(changeIcon);
const iconImage = document.getElementById("iconImage");
console.log(iconImage);

/*
Créez une fonction et affichez un message avec console.log() pour vérifier son bon fonctionnement. N'oubliez pas de l'appeler ensuite 😉
*/
// l'utilisateur doit cliquer sur le button changeIcon pour déclencher la fonction
// dans la fonction créer une variable contenant la "value" de l'élément "iconSelect"
function modifierIcon(){
 // console.log("coucou");
 const selectIcon = iconSelect.value;
  // console.log(selectIcon);
  
  if (selectIcon) {
    // aller chercher dans la source l'image correspondante au clic
    iconImage.src = `./Ressources/images/${selectIcon}.svg`;
    
  }
}

changeIcon.addEventListener("click", () => {
 modifierIcon();
}) 

/*
Sous votre fonction, ajoutez un gestionnaire d'événements de type "click". 

Devinez sur quel élément l'utilisateur doit cliquer pour déclencher votre fonction. 

Rappelez-vous que la méthode addEventListener prend deux paramètres : le type d'événement à écouter et la fonction à exécuter. Si vous aviez appelé votre fonction "normalement" à l'étape précédente, supprimez cet appel, car il ne sera pas nécessaire.

Revenons à votre fonction. Vous souhaitez que l'utilisateur puisse choisir. Vous avez déjà effectué toutes vos sélections et appelé la fonction.
Votre fonction n'accepte pas de paramètre.
Créez une variable contenant la "value" de l'élément "iconSelect".
Utilisez une condition "if" (sans le "else") basée sur la valeur de la variable créée à l'étape précédente.
Si cette condition est vraie, créez une variable contenant le chemin/lien des images en utilisant la syntaxe des backticks. Intégrez votre variable contenant la valeur de votre sélection.
Modifiez ensuite la source de votre icône en utilisant cette nouvelle variable.

*/

