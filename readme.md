This quiz is structured as following:

"Question display" is the function responsible on displaying the question. This function will be run again everytime you click next to refresh the question

"Timer" is the time I copy and pasted from the exercise. I changed so if the timer equal or go below 0, it will bring you to the score board.

When Press Start, It will unhide the question and hide itself

When press Next, the question counter will increase and refresh the question. All changes to the button (turning green, red and disabled) will be reset. Question counter is used to track which question the user is on.

"To the Scoreboard" hide everyonething and unhide the score board

////////////////////////////////////////////////////////////////

When you select an answer, the string of the question (a,b,c and d) will be matched with the "myQuestion.answer" in the "myQuestion"

If they match, Button will turn green and disable all other button

if they does not match, button will turn red and take 5 sec out of your timer.

/////////////////////////////////////////////////////////

Score board will append your name and score to the local storage.

Then it will append a list using data from local storage.
