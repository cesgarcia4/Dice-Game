document.getElementById("playButton").addEventListener("click", rollDice);
document.getElementById("restartGame").addEventListener("click", restartGame);
document.getElementById("format-button").addEventListener("click", formatAmount);
document.getElementById("changeColorButton").addEventListener("click", changeBackgroundColor);

var totalWinnings = 0;
var betAmount = 0;
var isGameOver = false;
function rollDice() {
    if ( isGameOver || betAmount <= 0 || isNaN(betAmount)) {
        document.getElementById("playMSG").innerHTML = "Cannot bet with no money!";
        return;
    }
    document.getElementById("playButton").disabled = true;
    document.getElementById("format-button").disabled = true;
    document.getElementById("playMSG").innerHTML = "";
    //create a random integer between 1 and 6
    var playerD1 = Math.round(Math.random() * 5) + 1;
    var playerD2 = Math.round(Math.random() * 5) + 1;
    var botD1 = Math.round(Math.random() * 5) + 1;
    var botD2 = Math.round(Math.random() * 5) + 1;
    // Set Image src
    document.getElementById("mydice1").src = "imgs/d" + playerD1 + ".png";
    document.getElementById("mydice2").src = "imgs/d" + playerD2 + ".png";
    document.getElementById("botdice1").src = "imgs/d" + botD1 + ".png";
    document.getElementById("botdice2").src = "imgs/d" + botD2 + ".png";
    var playerSum = playerD1 + playerD2;
    var botSum = botD1 + botD2;
    winOrLoose(playerSum, botSum);
}
function formatAmount() {
    var amount = parseFloat(document.getElementById("amount").value).toFixed(2);
    if(isNaN(amount)){
        document.getElementById("result").innerHTML = "Bet amount: $0";
    }else{
        document.getElementById("result").innerHTML = "Bet amount: $" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    betAmount = amount;
}
function winOrLoose(playerSum, botSum) {
    if (playerSum > botSum) {
        winnings = betAmount * 2;
        document.getElementById("playMSG").innerHTML = "You win $" + winnings.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "!";
    } else if (playerSum < botSum) {
        document.getElementById("playMSG").innerHTML = "You lose!";
    } else {
        document.getElementById("playMSG").innerHTML = "It's a tie! You get your money back.";
    }
    document.getElementById("winOrLoose").innerHTML = "Player rolled " + playerSum + ", bot rolled " + botSum;
}

function restartGame() {
    betAmount = 0;
    isGameOver = false;
    document.getElementById("format-button").disabled = false;
    document.getElementById("playButton").disabled = false;
    document.getElementById("result").innerHTML = "Enter Amount to Bet";
    document.getElementById("playMSG").innerHTML = "";
    document.getElementById("winOrLoose").innerHTML = "";
    document.getElementById("mydice1").src = "imgs/d1.png";
    document.getElementById("mydice2").src = "imgs/d1.png";
    document.getElementById("botdice1").src = "imgs/d1.png";
    document.getElementById("botdice2").src = "imgs/d1.png";

}

let colors = ['LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGreen', 'LightPink', 'LightSeaGreen', 'LightSkyBlue', 'LightSteelBlue'];
let colorIndex = 0;

// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

