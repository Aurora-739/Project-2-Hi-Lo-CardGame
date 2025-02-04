document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('start');
    const howToPlay = document.getElementById('rulescountBox');
    const playSurf = document.getElementById('playingSurface');
    var imgRep = document.getElementById('blankDeck');

    

    /*MAKE THE RULES BOX AND SCORE VOUNTER VISIBLE WHEN THE START BUTTON IS CLICKED*/
    startButton.addEventListener("click", event => {
        if (howToPlay.style.visibility === "hidden") {
            howToPlay.style.visibility = "visible";
            playSurf.style.visibility = "visible";
        } else {
            howToPlay.style.visibility = "hidden";
            playSurf.style.visibility = "hidden";
        }
    });

    const deckButton = document.getElementById('deckButton');
    const card = document.getElementById('inPlay');
/*MAKE THE DECK DEAL A NEW CARD WHEN DECK IS CLICKED*/
    /*let randomNum = Math.floor(Math.random()*13);
    while (randomNum === 0){
        randomNum = Math.floor(Math.random()*13);
    }*/
    
        let randomNum = 1;
        console.log(randomNum);
        deck.addEventListener("click", event => {
            dealing()
        });

    
    function dealing() {
        if (randomNum === 1){
            Aces()
        } else if(randomNum === 2){
    
        } else if(randomNum === 3) {
    
        } else if(randomNum === 4) {
    
        } else if(randomNum === 5) {
    
        } else if(randomNum === 6) {
    
        } else if(randomNum === 7) {
    
        } else if(randomNum === 8) {
    
        } else if(randomNum === 9) {
    
        } else if(randomNum === 10) {
    
        } else if(randomNum === 11) {
    
        } else if(randomNum === 12) {
    
        }
    }
    

    /* when hi / lo clicked, replace current cener image with new image */

    /* An array for used images, make sure it's checked before continueing onto the showing images section. */

    /* Make the deck button only usable after the start button appears */

    function Aces() {
        let anotherRandomNum = Math.floor(Math.random()*2);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                var imgRep = document.getElementById('blankDeck');
                imgRep.src = "assets/images/Ace-d.JPG";
                document.getElementById("deckButton").disabled = true;
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/Ace-cl.JPG";
                }
            });
        }
    }

    const hiLoButtons = document.getElementsByClassName('hilowButtons');
    const hiButton = document.getElementById('hiButton');
    const loButton = document.getElementById('loButton');

    
    hiButton.addEventListener("click", event => {
            let randomNum = 1; /*Math.floor(Math.random()*2);*/
            console.log(randomNum);
            document.getElementById("deckButton").disabled = false;
            dealing();
    });
});