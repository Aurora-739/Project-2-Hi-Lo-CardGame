# The Hi-Lo Card Game

The Hi-Lo Card GAme is a digital card game of chance. It is designed as a fun pass time for those who enjoy games such as solitairre but don't have enough room (e.g on public transit) or those who want to be able to access a card game at all times (when having internet access) and from any device. The cards are dealt and "shuffled" more randomlly and simpler than a regular deck and so creaes a more random and therefore "fair" game. 

users of this game will learn teh rules from the rules box in the bottom left and can play fro as long as they want. This game can be used as a way to pass time or to simply enjoy. The site is targeted towards adults and teens primarily as the game concept could potentially be less interesting for a younger audience. 

![image](https://github.com/user-attachments/assets/aa5dd9f1-d251-4eed-bebe-7c4f7bbdbc48)
Image of the website _before_ the start button is clicked.

![image](https://github.com/user-attachments/assets/1290693b-fcd9-4dc9-90fa-440075f04387)
Image of the website _after_ the start button (and deck button) are clicked. 

## Features

### Exisiting Features
- **Header**
  - Is featured at the top of the page.
  - It has no physical function (cannot be clicked and does not change whe hovered), instead it informs the user as to what the game ("Hi-Lo ~ Card Game") is and sets the tone for the styling in the rest of the page.
  - The font is playful and contrasts the dark backgorund with a light cream colour.

![image](https://github.com/user-attachments/assets/e423e345-0c9d-42d1-aade-316741ac8198)

- **The Deck**
  - Situated on the left of the screen and varying in size depening on screen size, the deck functions as a deck would in a regular game. It deals the cards when clicked on.
  - Instructions on how to use the deck can be found in the instructions box at the bottom of the screen.
  - This button is functional and interactive once per round. After it is clicked it cannot be clicked again until the hi or lo button has been clicked.
 
  ![image](https://github.com/user-attachments/assets/aae9b1a2-70e7-4d90-914c-9dec9fad9668)

- **Hi / Lo Buttons**


------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**June 18, 2024,** Add Mongo back into template

**June 14, 2024,** Temporarily remove Mongo until the key issue is resolved

**May 28 2024:** Fix Mongo and Links installs

**April 26 2024:** Update node version to 16

**September 20 2023:** Update Python version to 3.9.17.

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
