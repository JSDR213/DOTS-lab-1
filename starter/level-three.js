/*
 * DOTS: Level Three
 *
 */
// ## Level 3
// Level 3 also has 3 moving balls but of different sizes! Each ball is therefore worth a different amount of points. The number of points the user should get for each ball is saved in side of a data attribute on the ball HTML elements. You can access the data attribute of an element from the event object by looking at the event target's `dataset` property. When the user clicks on a ball, increment their score based on how many points that ball is worth until they reach 100.

// ### Setup
// Like in Level 2, we also have 3 ball elements in Level 3 with a class of `js-ball`, an h2 tag with a `js-score` class, and a section tag with a class of `level-winner`.

// - We'll need to create necessary variables to track player `score` and allow interactions with the HTML elements
// - This can be accomplished in a similar fashion to variables in Level 2

let score = 0

const smallBall = document.querySelectorAll(`[data-increment="20"]`)
console.log(smallBall)
const midBall = document.querySelectorAll(`[data-increment="10"]`)
console.log(midBall)
const bigBall = document.querySelectorAll(`[data-increment="5"]`)
console.log(bigBall)


const scoreDisplay = document.querySelector(`.js-score`)
const levelWinner = document.querySelector(`.level-winner`)

NodeList.prototype.addEventListener = function (event_name, callback, useCapture)
{
    for (i = 0; i < this.length; i++)
    {
      this[i].addEventListener(event_name, callback, useCapture);
    }
}

smallBall.addEventListener(`click`, function () {
    console.log(`hi small ball`)
    scoreDisplay.innerText = score
    if (score <= 100) {
        score = score + 20
     }
     if (score > 100) {
         console.log(`hi hi small ball`)
         levelWinner.style.opacity = 1
         }
    })

midBall.addEventListener(`click`, function () {
        console.log(`hi mid ball`)
        scoreDisplay.innerText = score
        if (score <= 100) {
            score = score + 10
         }
         if (score > 100) {
             console.log(`hi hi mid ball`)
             levelWinner.style.opacity = 1
             }
        })

bigBall.addEventListener(`click`, function () {
            console.log(`hi big ball`)
            scoreDisplay.innerText = score
            if (score <= 100) {
                score = score + 5
             }
             if (score > 100) {
                 console.log(`hi hi big ball`)
                 levelWinner.style.opacity = 1
                 }
            })





    // f (score <= 100) {
    //     score = score + 10
    //  }
    //  if (score > 100) {
    //      console.log(`hi hi ball`)
    //      levelWinner.style.opacity = 1
    //      }

// ### Functionality
// Since we have balls of different sizes in Level 3 that have different values, how to we use that in our logic?
// - First we'll need to add a `click` event listener for each ball with the `js-ball` class
// - Next, when a ball is clicked, we'll need to increment the score by each ball's `data-increment` value
// - This can be accomplished in several ways
//   - <details><summary>HINT 1</summary><p>
  
//     Inside your event listener for each ball, `console.log` the `dataset` property of the ball. 
//     ```js
//     console.log(ball.dataset)
//     ```
//     Notice that the `dataset` property also has an `increment` property. 

//     How might this be used to get the point value of the ball?
//     </p>
//     </details>
//   - <details><summary>HINT 2</summary><p>
  
//     Notice that `data-increment` is an *attribute* of each ball element.
    
//     `getAttribute()` is a useful method that allows us to target HTML element attributes. Try a `console.log` of this method inside of the ball's event listener callback function.

//     ```js
//     console.log(ball.getAttribute('data-increment'))
//     ```