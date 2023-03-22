/*
 * DOTS: Level One
 *
 */
// Now, in `level-one.js` we'll need to create a few necessary variables to start.
// - At the top of `level-one.js` create a `score` variable with an initial value of `0`
// - We'll also need to create variables to allow access to our HTML elements and control their behavior
//   - Create a variable `ball` and assign its value by grabbing the `.js-ball` class with a `querySelector()`
//   - Create a variable `scoreDisplay` and assign its value to the `js-score` class
//   - Create a variable `levelWinner` and assign its value to the `level-winner` class

let score = 0
let ball = document.querySelector(`.js-ball`)
let scoreDisplay = document.querySelector(`.js-score`)
let levelWinner = document.querySelector(`.level-winner`)



// ### Functionality
// - To create the game functionality we want with Level 1, we'll need to start by adding an event listener to the `ball` variable (which is the HTML element with class `js-ball`) we've just created
// - This event listener will need an anonymous callback function to perform the logic of our game when the `ball` is `clicked`
// - At this point, your event listener should look like this:
// ```js
// ball.addEventListener('click', function() {
//   // some logic for updating score and checking for a win here
// });
// ```

ball.addEventListener(`click`, function () {
console.log(`hi ball`)
scoreDisplay.innerText = score

if (score <= 100) {
   score = score + 10
}
if (score > 100) {
    console.log(`hi hi ball`)
    levelWinner.style.opacity = 1
    }
})
    


// For our game to work we'll need to add logic inside the event listener's callback function. What should happen when the `ball` is `clicked`?
// - Make sure to `console.log` with each step to be sure your logic is working properly!
//   - Firstly, we should increment the `score` by `10` 
//   - Next, we'll need to make sure that a player sees that their score has gone up
//   - Set the `innerText` property of `scoreDisplay` equal to `score` to accomplish this
//   - Finally, what needs to happen if a player's `score` reaches `100`?
//   - Write a conditional statement that checks if the player's `score` is `greater than or equal to 100`
//   - If their `score` is at or above `100` we'll need to reflect that by showing the player that they've beaten the level
//   - To show that the player has won, we'll need to target `opacity` within the `style` property of `levelWinner` and set its value to `1`
// - Now when a player interacts with Level 1, their `score` display should update as they click the `ball` and they should have a win message appear when their `score` reaches `100`!

// }

