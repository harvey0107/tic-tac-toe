
I created this Tic Tac Toe application by using HTML, CSS/Sass, JavaScript, and Bootstrap. It allows users to sign-up, sign-in, change password and sign-out of their account. After account signed in they can play Tic Tac Toe against themsevles, track the number of games played. The application notifies the user about successful and failed actions, and updates the page with game results in a win or tie.

I checked suggested schedule, which was very helpful. I was creating functional requests to the API on first three days, and began to plan for start game. I created an array with three item arrays of all the winning combinations'(listed total 8 winning combinations) index values, based on the 0 - 8 array of cells provided in the API's response. I would then push the index values of Xs and Os on the board into new, blank arrays for each player, and test them against any of the possible winning combos.


I only met all requirements in this project, I was planning
to have AI play against to the user, how ever I was not able to do the logic part yet. and also I need to make my project more organized, for example I should split my script forder with two sub-forders one for auth and one for game. so in the future when i come back to my project I able to read and understand my codes right away.

Wireframes:(https://imgur.com/75PQ8TZ)

1.As a new user, I want create a account.
2. As a old user, I want singn in with with my account.
3. As a user, I want see my score, so that I know how many game I won.
4. As a user, I want restart game over and over so that I can play as much as I want.
5. As a user, I want to play with CPU or person, so that I can play with my friends.
6. As a user, I want to pick either O or X when I play, dont need to use one symbol forever.
