const arr = ['ROCK', 'PAPER', 'SCISSORS'];

const winMsg = 'You Win!';
const loseMsg = 'You Lose!';
const drawMsg = 'Draw...';
let score = 0;

function computerPlay() {
    const handOut = arr[Math.floor((Math.random() * 3))]
    return handOut;
}

function testResult(a, b) {
    const handIn = a;
    const handOut = b;

    if (handIn == handOut ) {msg = drawMsg};

    if (handIn == arr[0] && handOut == arr[2]) {msg = winMsg};
    if (handIn == arr[0] && handOut == arr[1]) {msg = loseMsg};

    if (handIn == arr[1] && handOut == arr[2]) {msg = loseMsg};
    if (handIn == arr[1] && handOut == arr[0]) {msg = winMsg};

    if (handIn == arr[2] && handOut == arr[1]) {msg = winMsg};
    if (handIn == arr[2] && handOut == arr[0]) {msg = loseMsg};
    return msg;
}

function playRound(itemInput) {
    // console.log(itemInput);
    handIn = itemInput;
    handIn = handIn.toUpperCase();
    if (handIn != 'ROCK' && handIn != 'PAPER' && handIn != 'SCISSORS') {throw new Error('Invalid input!')};
    handOut = computerPlay();
    result = testResult(handIn, handOut);
    
    document.getElementById('score').innerHTML = 'Score: ' + score;  // appending results to DOM

    //Running Score
    if (result = 'You Win!') {score = score + 1};
    if (score == 5) {'GAME OVER! YOU WIN'};
    document.getElementById('score').innerHTML = 'Score: ' + score;    // apppending score to DOM
    if (score == 5) {
        document.getElementById('results').innerHTML = '';
        document.getElementById('score').innerHTML = 'GAME OVER... YOU WIN!';
    };
}

// Adding the Event Listeners to the buttons
btnRock.addEventListener('click', () => playRound('ROCK'));
btnPaper.addEventListener('click', () => playRound('PAPER'));
btnScissors.addEventListener('click', () => playRound('SCISSORS'));
