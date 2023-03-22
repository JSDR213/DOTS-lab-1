/*
 * DOTS: Level Two
 *
 */
// ## Level 2
// Level 2 has 3 moving balls that the user can click on to increment their score. Implement a single click handler to listen for when a user clicks on one of the balls and increment their until they reach 100.

// ### Setup
// We'll be working in `level-two.html` and `level-two.js` for Level 2. Let's start with `level-two.html` to see what HTML elements we'll be working with.

// - In `level-two.html` we now have 3 elements with a class of `js-ball`
// - How might we set all 3 elements to a variable?
// - We also have an h2 tag with a class of `js-score` and a section tag with a class of `level-winner`

// To start we'll need variables for each of these elements along with a variable to track `score` as the balls are `clicked` in `level-two.js`
// - `querySelectorAll()` will output an array of elements with the same class. 
// - It might be useful to set a variable equal to this array
// - `console.log` this variable to see it with your Chrome dev tools

const allBalls = document.querySelectorAll(`.js-ball`)
console.log(allBalls)

let score = 0

const scoreDisplay = document.querySelector(`.js-score`)
const levelWinner = document.querySelector(`.level-winner`)

for (let i = 0; i < allBalls.length; i++) {
    allBalls[i].addEventListener('click', function() {
    console.log(`hi balls`)
    scoreDisplay.innerText = score

    if (score <= 100) {
        score = score + 10
     }
     if (score > 100) {
         console.log(`hi hi ball`)
         levelWinner.style.opacity = 1
         }
     })
    

    }




// ### Functionality
// How might we add a `click` event listener to each ball element within an array?
// - A `loop` may be useful here
// - <details><summary>HINT</summary><p>
  
//   A `for loop` can be used to add an event listener with the same callback function to *each* HTML element in an array output by `querySelectorAll()`
  
//   ```js
//   const elements = document.querySelectorAll('.js-ball');
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', function() {
//        // some logic for updating score and checking for a win here
//     });
//   };
//   ```

//   </p>
//   </details>
// - We'll need several things to happen each time a `ball` element is clicked
//   - The `score` should be incremented up by `10`
//   - The player should see their updated score reflected in the browser
//   - Finally, if the player's score reaches `100`, they should see a winning message and be able to move on to the next level

// Once this logic is completed, we're done with Level 2!

        


