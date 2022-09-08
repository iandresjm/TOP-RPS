function getComputerChoice(){
    const rpsl = ["Rock","Paper","Scissors"];
     
    return rpsl [Math.floor(Math.random()*rpsl.length)];
}

function playRound (prompt) {
    
    let playerText = window.prompt("Type: Rock, Paper or Scissors");
    const playerSelection =playerText[0].toUpperCase() + playerText.slice(1);

    const computerSelection = getComputerChoice();

     if (computerSelection === "Paper" && playerSelection === "Rock"){
        console.log("You Lose! Paper beats Rock")
     
     }
     
}

function game (){
    
    for (let i = 0; i < 5; i++){
        playRound()

    }

}