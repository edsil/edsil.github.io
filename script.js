"use strict";

const cards = [{ name: "Exploder", category: "Game", description: "A game where you plant bombs, explode things and collect coins.", link: "./gameexploder/", image: "./img/gameexploder.jpg" }, { name: "Pendulum", category: "Simulation", description: "A physics based simulation of a pendulum with multiple arms.", link: "./multiPendulum/", image: "./img/multiPendulum.jpg" }];

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
    cardCategory.innerHTML = "Category: " + card.category;

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