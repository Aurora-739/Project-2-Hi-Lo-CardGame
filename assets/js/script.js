document.addEventListener("DOMContentLoaded", function () {
    const deckBut = document.getElementById('deckButton');
    const playSurf = document.getElementById('playingSurface');
    const strtBut = document.getElementById('startButton');
    const heading = document.getElementById('title');
    const card = document.getElementById('card-img');


    // ~~~~~ 0 On click show playing surface
    strtBut.addEventListener("click", () =>{
        playSurf.style.visibility = "visible";
    });
    const cardList = [];
    const cardNumList = [];

    // ~~~~~ 1 Choose a card randomly from card_images
    const imageFileNames = [
        'Ace-cl.JPG','Ace-d.JPG','Ace-h.JPG','Ace-Spades.JPG',
        '2-cl.JPG','2-d.JPG','2-h.JPG','2-Sp.JPG',
        '3-cl.JPG','3-d.JPG','3-h.JPG','3-Sp.JPG',
        '4-cl.JPG','4-d.JPG','4-h.JPG','4-Sp.JPG',
        '5-cl.JPG','5-d.JPG','5-h.JPG','5-sp.JPG',
        '6-cl.JPG','6-d.JPG','6-h.JPG','6-sp.JPG',
        '7-cl.JPG','7-d.JPG','7-h.JPG','7-sp.JPG',
        '8-cl.JPG','8-d.JPG','8-h.JPG','8-sp.JPG',
        '9-cl.JPG','9-d.JPG','9-h.JPG','9-sp.JPG',
        '10-cl.JPG','10-d.JPG','10-h.JPG','10-sp.JPG',
        'Jack-cl.JPG','jack-d.JPG','Jack-h.JPG','Jack-sp.JPG',
        'Queen-cl.JPG','Queen-d.JPG','Queen-h.JPG','Queen-sp.JPG',
        'King-cl.JPG','King-d.JPG','King-h.JPG','King-sp.JPG',
    ];
    const numValues = {};
    // Function to hold the assigned numerical value for each card.
    function assignNumValue(){
            ['Ace-cl.JPG','Ace-d.JPG','Ace-h.JPG','Ace-Spades.JPG'].forEach(item => numValues[item] = 1);
            ['2-cl.JPG','2-d.JPG','2-h.JPG','2-Sp.JPG'].forEach(item => numValues[item] = 2);
            ['3-cl.JPG','3-d.JPG','3-h.JPG','3-Sp.JPG'].forEach(item => numValues[item] = 3);
            ['4-cl.JPG','4-d.JPG','4-h.JPG','4-Sp.JPG'].forEach(item => numValues[item] = 4);
            ['5-cl.JPG','5-d.JPG','5-h.JPG','5-sp.JPG'].forEach(item => numValues[item] = 5);
            ['6-cl.JPG','6-d.JPG','6-h.JPG','6-sp.JPG'].forEach(item => numValues[item] = 6);
            ['7-cl.JPG','7-d.JPG','7-h.JPG','7-sp.JPG'].forEach(item => numValues[item] = 7);
            ['8-cl.JPG','8-d.JPG','8-h.JPG','8-sp.JPG'].forEach(item => numValues[item] = 8);
            ['9-cl.JPG','9-d.JPG','9-h.JPG','9-sp.JPG'].forEach(item => numValues[item] = 9);
            ['10-cl.JPG','10-d.JPG','10-h.JPG','10-sp.JPG'].forEach(item => numValues[item] = 10);
            ['Jack-cl.JPG','jack-d.JPG','Jack-h.JPG','Jack-sp.JPG'].forEach(item => numValues[item] = 11);
            ['Queen-cl.JPG','Queen-d.JPG','Queen-h.JPG','Queen-sp.JPG'].forEach(item => numValues[item] = 12);
            ['King-cl.JPG','King-d.JPG','King-h.JPG','King-sp.JPG'].forEach(item => numValues[item] = 13);
    }
    function pickingCard() {
        /**Choose a card randomly from card_images */
        //pick a random one.
        const randomIndex = Math.floor(Math.random()*imageFileNames.length);
        console.log(randomIndex);
        const randomCard = imageFileNames[randomIndex]
        console.log(randomCard);
        //Create a filepath to the image.
        imagePath = `assets/card_images/${randomCard}`;
        console.log(imagePath);

        checkCard(randomCard, cardList) // go to check card function (2)

        // ~~~~~ 2.1 If the card has not been used the card can be displayed (checked in 2)
        //Set it up on the page on click.
        deckBut.addEventListener("click", () =>{
            card.src = imagePath;
            console.log(card.src);
            card.alt = randomCard;
            cardList.push(randomCard);
            cardNumList.push(numValues[randomCard]);
            console.log(cardNumList);
            console.log(cardList);
        });
    }
   
    // ~~~~~ 2 Check if the card value has been used before (this round)
    function checkCard(randomCard, cardList){
        if (cardList.includes(randomCard)) {
            pickingCard() // got to picking card function (1)
        }
    }
    
    // ~~~~~ 3 Find the card's numerical value.


    // ~~~~~ 4 Compare the card to the prev card in list & see if it matches the users hi/lo variable


    // ~~~~~ 5 Log card value & numerical values to list


    // ~~~~~ 6 User picks HI / Lo


    // ~~~~~ 7 Log users Hi / Lo variable choice & loop back to 1

    // ~~~~~ 8 If heading is clicked on send back to main screen.
    heading.addEventListener("click", () =>{
        window.location.href = "http://127.0.0.1:8000/";
    });

    // ~~~~~ 9 Call functions
    function home(){
        assignNumValue()
        pickingCard()
    }
    home()
}

/* * NOTES
*/)