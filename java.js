function getComputerChoice(){
    const rpsl = ["Rock","Paper","Scissors"];
     
    return rpsl [Math.floor(Math.random()*rpsl.length)];
}

let plaScore = document.querySelector(".plaScore");
let maScore = document.querySelector(".maScore");
const buttons = document.querySelectorAll(".btnN");
const btnReset = document.querySelector(".btnR")
const btnChoice = document.querySelectorAll(".btnN")

btnReset.addEventListener("click", () =>{
    maScore.innerText = 0
    plaScore.innerText = 0
    for ( btnN of btnChoice){
            btnN.classList.remove("btnC")
    }       
})

buttons.forEach((button) => {   
    button.addEventListener('click',() => {
        const computerSelection = getComputerChoice()
        if (computerSelection === "Paper" && button.innerText === "Rock"){
            console.log("You Lose! Paper beats Rock")
            maScore.innerText +++ 1
            if (maScore.innerText == "5"){
                maScore.innerText = "Machine Wins!"
                for (const btnN of btnChoice){
                btnN.classList.add("btnC")}
        
        }}else if (computerSelection === "Scissors" && button.innerText === "Paper"){
            console.log("You Lose! Scissors beats Paper")
            maScore.innerText +++ 1
            if (maScore.innerText == "5"){
                maScore.innerText = "Machine Wins!"
                for (const btnN of btnChoice){
                btnN.classList.add("btnC")}

        }}else if (computerSelection === "Rock" && button.innerText === "Scissors"){
            console.log("You Lose! Rock beats Scissors")
            maScore.innerText +++ 1
            if (maScore.innerText == "5"){
                maScore.innerText = "Machine Wins!"
                for (const btnN of btnChoice){
                btnN.classList.add("btnC")}

        }}else if (computerSelection === button.innerText){
            console.log("Draw!")

        }else if (button.innerText === "Paper" && computerSelection === "Rock"){
            console.log("You Win! Paper beats Rock")
            plaScore.innerText +++ 1
            if (plaScore.innerText == "5"){
                plaScore.innerText = "You Win!"
                for (const btnN of btnChoice){
                btnN.classList.add("btnC")}

        }}else if (button.innerText === "Scissors" && computerSelection === "Paper"){
            console.log("You Win! Scissors beats Paper")
            plaScore.innerText +++ 1
            if (plaScore.innerText == "5"){
                plaScore.innerText = "You Win!"
                for (const btnN of btnChoice){
                btnN.classList.add("btnC")}
            
        }}else if (button.innerText === "Rock" && computerSelection === "Scissors"){
            console.log("You Win! Rock beats Scissors")
            plaScore.innerText +++ 1
            if (plaScore.innerText == "5"){
                plaScore.innerText = "You Win!"
                for (const btnN of btnChoice){
                btnN.classList.add("btnC")}
                
            }
        }
    })    
 })
