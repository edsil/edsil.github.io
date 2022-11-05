"use strict";

const cards = [{ name: "Exploder", category: "Game", description: "A game where you plant bombs, explode things and collect coins.", link: "./gameexploder/", image: "./img/gameexploder.jpg" },
{ name: "Pendulum", category: "Simulation", description: "A physics based simulation of a pendulum with multiple arms.", link: "./multiPendulum/", image: "./img/multiPendulum.jpg" },
{ name: "Ants", category: "Simulation", description: "Ants moving around and leaving a colorful trail wherever they go.", link: "./ants/", image: "./img/ants.jpg" },
{ name: "Rubkis", category: "Game / Simulation", description: "A traditional Rubik's Cube for you to scramble and 'magically' rewind.", link: "./rubiks/", image: "./img/rubiks.jpg" },
{ name: "12 Diamonds", category: "Game", description: "12 Diamonds, one is false. Answer 3 questions and I will guess the false one!", link: "./diamonds/", image: "./img/diamonds.jpg" },
{ name: "Mandelbrot Set", category: "Maths / Graphics", description: "Zoom in to discover intricate and beatiful patterns in this famous set.", link: "./fractals/", image: "./img/mandel.jpg" }];

var cardsContainer;
var windowWidth;

window.onload = function () {
    cardsContainer = document.getElementById("contentBox");
    windowWidth = window.innerWidth;
    document.title = "EdSil Experiments";
    window.onresize = updateWindowWidth;
    displayCards();

};

function updateWindowWidth() {
    windowWidth = window.innerWidth;
}

function displayCards() {
    for (const card in cards) {
        addCard(cards[card]);
    }
}

function clearCardsContainer() {
    while (contentBox.firstChild) {
        contentBox.removeChild(contentBox.firstChild);
    }
}

function addCard(card) {
    const newLink = document.createElement("a");
    newLink.href = card.link;
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.id = card.name;
    const cardName = document.createElement("p");
    cardName.className = "cardName";
    cardName.innerHTML = String(card.name);

    const cardImg = document.createElement("img");
    cardImg.className = "cardPic";
    cardImg.src = card.image;

    const cardCategory = document.createElement("p");
    cardCategory.className = "cardCat";
    cardCategory.innerHTML = card.category;

    const cardDescription = document.createElement("p");
    cardDescription.className = "cardDesc";
    cardDescription.innerHTML = card.description;

    newDiv.append(cardName);
    newDiv.append(cardImg);
    newDiv.append(cardCategory);
    newDiv.append(cardDescription);
    newLink.append(newDiv);

    cardsContainer.appendChild(newLink);
    return newLink;
}