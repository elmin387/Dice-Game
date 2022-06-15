var scores, roundScore, activePlayer, gamePlaying;

init();

//----------------------------------------------------------------------------
document.querySelector(".btn--roll").addEventListener("click", function() { 
    if(gamePlaying) {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
        
    // 2. Show results
    document.querySelector(".dice").style.display = "block";
    document.querySelector(".dice2").style.display = "block";

    var diceDom =document.querySelector(".dice");
    var dice2Dom = document.querySelector(".dice2");
    
    diceDom.src="dice-"+dice+".png";
    dice2Dom.src="dice-"+dice2+".png";
    // 3. Update round score but only if roll number was NOT 1
    
    if (dice !== 1 && dice2 !== 1) {
        //Add score
        roundScore += dice + dice2;
        document.querySelector("#current--" + activePlayer).textContent = roundScore;
    }
        
        
    else {
        //Next player
        
        nextPlayer();
        
        //document.querySelector(".player--0").classList.remove("player--active");
        //document.querySelector(".player--1").classList.add("player--active");

    }}
});
//------------------------------------------------------------------------------

document.querySelector(".btn--hold").addEventListener("click", function() {
    if (gamePlaying){
    
    
    //ADD current score to global score
    
    scores[activePlayer] += roundScore;
    
    //Update the UI
    document.querySelector("#score--"+ activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector(".inputscore").value;
        
        //is there typed final score:undefined, "", 0, null are coerced to false
        //anything else is coerced to true
    var winningScore;
    
    if(input){
        
        winningScore = input;
    }
        else {
            winningScore = 100;
        }

    //Check if player won the game
    if (scores[activePlayer] >= winningScore) {
        document.querySelector("#name--"+activePlayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".dice2").style.display = "none";
        document.querySelector(".player--"+activePlayer).classList.add("player--winner");
        document.querySelector(".player--"+activePlayer).classList.remove("player.active");
        gamePlaying = false;
    }
    
    else{
        //Next player
        nextPlayer();
    }}
        
});

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById("current--0").textContent = "0";
        document.getElementById("current--1").textContent = "0";
        document.querySelector(".player--0").classList.toggle("player--active");
        document.querySelector(".player--1").classList.toggle("player--active");
        
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".dice2").style.display = "none";
    
}

document.querySelector(".btn--new").addEventListener("click", init);
    
                                                     
                                                     
function init() {
    scores=[0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
document.querySelector(".dice").style.display = "none";
document.querySelector(".dice2").style.display = "none";

document.getElementById("score--0").textContent = "0";
document.getElementById("current--0").textContent ="0";
document.getElementById("score--1").textContent = "0";
document.getElementById("current--1").textContent = "0";
document.getElementById("name--0").textContent = "Player 1";
document.getElementById("name--1").textContent = "Player 2";
document.querySelector(".player--0").classList.remove("player--winner");
document.querySelector(".player--1").classList.remove("player--winner");
document.querySelector(".player--0").classList.remove("player--active");
document.querySelector(".player--1").classList.remove("player--active");
document.querySelector(".player--0").classList.add("player--active");

}
//document.querySelector("#current--" + activePlayer).textContent=dice;
//document.querySelector("#current--"+activePlayer).innerHTML="<em>"+dice+"<em>"; 
//var x=document.querySelector("#score--0").textContent;