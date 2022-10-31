"use strict";

window.onload = function () {
    loadCardsData();
    cardsContainer = document.getElementById("contentBox");
    searchBox = document.getElementById("searchbox");
    btnConfirm = document.getElementById("confirm");
    windowWidth = window.innerWidth;
    document.title = "Dragonillo v0.3";
    addEvents();
};
const cards = [{ name: "Exploder", category: "Game", description: "A game where you plant bombs, explode things and collect coins.", link: "./gameExploder", image: "" },]
//#region Global Variables
//DOM elements
var searchBox, btnConfirm, cardsContainer;
//Data holders
var windowWidth;
//Helpers
const initRnd = 25; // Number of random cards displayed when loading
var timed = 0; // Used for setTimeOut loading few cards at time
var dispCtn = 0; // Used to count the cards that were already loaded
//#endregion

function addEvents() {
    btnConfirm.onclick = searchAndDisplay;
    searchBox.oninput = searchAndDisplay;
    window.onresize = updateWindowWidth;
}

function updateWindowWidth() {
    windowWidth = window.innerWidth;
}

function searchAndDisplay() {
    clearTimeout(timed);
    dispCtn = 0;
    clearCardsContainer();
    var txt = searchBox.value.toLowerCase();
    var filtered = [];
    for (const [k, v] of Object.entries(cards)) {
        if (String(v.name).toLowerCase().includes(txt)) filtered.push(k);
    }
    displayTimed(filtered);
}

function displayTimed(keys) {
    let i = 0;
    while (i < windowWidth / 85 && dispCtn < keys.length) {
        let name = "./final_assets/final_" + keys[dispCtn] + ".png";
        addCard(name, cards[keys[dispCtn]]);
        dispCtn++;
        i++;
    }
    if (dispCtn < keys.length) {
        timed = setTimeout(displayTimed, 100, keys);
    }
}

function displayRandom(n) {
    var keys = Object.keys(cards);
    var rndKeys = {};
    while (n > 0) {
        let rnd = Math.floor(Math.random() * keys.length);
        if (!rndKeys[rnd]) {
            rndKeys[rnd] = 1;
            n--;
            let filePicName = "./final_assets/final_" + keys[rnd] + ".png";
            addCard(filePicName, cards[keys[rnd]]);
        }
    }
    let fi = "./final_assets/final_" + keys[1] + ".png";
    cardsContainer.appendChild();
}

function clearCardsContainer() {
    while (contentBox.firstChild) {
        contentBox.removeChild(contentBox.firstChild);
    }
}

function addCard(fileName, card) {
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.id = card.id;
    const cardName = document.createElement("p");
    cardName.className = "cardName";
    cardName.innerHTML = String(card.name);

    const cardPic = document.createElement("img");
    cardPic.className = "cardPic";
    cardPic.src = fileName;

    const cardHP = document.createElement("p");
    cardHP.className = "cardHP";
    cardHP.innerHTML = "HP: " + String(card.hp_max);

    const cardATK = document.createElement("p");
    cardATK.className = "cardATK";
    cardATK.innerHTML = "ATK: " + String(card.atk_max);

    const cardDEF = document.createElement("p");
    cardDEF.innerHTML = "DEF: " + String(card.def_max);
    cardDEF.className = "cardDEF";

    newDiv.append(cardName);
    newDiv.append(cardPic);
    newDiv.append(cardHP);
    newDiv.append(cardATK);
    newDiv.append(cardDEF);
    newDiv.onclick = clickCard;

    cardsContainer.appendChild(newDiv);
    return newDiv;
}

function clickCard(e) {
    e.currentTarget.className = e.currentTarget.className == "cardSelected" ? "card" : "cardSelected";
}

function loadCardsData() {
    const arrCards = [];
    cards = [];
    Object.assign(cards, ...arrCards.map((f) => ({ [f.id]: f })));
    displayRandom(initRnd);
}