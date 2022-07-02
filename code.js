
arr = ['ROCK', 'PAPER', 'SCISSORS'];

let winMsg = 'You Win!';
let loseMsg = 'You Lose!';
let drawMsg = 'Draw...';


if (handIn != 'ROCK' && handIn != 'PAPER' && handIn != 'SCISSORS') {throw new Error('Invalid input!')};

function computerPlay() {
    let handOut = arr[Math.floor((Math.random() * 3))]
    return handOut;
}

function testResult(a, b) {
    handIn = a;
    handOut = b;

    if (handIn == handOut ) {msg = drawMsg};

    if (handIn == 'ROCK' && handOut == 'SCISSORS') {msg = winMsg};
    if (handIn == 'ROCK' && handOut == 'PAPER') {msg = loseMsg};

    if (handIn == 'PAPER' && handOut == 'SCISSORS') {msg = loseMsg};
    if (handIn == 'PAPER' && handOut == 'ROCK') {msg = winMsg};

    if (handIn == 'SCISSORS' && handOut == 'PAPER') {msg = winMsg};
    if (handIn == 'SCISSORS' && handOut == 'ROCK') {msg = loseMsg};
    return msg;
}

function playRound() {
    let handIn = prompt("Please enter Rock, Paper or Scissors").toUpperCase();
    handOut = computerPlay();
    result = testResult(handIn, handOut);
    alert(result);
}

playRound(handIn);