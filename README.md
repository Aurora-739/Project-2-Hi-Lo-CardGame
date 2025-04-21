# The Hi-Lo Card Game

The Hi-Lo Card Game is a digital card game of chance. It is designed as a fun pastime for those who enjoy games such as solitaire but don't have enough room (e.g., on public transit) or those who want to be able to access a card game at all times (when having internet access) and from any device. The cards are dealt and "shuffled" more randomly and simply than a regular deck and so create a more random and therefore "fair" game of probability.

Users of this game will learn the rules from the rules box in the bottom left and can play for as long as they want. This game can be used as a way to pass time or to simply enjoy. The site is targeted towards adults and teens primarily, as the game concept could potentially be less interesting for a younger audience.

![image](https://github.com/user-attachments/assets/aa5dd9f1-d251-4eed-bebe-7c4f7bbdbc48)
Image of the website _before_ the start button is clicked.

![image](https://github.com/user-attachments/assets/1290693b-fcd9-4dc9-90fa-440075f04387)
Image of the website _after_ the start button (and deck button) are clicked. 

## Features

### Exisiting Features
- **Header**
  - It is featured at the top of the page.
  - It has no physical function (cannot be clicked and does not change when hovered); instead, it informs the user as to what the game ("Hi-Lo ~ Card Game") is and sets the tone for the styling in the rest of the page.
  - The font is playful and contrasts the dark background with a light cream colour.
  - 
![image](https://github.com/user-attachments/assets/e423e345-0c9d-42d1-aade-316741ac8198)

- **The Deck**
  - Situated on the left of the screen and varying in size depending on screen size, the deck functions as a deck would in a regular game. It deals the cards when clicked on.
  - Instructions on how to use the deck can be found in the instructions box at the bottom of the screen.
  - This button is functional and interactive once per round. After it is clicked it cannot be clicked again until the hi or lo button has been clicked.

- **Hi / Lo Buttons**
  - These buttons can be seen on the right of the screen on all screen sizes. They contrast with the background (dark green) by their light cream colour.
  - The function of these buttons is that when the user clicks either one they are guessing whether the next card drawn will be higher or lower than the current card, once clicked the score at the bottom will go up / down depending on if the user is correct or not.
  - This is explained in the How to Play box.
  - If the user is incorrect an alert box will pop up at the top of the screen to tell the user they got one wrong and the correct count at the bottom right of the screen will go down (it can pass 0).

![image](https://github.com/user-attachments/assets/33f784d5-9dc5-42a2-a30b-885d476a7541)

- **Play Area**
  - The play area is in the centre of the screen. When the deck is clicked a card (one of the 52) will appear here to display to the user so that they can educate their next guess.
 
  ![image](https://github.com/user-attachments/assets/d376360d-a3de-4033-afbe-768a4fa70bbf)

- **How to Play**
  - Is a box at the bottom of the screen, it contrasts the background by being a cream box so that users can easily see it.
  - The box is at the bottom left and functions as a list of rules for the users to read so that they can easily grasp the game.
 
  ![image](https://github.com/user-attachments/assets/b8f47a23-3823-4970-b5e7-44be83d8d8ea)

- **Score Box**
  - The score box is next to / below the How to Play box (depending on screen size) and has three sets of scores: Correct, Wins & Losses.
  - The scores increment depending on the users response i.e. the correct score goes up if the user gets on correct and down is the user gets one wrong, the wins score goes up when the user gets 13 correct and the losses score goes up every time the user gets one wrong.
  - Is a box at the bottom of the screen, it contrasts the background by being a cream box so that users can easily see it.
![image](https://github.com/user-attachments/assets/525c8c30-8df4-4699-869a-f19715d1a558)


------

## Testing
- I tested the game on different browsers: Firefox, Chrome and Microsoft Edge.
- I confirmed that the header, instructions, buttons, deck and scores are all readable and easy to understand.
- I confirm that the colours and fonts used are easy to read and are accessible by running it through lighthouse devtools.
- I confirm that the project is responsive, looks good and functions on all standard screen sizes using the devtools device bar.

![image](https://github.com/user-attachments/assets/2b800606-58f7-4f67-b4b6-d9e8184796cd)
Best practices is so low due to the use of an external image, however I found that this was necessary for my choice of button.
Again, the aspect ratios are off slightly, this is again due to the size I wanted my images to be on the smaller screens, therefore I do not believe this to be detrimental to the site. 
![image](https://github.com/user-attachments/assets/00c0bf59-0683-44aa-a837-9e5c2a9c00ab)

------

### Bugs

**Solved Bugs**
- A bug I solved was that when deployed the image I had used in JavaScript to create an image (a card) in the play area had not worked as I'd hoped. 
- I spent a while researching and looking back at the notes provided by the Code institute as well as external sources (such as Bro Code (a youtube channel) as well as W3Schools and a few stack overflow threads) until I discovered that to do what I wanted I needed to have an image already there and instead to replace it. I did this by having a green image that matches the background of the page and replacing that with a card when the deck is clicked.
  
- Another bug I solved was that when I deployed my project I discovered that the image of the deck was not present.
- After playing around with different images and looking up CSS images I found that the fix that worked more efficiently and frequently was having a link to an external image on the deck button instead of trying to get one from my assets. Although this causes the best practices section on lighthouse have a lower score, ultimately I believe that this was the best option I could come up with at this time.

- Another bug I solved was that the when the card had already been played it would deal a new card, however this card was not equal value to the other card and so would be incorrect.
- This was solved by instead of jumping back to the dealing() function, jumping only back to the function where the second number (the value of the suit) was dealt and continuing from there. 

### Unfixed Bugs
- An unfixed bug is that occasionally when the deck is clicked on two images flash up one after the other. They are of equal value (e.g. both queens), I believe this is due to the jumping back to the suits however I am unsure. This bug does not severely alter gamplay and is usually completely unoticeable.

### Validator Testing
- HTML
  - No errors were returned when passing through the official W3C validator.

- CSS
  - No errors were returned when passing through the official (Jigsaw) validator.

------

## Deployment

- The site was deployed to GitHub Pages. The steps to deploy are as follows:
  - In the GitHub repository navigate to the setting tab.
  - Follow the left bar down until you find pages, click on it.
  - From the source section on the drop-down menu, select the master branch.
  - Click save to deploy the website.
 
  ------

## Credits 

**Content**
- The code for the image button was inspired by and helped by W3Schools (https://www.w3schools.com/howto/howto_css_button_on_image.asp) however changes were made.
- The start button and play area visibility in JS was paralleled using Bro Codes video (though some changes were made) (https://www.youtube.com/watch?v=MkvHPOT4RS8).

**Media**
- The deck image was taken from Google.
