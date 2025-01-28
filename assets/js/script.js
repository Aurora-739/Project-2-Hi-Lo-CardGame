document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('start');
    const howToPlay = document.getElementById('rulescountBox');

    /*MAKE THE RULES BOX AND SCORE VOUNTER VISIBLE WHEN THE START BUTTON IS CLICKED*/
    startButton.addEventListener("click", event => {
        if (howToPlay.style.visibility === "hidden") {
            howToPlay.style.visibility = "visible";
        } else {
            howToPlay.style.visibility = "hidden";
        }
    });

    const deckButton = document.getElementById('deckButton');
    const card = document.getElementById('inPlay');
/*MAKE THE DECK DEAL A NEW CARD WHEN DECK IS CLICKED*/
    deck.addEventListener("click", event => {
        if (card.style.visibility = "visible") {
            let cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
            /*CREATES THE IMAGE*/
            var img = document.createElement("img");
            img.src = "/assets/images/King-d.JPG";
            var div = document.getElementById("inPlay");
            div.appendChild(img);
        }
    });

    
    


});