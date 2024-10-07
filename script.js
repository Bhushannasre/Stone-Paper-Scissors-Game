let userScore=0;
let computerScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice img");
const msg=document.querySelector("#msg")
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawGame=(userChoice)=>{
    msg.innerText="Game was Draw!"
    msg.style.backgroundColor="yellow";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! your ${userChoice} beats ${compChoice} `
        msg.style.backgroundColor="green";
    }
    else{ console.log("you lose");
        computerScore++;
        compScorePara.innerText=computerScore;
        userScorePara.innerText=userScore;
        msg.innerText= `Your lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red";

    }
   
}
const playGame=(userChoice)=>{
console.log("user choice =", userChoice);
const compChoice=genCompChoice();
//Generate computer choice
if(userChoice===compChoice){
    //draw game
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissiors, paper
       userWin= compChoice==="paper"? false:true;
    }
    else if(userChoice==="paper"){
        //rock scissor
        userWin=compChoice==="scissors"? false:true;
    }
     else{
        //rock,paper
       userWin= compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        if (userChoice) {
            playGame(userChoice);
        } else {
            console.error("User choice is null, check your HTML for correct IDs.");
        }
    });
});