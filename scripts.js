/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
console.log("Hello World!");

//Maak variabelen aan

var foodTruck1 = document.getElementById("ft1");
var foodTruck2 = document.getElementById("ft2");
var foodTruckTekst1 = document.getElementById("ft1tekst");
var foodTruckTekst2 = document.getElementById("ft2tekst");
var images = ["ft/ft1.jpg", "ft/ft1t.jpg", "ft/ft2.jpg", "ft/ft2t.jpg"];
var h1 = document.querySelector("h1");
var tekst = ["Deze foodtruck is als beste uit de test!", "Deze foodtruck is op het moment helaas niet beschikbaar.", "Maak een keuze uit 1 van onze fantastische Foodtrucks!", "De Flitse Foodtruck heeft al jaren ervaring in de foodtruck business. Zo weten ze ook precies wat hun klanten willen! Ze hebben een heerlijk menu en zijn gespecialiseerd in fastfood, vandaar de naam!", "De Little Eatery heeft al jaren ervaring in de foodtruck business. Zo weten ze ook precies wat hun klanten willen! Ze hebben een heerlijk menu en zijn gespecialiseerd in fastfood, vandaar de naam!"];
var zoeken = document.getElementById("zoek");
var zoekveld = document.querySelector("h1")
var searchBar = document.getElementById("sBar");



function changeGoed() {
    foodTruck1.src = images[1];
    h1.textContent = tekst[0];
    foodTruckTekst1.textContent = tekst[0];
}

function changeSlecht() {
    foodTruck2.src = images[3];
    h1.textContent = tekst[1];
    foodTruckTekst2.textContent = tekst[1];
}

function terugNormaal() {
    foodTruck1.src = images[0];
    foodTruck2.src = images[2];
    h1.textContent = tekst[2];
    foodTruckTekst1.textContent = tekst[3];
    foodTruckTekst2.textContent = tekst[4];
}

function zoekBalk () {
    zoekveld.classList.toggle("show-search")
    if (searchBar.style.display === "none") {
    searchBar.style.display = "block";
  } else {
    searchBar.style.display = "none";
  }
}



setInterval(terugNormaal, 4000);

foodTruck1.addEventListener("mouseover", changeGoed);
foodTruck2.addEventListener("mouseover", changeSlecht);
zoeken.addEventListener("click", zoekBalk);
