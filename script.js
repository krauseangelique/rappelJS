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

/*
 const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element)); 
*/
icons.forEach((iconValue) => {
  console.log(iconValue);

});
/*
let chemin = "";
chemin = iconValue[0];
console.log(chemin);
*/

// Insérez votre code ici
const logo = document.getElementById("logo");
// Pour éviter de compter le nombre d'éléments de notre tableau, créez une variable contenant la longueur de votre tableau et soustrayez 1 (car l'index commence à 0).
const indexIcons = (icons.length) -1;
console.log(indexIcons);

// Ensuite, créez une variable qui génère un chiffre aléatoire entre 0 et 8. N'oubliez pas d'utiliser la variable précédemment créée pour l'index.
/*
La classe Math contient toutes les méthodes liées au nombre dans le langage JavaScript. On peut générer un nombre aléatoire en JavaScript avec la méthode Math.rand() mais ce nombre est systématiquement compris entre 0 et 1. Il faut ensuite multiplier le nombre aléatoire généré par la différence entre les deux nombres qui sont les limites et ajouter 1. On obtient ainsi un nombre à virgule. La méthode Math.floor() va récupérer la partie entière de ce nombre. Après ce calcul, il ne reste plus qu'à ajouter le nombre inférieur de l'intervalle pour obtenir un nombre aléatoire compris dans l'intervalle.
*/
const min = 1;
const max = 8;

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 8
const entier = entierAleatoire(1, 8);


/*let variableCheminImage = `<img id="iconImage" src="./Ressources/images/${iconValue}.svg" alt="User's Icon" />`;
console.log(variableCheminImage);
*/

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
