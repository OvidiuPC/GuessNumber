const again = document.querySelector('.again');
const inputGuess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
const number = document.querySelector('.number')
const body = document.getElementsByTagName('body')[0];

console.log(body)


checkBtn.addEventListener('click', checkNumber)
again.addEventListener('click', () => {
    message.innerText = 'Start guessing...';
    body.style.backgroundColor = '#222';
    random = Math.floor(Math.random() * 20) + 1
    score.innerText = 10;
    click = 10;
    checkBtn.disabled = false;
    checkBtn.disabled = false;
    number.innerText = "?"

    console.log(random)
})

let random = Math.floor(Math.random() * 20) + 1
let click = 10;
let currentScore = 0;

function checkNumber() {
    let inputValue = Number(inputGuess.value, 10);
    //    console.log(typeof inputValue)

    click = click - 1
    score.innerText = click
    let calcScore = (click * random) + (click + random); //=>
   /* What I can't understant it's why if the calcScore from outside of function
      the highscore don't replace the smaller score with other more bigger  */
    
    //If you consume all trys will lose
    if (click < 1) {
        message.innerText = 'You losee! Try again!'
        checkBtn.disabled = true;
        checkBtn.style.backgroundColor = 'yellow'
        body.style.backgroundColor = 'red';
    }
    //Empty input || small and heigh value of 20
    if (!inputValue || inputValue > 20 || inputValue < 1) {
        message.innerText = 'Please chose a number between 1 and 20'
        
    }
    //Our number match with random number WIN!!!
    else if (inputValue === random) {
        message.innerText = 'Congratulation You Guess Number! Try again for a higher score';
        // highScore.innerText = currentScore;//IF THIS PART WILL BE HERE THE HIGHSCORE WILL REMAIN THE SAME
        number.innerText = inputValue;
        checkBtn.disabled = true;
        body.style.backgroundColor = 'green';
        //* If the current score will be more high that last the new current score 'll take the highest value 
        if (calcScore > currentScore) {
            currentScore = calcScore;
            highScore.innerText = calcScore;
        }
    }
    //A smaller number that the random number
    else if (inputValue < random) {
        message.innerText = `You're number is to low!`
    }
    //Bigger number that the random number
    else if (inputValue > random) {
        message.innerText = `You're number is to hight!`
    }
}




console.log(random)