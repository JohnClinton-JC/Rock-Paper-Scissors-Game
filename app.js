let userScore = 0;
let comScore = 0;


const choice = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");

const userScorePara =  document.querySelector("#user-score");
const compScorePara =  document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option = ["rock", "paper", "scissore"];
    const ranIdx= Math.floor(Math.random()*3);
    return option[ranIdx];
}

const drawGame = ()=>{
    
    msg.innerText = "Draw"
    msg.style.backgroundColor= "#081b31";
}

const showWinner = (userWin, Userchoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        userScorePara.style.color="green"
        console.log ("you Win")
        msg.innerText= `you win! Your ${Userchoice} Beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        comScore++;
        compScorePara.innerText= comScore;
        compScorePara.style.color="red"
        msg.innerText = `you lose! Your ${compChoice} Beats ${Userchoice}`;
        msg.style.backgroundColor= "red";
    }
}

const playGame = (Userchoice)=>{
   
    const compChoice = genCompChoice();
    

    if(Userchoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(Userchoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if( Userchoice === "paper" ){
            userWin = compChoice === "sciccors"? false: true;
        }
        else{
            userWin = compChoice === "rock"? false: true;
        }

        showWinner(userWin, Userchoice, compChoice);

    }
}

choice.forEach((choice)=>{
    
    choice.addEventListener("click", ()=>{
        const Userchoice = choice.getAttribute("id"); 
        
        playGame(Userchoice);
    });

});

