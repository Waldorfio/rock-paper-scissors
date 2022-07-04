arr = ['ROCK', 'PAPER', 'SCISSORS'];

let winMsg = 'You Win!';
let loseMsg = 'You Lose!';
let drawMsg = 'Draw...';

if (handIn != 'ROCK' && handIn != 'PAPER' && handIn != 'SCISSORS') {throw new Error('Invalid input!')};


btnRock.addEventListener('click', clickFunction);
btnPaper.addEventListener('click', clickFunction);
btnScissors.addEventListener('click', clickFunction);

function clickFunction {
    ???.style = 
}





function computerPlay() {
    let handOut = arr[Math.floor((Math.random() * 3))]
    return handOut;
}

function testResult(a, b) {
    handIn = a;
    handOut = b;

    if (handIn == handOut ) {msg = drawMsg};

    if (handIn == arr[0] && handOut == arr[2]) {msg = winMsg};
    if (handIn == arr[0] && handOut == arr[1]) {msg = loseMsg};

    if (handIn == arr[1] && handOut == arr[2]) {msg = loseMsg};
    if (handIn == arr[1] && handOut == arr[0]) {msg = winMsg};

    if (handIn == arr[2] && handOut == arr[1]) {msg = winMsg};
    if (handIn == arr[2] && handOut == arr[0]) {msg = loseMsg};
    return msg;
}

function playRound() {
    let handIn = prompt("Please enter Rock, Paper or Scissors").toUpperCase();
    handOut = computerPlay();
    result = testResult(handIn, handOut);
    alert(result);
}

playRound(handIn);