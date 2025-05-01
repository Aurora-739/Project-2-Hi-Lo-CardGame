# The Hi-Lo Card Game

The Hi-Lo Card Game is a digital card game of chance. It is designed as a fun pastime for those who enjoy games such as solitaire but don't have enough room (e.g., on public transit) or those who want to be able to access a card game at all times (when having internet access) and from any device. The cards are dealt and "shuffled" more randomly and simply than a regular deck and so create a more random and therefore "fair" game of probability.

Users of this game will learn the rules from the rules box in the bottom left and can play for as long as they want. This game can be used as a way to pass time or to simply enjoy. The site is targeted towards adults and teens primarily, as the game concept could potentially be less interesting for a younger audience.

![image](https://github.com/user-attachments/assets/b5730e77-0073-4541-a384-6a445745e650)
Image of the website _before_ the start button is clicked.

![image](https://github.com/user-attachments/assets/91457b42-6aeb-4ad5-86bf-5165ef89fc1c)
Image of the website _after_ the start button (and deck button) are clicked. 

## Features

### Exisiting Features
- **Header**
  - It is featured at the top of the page.
  - It informs the user as to what the game ("Hi-Lo ~ Card Game") is and sets the tone for the styling in the rest of the page.
  - The font is playful and contrasts the dark background with a light cream colour.
  - The function of the header is to act as a reset button / go to home button. By clicking it the user is sent back to the home page before the game has begun through [this](https://aurora-739.github.io/Project-2-Hi-Lo-CardGame/) link.
  - This makes it so that the user can easily navigate out of the game page.
  - Also, to note, the title/header is far enough away from the play area that a user won't accidentally click on it.
![image](https://github.com/user-attachments/assets/e423e345-0c9d-42d1-aade-316741ac8198)

- **The Deck**
  - Situated on the left of the screen and varying in size depending on screen size, the deck functions as a deck would in a regular game. It deals the cards when clicked on.
  - Instructions for using the deck can be found in the instructions box at the bottom of the screen.
  - This button is functional and interactive once per round. After it is clicked it cannot be clicked again until the hi or lo button has been clicked.

(image later in the "Play Area" section)

- **Hi / Lo Buttons**
  - These buttons can be seen on the right of the medium to larger screen sizes, on smaller screen sizes they are are underneath the deck and cards as to not take up too much space. They contrast with the background (dark green) by their light cream colour.
  - The function of these buttons is that when the user clicks either one they are guessing whether the next card drawn will be higher or lower than the current card, once clicked the score at the bottom will go up / down depending on if the user is correct or not.
  - This is explained in the "How to Play" box.
  - If the user is incorrect the correct count at the bottom right of the screen will go down (it can go below 0).

![image](https://github.com/user-attachments/assets/33f784d5-9dc5-42a2-a30b-885d476a7541)

- **Play Area**
  - The play area is in the centre of the screen. When the deck is clicked a card (one of the 52) will appear here to display to the user so that they can educate their next guess.
 
  ![image](https://github.com/user-attachments/assets/d376360d-a3de-4033-afbe-768a4fa70bbf)

- **How to Play**
  - Is a box at the bottom of the screen, it contrasts the background by being a cream box so that users can easily see it.
  - The box is at the bottom left and functions as a list of rules for the users to read, helping them grasp the game easily.
 
  ![image](https://github.com/user-attachments/assets/b8f47a23-3823-4970-b5e7-44be83d8d8ea)

- **Score Box**
  - The score box is next to / below the "How to Play" box (depending on screen size) and has three sets of scores: Correct, Wins & Losses.
  - The scores increment depending on the users response i.e. the correct score goes up if the user gets on correct and down is the user gets one wrong, the wins score goes up when the user gets 13 correct and the losses score goes up every time the user runs out of cards (& so loses the game).
  - Is a box at the bottom of the screen, it contrasts the background by being a cream box so that users can easily see it.
![image](https://github.com/user-attachments/assets/525c8c30-8df4-4699-869a-f19715d1a558)


------

## Testing
- I tested the game on different browsers: Firefox, Chrome and Microsoft Edge.
- I confirmed that the header, instructions, buttons, deck and scores are all readable and easy to understand.
- I confirm that the colours and fonts used are easy to read and are accessible by running it through lighthouse devtools.
- I confirm that the project is responsive, looks good and functions on all standard screen sizes using the devtools device bar.

![image](https://github.com/user-attachments/assets/0e3d4b09-4166-4168-b9bf-6bc8e2966daa)

Best practices is lower due to the images being sized incorrectly, however I found that the images being this size was appropriate for the game.
Again, the aspect ratios are off slightly, this is again due to the size I wanted my images to be on the smaller screens, therefore I do not believe this to be detrimental to the site. 
![image](https://github.com/user-attachments/assets/00c0bf59-0683-44aa-a837-9e5c2a9c00ab)

------

### Bugs

**Solved Bugs**
- When I deployed my project to GitHub i dicovered that some of my images would not load.
- I discovered that this was due to them not being updated correctly in the assets folder after I had updated them in the code. The simple fix was to rename each of the seven incorrect card image files to the new and correct name.

- Another bug was that the the correct & hi/lo buttons were not connected correctly. This led to there being issues where the correctCount wpuldn't increment like it was supposed to.
- I fixed this by going through all of the if's and else's in the correlating section until I found that there was an indentation error where the if's and else's were not in the correct indentations leading the code to skip over sections.

### Unfixed Bugs
- No unfixed Bugs

### Validator Testing
- HTML
  - No errors were returned when passing through the official ([W3C](https://validator.w3.org/#validate_by_input)) validator.

- CSS
  - No errors were returned when passing through the official ([Jigsaw](https://jigsaw.w3.org/css-validator/#validate_by_input)) validator.
- JavaScript
  - No warnings were returned when passing through the official ([jshint](https://jshint.com/)) validator.
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
