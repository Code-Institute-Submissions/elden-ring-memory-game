# Elden Ring Memory Game

The Elden Ring memory game is inspired by its original version of the game called "_**Elden Ring**_" developed from "**_From Software_**", therefore all rights go to the video game development company. The concept of this game is designed for children but fun for all ages.
The game is composed of cards which make up the game board where the player will play.
Using cognitive memory skills, the player flips the cards until all the matches are found.
Being primarily inspired by the games from "**_From Software_**", I personalized the memory by adding the chance to lose the game when a certain amount of fails is reached.



## Features

- __Ten clickable cards__

  - The square game board is made up of a total of 10 cards that will flip sides when clicked.
  - The front face of each card is representing a character in the official "_**Elden Ring**_" game.
  - The back face of all cards is the same, depicting the logo of the original game "_**Elden Ring**_". 

Ps: the images are aligned intentionally as follows for the purpose of the screenshot.
![FrontFace](assets/images/docs/card_front.png)

If all matches are made, the game board will display that the player has won the game.
The "_**Reset**_" button is always clickable at anytime during the game, as well as the "_**Rules**_" button.

![PartialPlay](assets/images/docs/partial_play.png)

If no match is found, both cards will flip back over and remain clickable for future guesses.
If the player keeps guessing the wrong card, the game will end, and the game board will display that the player has lost the game.

![PartialPlayDefeat](assets/images/docs/partial_play_defeat.png)
---

- __Two clickable buttons__

  - "_**Reset**_" Button - The reset button will flip all cards back over so the back face / cover of the card is showing. The cards will be then randomized and the two counters will be reset to zero.
  - "_**Rules**_" Button - When the rules button is clicked, a responsive message will appear with the rules and the benefits of the game. To return to the game board and play the game, the player will need to click the "_**Hide**_" button.

![ResetRulesButtons](assets/images/docs/reset_rules_button.png)

- __Modal window__
- Once the game is loaded correctly, a modal window will show up to announce the rules of the game as well as the benefits of playing it.
- The modal window can be closed by clicking on the "_**Hide**_" Button or just by clicking  to the "_**Start**_" Button, which will start the game.

![Rules](assets/images/docs/rules.png)


### Features Left to Implement

- Adding sound effects.

- Adding animation effects.

- To further increase difficulty, levels could be incorporated to encourage older or more advanced users to play by adding two or four more pairs, the game could take on a higher skill level.

- A timer could also help the players to improve their current score, encouraging the players to beat their time in each round.

- Incorporating a "high scores" page would increase interest in the game.


### Bugs Encountered

- To my knowledge there are no major unfixed bugs. The game run and does exactly what it is supposed to do.
- I initially encountered a problem in showing the images on GitHub pages, although they were perfectly displayed on localhost, they still couldn't be seen live on GitHub, and therefore the cards were left totally blank.
I then addressed this issue just by playing with the file path inside my array of cards created in JavaScript, and it worked.

#### Unresolved issues

- When trying to shrink the game window manually to another dimension, the design might look like broken.
In order to resolve this problem, simply click the "_**Reset**_" button on the bottom of the page.
If the problem still persists, refresh the page at the desired responsive dimension.
- Since the card's image is generated as a background image and placed in a "Button" tag, inserting the alt attribute cannot be an option as it is not supported by such a tag.
- It is however, highly suggested to click the "_**Reset**_" button everytime the user wishes to go on a different screen size.
- If the user speeds up the clicking time of each card, this can break the flow. It is suggested to reset the game and start over again.


## Testing

- The website itself was tested on Chrome, Safari and Firefox web browsers using a laptop computer. It was also designed to be responsive on a range of devices, using the Responsive setting on Chrome DevTools to simulate sizes.
- To complete my testing phase, I ran it through Lighthouse in Chrome DevTools, both desktop, and mobile versions.
- Due to some Google Chrome extensions, the tests were performed in Incognito Mode.
  The results are below:

Homepage (desktop)
![Lighthouse](assets/images/docs/lighthouse_test_desktop.jpg)

Homepage (mobile)
![Lighthouse](assets/images/docs/lighthouse_test_mobile.jpg)
---
### Validator Testing

#### HTML - test result
- No errors were found when the code was passed through the official [W3C validator](https://validator.w3.org/). This was tested individually on each page.

![ValidatorHTML](assets/images/docs/html_test.jpg)

---

#### CSS - test result
- The only error found during the validation, has to do with the fact that I have used CSS variables in my code. Overall there are no mayor warnings when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)

![ValidatorCSS](assets/images/docs/css_test.jpg)

---


#### JavaScript - test result
  - No errors were found in the JavaScript file when it was run through the [(JShint) validator](https://jshint.com/) but there were warnings, an excerpt of which is shown in the first screenshot below.

![ValidatorWarningJS](assets/images/docs/js_warnings.png)

---

## Deployment

I deployed this website to GitHub pages on the GitHub hosting platform following the steps below:

- Once in my personal GitHub repository for this project, I clicked the Settings button. From there I clicked "**Pages**" from the left side menu.
- Next under "**_Source_**" I selected the main branch,  refreshed the page and a link to the live site was provided, indicating successful deployment.

![Deployment](assets/images/docs/github_deployment_mockup.jpeg)

The live link can be found here - https://sebhd1.github.io/elden-ring-memory-game/

### To Fork the Repository

To make a copy or ‘fork’ the repository

- Log into GitHub and locate repository
- On the right hand side of the page select the ‘fork’ option to create and copy of the original

![Forking Process Image](assets/images/docs/fork_image.jpg)

### To create a Local Clone

1. under the repository name, click on the ‘code’ tab
2. in the clone box, HTTPS tab, click on the clipboard icon
3. in your IDE open GitBash
4. Changed the current working directory to the location you want the cloned directory to be made
5. Type ‘git clone’ and then paste the URL copied from GitHub
6. press enter and the local clone will be created

![Clonging Process image](assets/images/docs/clone_image.jpg)

---
## Credits

### Content

- The Layout inspiration for the game and the colors pattern were taken from [eldenring.wiki.fextralife.com](https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki)

- I used fonts from [Google Fonts](https://fonts.google.com/) for this project.

- I used Stack Overflow for general troubleshooting and issues with grid spacing.

- Information for the landing page overlay, "Benefits of the game" was taken from the [Walnut Montessori-Preschool Academy](https://www.walnutmontessori-preschool.com/why-kids-should-play-memory) website.

- Feedback and comments from the reviewer of my portfolio project number 1 were taken into account for this project when running tests and identifying and fixing bugs.

- The pictures used for the cards were taken from the official Elden Ring Wiki - [eldenring.wiki.fextralife.com](https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki)

### Acknowledgements
This website was executed and completed as a portfolio 2 Project for the full stack diploma at [Code Institute](https://codeinstitute.net/).

Sebastiano Ballotta, 2022.