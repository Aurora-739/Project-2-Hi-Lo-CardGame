document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('start');
    const howToPlay = document.getElementById('rulescountBox');

    startButton.addEventListener("click", event => {
        if (howToPlay.style.visibility === "hidden") {
            howToPlay.style.visibility = "visible";
        } else {
            howToPlay.style.visibility = "hidden";
        }
    });

    const deck = document.getElementById('deckButton');
    const card = document.getElementById('inPlay');
    
    deck.addEventListener("click", event => {
        img = document.createElement("img")
        img.src = "/assets/images/King-d.JPG";
        img.alt = "King of diamonds";
    });
    


});