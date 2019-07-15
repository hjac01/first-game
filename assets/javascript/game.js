// VARIABLES
var wins = 0;
var losses = 0;
var targetScore = 0;
var currentScore = 0;
var ruby=0;
var emerald=0;
var orange=0;
var blue=0;

// FUNCTIONS

function generateTargetScore(){
var min = 19;
var max = 120;
var random = Math.floor(Math.random() * (+max - +min)) + +min;
targetScore = random

}


function startGame(){
    generateTargetScore()
    emerald=generateRandomValue()
    ruby=generateRandomValue()
    orange=generateRandomValue()
    blue=generateRandomValue()
    console.log(emerald,ruby,orange,blue)
$(".target-score").text(targetScore);
}
startGame()

function checkScore(){
    if (currentScore > targetScore){
        alert("you lost")
        losses=losses + 1
        $(".Losses").text("Losses:"+losses)
        resetGame()
    }if  (currentScore == targetScore){
        alert ("you win")
        wins=wins + 1
        $(".Wins").text("Wins:"+wins)
        resetGame()
        

    }
} 

function resetGame(){
    generateTargetScore()
    emerald=generateRandomValue()
    ruby=generateRandomValue()
    orange=generateRandomValue()
    blue=generateRandomValue()
$(".target-score").text(targetScore)
currentScore=0;
$(".current-score").text(currentScore);

}

       

function generateRandomValue() {
  const randomNumber = Math.floor(Math.random() * 12) + 1;
  return randomNumber;
}

$("#emerald").click(function() {
    currentScore=currentScore + emerald
    console.log(currentScore)
    $(".current-score").text(currentScore);
    checkScore()
});
$("#orange").click(function() {
    currentScore=currentScore + orange
    $(".current-score").text(currentScore);
    checkScore()
});
$("#blue").click(function() {
    currentScore=currentScore + blue
    $(".current-score").text(currentScore);
    checkScore()
});

$("#ruby").click(function() {
    currentScore=currentScore + ruby
    $(".current-score").text(currentScore);
    checkScore()
});

