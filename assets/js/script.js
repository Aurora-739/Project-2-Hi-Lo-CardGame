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
    /**Previous card array */

    /** The Dealing function */
    function dealing() {
        let randomNum = Math.floor(Math.random() * 14);
        while (randomNum === 0) {
            randomNum = Math.floor(Math.random() * 14);
        }
        console.log(randomNum)
        prevCardNum = [];
        console.log(prevCardNum);
       /* if (prevCardNum.length === 13) {
            alert("Well done! You're a quarter of the way to win!");
        } else if (prevCardNum.length === 26) {
            alert("Well done! You're half of the way to win!");
        } else if (prevCardNum.length === 39) {
            alert("Well done! You're three quarters of the way to win!");
        } else if (prevCardNum.length === 52) {
            alert("Well done! You've won!!");
        }*/
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
        } else if (randomNum === 13) {
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
                    if (prevCardNum.includes("Ace-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("Ace-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("Ace-Diamond") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("Ace-Diamond");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("Ace-Heart") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("Ace-Heart");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("Ace-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("Ace-Spades");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("2-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("2-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("2-Diamonds") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("2-Diamonds");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("2-Hearts") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("2-Hearts");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("2-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("2-Spades");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("3-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("3-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("3-Diamonds") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("3-Diamonds");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("3-Hearts") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("3-Hearts");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("3-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("3-Spades");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("4-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("4-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("4-Diamonds") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("4-Diamonds");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("4-Hearts") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("4-Hearts");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("4-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("4-Spades");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("5-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("5-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("5-Diamonds") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("5-Diamonds");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("5-Hearts") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("5-Hearts");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("5-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("5-Spades");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("6-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("6-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("6-Diamonds") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("6-Diamonds");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("6-Hearts") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("6-Hearts");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("6-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("6-Spades");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("7-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("7-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("7-Diamonds") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("7-Diamonds");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("7-Hearts") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("7-Hearts");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("7-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("7-Spades");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("8-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("8-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("8-Diamonds") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("8-Diamonds");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("8-Hearts") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("8-Hearts");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("8-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("8-Spades");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("9-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("9-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("9-Diamonds") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("9-Diamonds");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("9-Hearts") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("9-Hearts");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("9-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("9-Spades");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("10-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("10-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("10-Diamonds") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("10-Diamonds");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("10-Hearts") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("10-Hearts");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("10-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("10-Spades");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("Jacks-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("Jacks-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("Jacks-Diamond") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("Jacks-Diamond");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("Jacks-Hearts") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("Jacks-Hearts");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("Jacks-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("Jacks-Spades");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("Queen-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("Queen-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("Queen-Diamonds") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("Queen-Diamonds");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("Queen-Hearts") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("Queen-Hearts");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("Queen-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("Queen-Spades");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("King-Clubs") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("King-Clubs");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("King-Diamonds") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("King-Diamonds");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("King-Hearts") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("King-Hearts");
                        console.log(prevCardNum)
                    }
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
                    if (prevCardNum.includes("King-Spades") === true) {
                        dealing();
                    } else {
                        prevCardNum.push("King-Spades");
                        console.log(prevCardNum)
                    }
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
        document.getElementById("deckButton").disabled = false;
        document.getElementById("loButton").disabled = true;
        document.getElementById("hiButton").disabled = true;
        dealing();
    });
    loButton.addEventListener("click", event => {
        document.getElementById("deckButton").disabled = false;
        document.getElementById("loButton").disabled = true;
        document.getElementById("hiButton").disabled = true;
        dealing();
    });
});

/* * NOTES
* An array for used images, make sure it's checked before continueing onto the showing images section. */