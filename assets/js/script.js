document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('start');
    const howToPlay = document.getElementById('rulescountBox');
    const playSurf = document.getElementById('playingSurface');
    const deckButton = document.getElementById('deckButton');
    const card = document.getElementById('inPlay');
    var imgRep = document.getElementById('blankDeck');



    /*MAKE THE RULES BOX AND SCORE VOUNTER VISIBLE WHEN THE START BUTTON IS CLICKED*/
    startButton.addEventListener("click", event => {
        if (howToPlay.style.visibility === "hidden") {
            howToPlay.style.visibility = "visible";
            playSurf.style.visibility = "visible";
            document.getElementById("loButton").disabled = true;
            document.getElementById("hiButton").disabled = true;
            dealing()
        } else {
            howToPlay.style.visibility = "hidden";
            playSurf.style.visibility = "hidden";

        }
    });

    
    /*MAKE THE DECK DEAL A NEW CARD WHEN DECK IS CLICKED*/

    function dealing() {
        let randomNum = Math.floor(Math.random() * 14);
        while (randomNum === 0) {
        randomNum = Math.floor(Math.random() * 14);
        }
        if (randomNum === 1) {
            Aces()
        } else if (randomNum === 2) {
            Twos()
        } else if (randomNum === 3) {
            Threes()
        } else if (randomNum === 4) {
            Fours()
        } else if (randomNum === 5) {
            Fives()
        } else if (randomNum === 6) {
            Sixes()
        } else if (randomNum === 7) {
            Sevens()
        } else if (randomNum === 8) {
            Eights()
        } else if (randomNum === 9) {
            Nines()
        } else if (randomNum === 10) {
            Tens()
        } else if (randomNum === 11) {
            Jacks()
        } else if (randomNum === 12) {
            Queens()
        } else if (randomNum === 12) {
            Kings()
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Aces ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Aces() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/Ace-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/Ace-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/Ace-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/Ace-Spades.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Twos ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Twos() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/2-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/2-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/2-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/2-Sp.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Threes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Threes() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/3-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/3-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/3-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/3-Sp.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Fours ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Fours() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/4-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/4-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/4-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/4-Sp.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Fives ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Fives() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/5-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/5-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/5-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/5-sp.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Sixes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Sixes() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/6-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/6-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/6-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/6-sp.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Sevens ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Sevens() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/7-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/7-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/7-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/7-sp.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Eights ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Eights() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/8-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/8-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/8-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/8-sp.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Nines ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Nines() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/9-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/9-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/9-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/9-sp.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Tens ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Tens() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/10-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/10-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/10-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/10-sp.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Jacks ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Jacks() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/Jack-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/jack-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/Jack-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/Jack-sp.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Queens ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Queens() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/Queen-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/Queen-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/Queen-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/Queen-sp.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Kings ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function Kings() {
        let anotherRandomNum = Math.floor(Math.random() * 4);
        console.log(anotherRandomNum);
        if (anotherRandomNum === 0) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/King-cl.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 1) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/King-d.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 2) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/King-h.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        } else if (anotherRandomNum === 3) {
            deck.addEventListener("click", event => {
                if (card.style.visibility = "visible") {
                    var imgRep = document.getElementById('blankDeck');
                    imgRep.src = "assets/images/King-sp.JPG";
                    document.getElementById("deckButton").disabled = true;
                    document.getElementById("hiButton").disabled = false;
                    document.getElementById("loButton").disabled = false;
                }
            });
        }
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Hi / Lo Buttons ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    const hiLoButtons = document.getElementsByClassName('hilowButtons');
    const hiButton = document.getElementById('hiButton');
    const loButton = document.getElementById('loButton');
    hiButton.addEventListener("click", event => {
        let randomNum = 1; /*Math.floor(Math.random()*2);*/
        console.log(randomNum);
        document.getElementById("deckButton").disabled = false;
        document.getElementById("loButton").disabled = true;
        document.getElementById("hiButton").disabled = true;
        dealing();
    });
    loButton.addEventListener("click", event => {
        let randomNum = Math.floor(Math.random() * 14);
        while (randomNum === 0) {
            randomNum = Math.floor(Math.random() * 14);
        }
        document.getElementById("deckButton").disabled = false;
        document.getElementById("loButton").disabled = true;
        document.getElementById("hiButton").disabled = true;
        dealing();
    });
});

    /* * NOTES
    * An array for used images, make sure it's checked before continueing onto the showing images section. */