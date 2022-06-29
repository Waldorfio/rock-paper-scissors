
arr = ['Rock', 'Paper', 'Scissors'];
let handIn = prompt("Please enter Rock, Paper or Scissors")
let winMsg = 'You Win!';
let loseMsg = 'You Lose!';
let drawMsg = 'Draw...';

function computerPlay() {
    let handOut = arr[Math.floor((Math.random() * 3))]
    return handOut;
}

function testResult(a, b) {
    handIn = a;
    handOut = b;

    if (handIn == 'Rock' && handOut == 'Scissors') {msg = winMsg};
    if (handIn == 'Rock' && handOut == 'Paper') {msg = loseMsg};
    if (handIn == 'Rock' && handOut == 'Rock') {msg = drawMsg};

    if (handIn == 'Paper' && handOut == 'Scissors') {msg = loseMsg};
    if (handIn == 'Paper' && handOut == 'Paper') {msg = drawMsg};
    if (handIn == 'Paper' && handOut == 'Rock') {msg = winMsg};

    if (handIn == 'Scissors' && handOut == 'Scissors') {msg = drawMsg};
    if (handIn == 'Scissors' && handOut == 'Paper') {msg = winMsg};
    if (handIn == 'Scissors' && handOut == 'Rock') {msg = loseMsg};

    return msg;
}

function playRound(a) {
    handIn = a;
    handOut = computerPlay();
    result = testResult(handIn, handOut);
    alert(result);
}

playRound(handIn);