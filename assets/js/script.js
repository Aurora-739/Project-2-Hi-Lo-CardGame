document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('start');
    const howToPlay = document.getElementById('rulescountBox');
    const playSurf = document.getElementById('playingSurface');
    const deckButton = document.getElementById('deckButton');
    const deck = document.getElementById('deck');
    const card = document.getElementById('inPlay');
    var imgRep = document.getElementById('blankDeck');

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
    //pick a random one.
    const randomIndex = Math.floor(Math.random()*imageFileNames.length);
    const randomCard = imageFileNames[randomIndex]
    //Create a filepath to the image.
    imagePath = `assets/card_images/${randomCard}`;
    //Set it up on the page.
    document.getElementById("card-img").src = imagePath;

    // ~~~~~ 2 Check if the card value has been used before (this round)


    // ~~~~~ 3 Find the card's numerical value.


    // ~~~~~ 4 Compare the card to the prev card in list & see if it matches the users hi/lo variable


    // ~~~~~ 5 Log card value & numerical values to list


    // ~~~~~ 6 User picks HI / Lo


    // ~~~~~ 7 Log users Hi / Lo variable choice & loop back to 1
}

/* * NOTES
*/)