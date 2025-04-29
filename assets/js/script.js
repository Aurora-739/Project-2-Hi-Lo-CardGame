document.addEventListener("DOMContentLoaded", function () {
    const deckBut = document.getElementById('deckButton');
    const playSurf = document.getElementById('playingSurface');
    const strtBut = document.getElementById('startButton');
    const heading = document.getElementById('title');
    const card = document.getElementById('card-img');
    const loBut = document.getElementById('loButton');
    const hiBut = document.getElementById('hiButton');
    const correctSpan = document.getElementById('correct');
    const winSpan = document.getElementById('wins')
    const lossSpan = document.getElementById('losses')
    const botBox = document.getElementById('rulescountBox');

    // ~~~~~ 0 On click show playing surface
    strtBut.addEventListener("click", () => {
        playSurf.style.visibility = "visible";
        card.style.visibility = "visible";
        botBox.style.visibility = "visible";
        hiBut.disabled = true
        loBut.disabled = true
    });
    // all the lists & guesses (card value, card numberical value, hi & lo)
    const cardList = [];
    const cardNumList = [];
    var guessHi = false;
    var guessLo = false;
    let correctCount = 0;
    let winCount = 0;
    let lossCount = 0;

    // ~~~~~ 1 Choose a card randomly from card_images
    const imageFileNames = [
        'ace-cl.JPG', 'ace-d.JPG', 'ace-h.JPG', 'ace-sp.JPG',
        '2-cl.JPG', '2-d.JPG', '2-h.JPG', '2-sp.JPG',
        '3-cl.JPG', '3-d.JPG', '3-h.JPG', '3-sp.JPG',
        '4-cl.JPG', '4-d.JPG', '4-h.JPG', '4-sp.JPG',
        '5-cl.JPG', '5-d.JPG', '5-h.JPG', '5-sp.JPG',
        '6-cl.JPG', '6-d.JPG', '6-h.JPG', '6-sp.JPG',
        '7-cl.JPG', '7-d.JPG', '7-h.JPG', '7-sp.JPG',
        '8-cl.JPG', '8-d.JPG', '8-h.JPG', '8-sp.JPG',
        '9-cl.JPG', '9-d.JPG', '9-h.JPG', '9-sp.JPG',
        '10-cl.JPG', '10-d.JPG', '10-h.JPG', '10-sp.JPG',
        'Jack-cl.JPG', 'Jack-d.JPG', 'Jack-h.JPG', 'Jack-sp.JPG',
        'Queen-cl.JPG', 'Queen-d.JPG', 'Queen-h.JPG', 'Queen-sp.JPG',
        'King-cl.JPG', 'King-d.JPG', 'King-h.JPG', 'King-sp.JPG',
    ];
    const numValues = [];
    // Function to hold the assigned numerical value for each card.
    // ~~~~~ 3 Find the card's numerical value.
    function assignNumValue() {
        ['ace-cl.JPG', 'ace-d.JPG', 'ace-h.JPG', 'ace-sp.JPG'].forEach(item => numValues[item] = 1);
        ['2-cl.JPG', '2-d.JPG', '2-h.JPG', '2-sp.JPG'].forEach(item => numValues[item] = 2);
        ['3-cl.JPG', '3-d.JPG', '3-h.JPG', '3-sp.JPG'].forEach(item => numValues[item] = 3);
        ['4-cl.JPG', '4-d.JPG', '4-h.JPG', '4-sp.JPG'].forEach(item => numValues[item] = 4);
        ['5-cl.JPG', '5-d.JPG', '5-h.JPG', '5-sp.JPG'].forEach(item => numValues[item] = 5);
        ['6-cl.JPG', '6-d.JPG', '6-h.JPG', '6-sp.JPG'].forEach(item => numValues[item] = 6);
        ['7-cl.JPG', '7-d.JPG', '7-h.JPG', '7-sp.JPG'].forEach(item => numValues[item] = 7);
        ['8-cl.JPG', '8-d.JPG', '8-h.JPG', '8-sp.JPG'].forEach(item => numValues[item] = 8);
        ['9-cl.JPG', '9-d.JPG', '9-h.JPG', '9-sp.JPG'].forEach(item => numValues[item] = 9);
        ['10-cl.JPG', '10-d.JPG', '10-h.JPG', '10-sp.JPG'].forEach(item => numValues[item] = 10);
        ['Jack-cl.JPG', 'Jack-d.JPG', 'Jack-h.JPG', 'Jack-sp.JPG'].forEach(item => numValues[item] = 11);
        ['Queen-cl.JPG', 'Queen-d.JPG', 'Queen-h.JPG', 'Queen-sp.JPG'].forEach(item => numValues[item] = 12);
        ['King-cl.JPG', 'King-d.JPG', 'King-h.JPG', 'King-sp.JPG'].forEach(item => numValues[item] = 13);
        return numValues
    }
    function pickingCard() {
        /**Choose a card randomly from card_images */
        //pick a random one.
        const randomIndex = Math.floor(Math.random() * imageFileNames.length);
        console.log(randomIndex);
        const randomCard = imageFileNames[randomIndex];
        console.log(randomCard);
        if (cardList.includes(randomCard)) { // ~~~~~ 2 Check if the card value has been used before (this round)
            console.log("card checked");
            return pickingCard(); // got to picking card function (1) 
        } else {
            console.log("card is fine");
            imagePath = `assets/card_images/${randomCard}`; //Create a filepath to the image.
            console.log(imagePath);
            return randomCard;
        }

    }

    // ~~~~~ 2.1 If the card has not been used the card can be displayed (checked in 2)
    //Set it up on the page on click.
    // ~~~~~ 5 Log card value & numerical values to list
    deckBut.addEventListener("click", () => {
        endgame()
        let randomCard = pickingCard()
        let numValues = assignNumValue()
        card.src = imagePath;
        console.log(card.src);
        card.alt = randomCard;
        cardList.push(randomCard);
        cardNumList.push(numValues[randomCard]);
        console.log(cardNumList);
        console.log(cardList);
        deckBut.disabled = true;
        hiBut.disabled = false;
        loBut.disabled = false;

        // if the number of cards in the list is more than or equal to 2, checks to see if player has won
        if (cardNumList.length >= 2) {
            const prevCard = cardNumList[cardNumList.length - 2];
            const currentCard = cardNumList[cardNumList.length - 1];

            if (currentCard > prevCard) { // ~~~~~ 4 Compare the card to the prev card in list & see if it matches the users hi/lo variable
                if (guessHi === true) {
                    correctCount++;
                    console.log(correctCount)
                    correctSpan.textContent = correctCount;
                    guessHi = false;
                    console.log("Yay! That's correct!");
                    thirteen(cardList, cardNumList, correctCount);
                } else if (guessLo === true) {
                    correctCount--;
                    console.log(correctCount)
                    correctSpan.textContent = correctCount;
                    guessLo = false;
                    console.log("Oh no! That's wrong!");
                    thirteen(cardList, cardNumList, correctCount);
                }
            }
            if (currentCard < prevCard) {
                if (guessHi === true) {
                    correctCount--;
                    console.log(correctCount)
                    correctSpan.textContent = correctCount;
                    guessLo = false;
                    console.log("Oh no! That's wrong!");
                    thirteen(cardList, cardNumList, correctCount);
                } else if (guessLo === true) {
                    correctCount++;
                    console.log(correctCount)
                    correctSpan.textContent = correctCount;
                    guessHi = false;
                    console.log("Yay! That's correct!");
                    thirteen(cardList, cardNumList, correctCount);
                }
            }
            if (currentCard === prevCard) {
                if (guessHi === true) {
                    guessHi = false;
                    console.log("Same value!");
                    thirteen(cardList, cardNumList, correctCount);
                } else if (guessLo === true) {
                    guessHi = false;
                    console.log("Same Value!");
                    thirteen(cardList, cardNumList, correctCount);
                }
            }
        }
    });

    // ~~~~~ 6 User picks HI / Lo
    hiBut.addEventListener("click", () => {
        console.log("hi button has been clicked")
        guessHi = true;
        hiBut.disabled = true;
        loBut.disabled = true;
        deckBut.disabled = false;
    });

    loBut.addEventListener("click", () => {
        console.log("lo button has been clicked")
        guessLo = true;
        hiBut.disabled = true;
        loBut.disabled = true;
        deckBut.disabled = false;
    });

    // when you hit 13, win a round 
    function thirteen(cardList, cardNumList, correctCount) {
        if (correctCount == 13) {
            alert("You have won a round! The game will reset for you!")
            cardList.length = 0;
            cardNumList.length = 0;
            correctSpan.textContent = 0;
            correctCount = 0;
            winCount++;
            winSpan.textContent = winCount;
        }
    }
    // endgame
    function endgame() {
        if (cardNumList.length >= 52) {
            alert("You have run out of cards! This ends the game! I hope you had fun!")
            cardList.length = 0;
            cardNumList.length = 0;
            correctSpan.textContent = 0;
            correctCount = 0;
            lossCount++;
            lossSpan.textContent = lossCount;
        }
    }

    // ~~~~~ 7 Log users Hi / Lo variable choice & loop back to 1

    // ~~~~~ 8 If heading is clicked on send back to main screen.
    heading.addEventListener("click", () => {
        window.location.href = "http://127.0.0.1:8000/";
    });

});

/* * NOTES
*/