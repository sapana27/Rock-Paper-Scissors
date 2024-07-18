let userscore=0;
let compscore=0;
// let userWin= true;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const msgg= document.querySelector("#msgg");


const userScore=document.querySelector("#userScore");
const compScore=document.querySelector("#compScore")


const genCompChoice=() =>{
    const option=["rock", "paper", "scissor"];
    const genIdx=Math.floor(Math.random()*3);
    return option[genIdx];
}
 
const drawGame= (userChoice, compChoice) =>{
    msg.innerText=`Draw game.`
    msgg.innerText=`Both you and the computer choose ${compChoice}`;
    msg.style.backgroundColor="black";
    msgg.style.color="black";
}


const showWinner=(userWin, userChoice, compChoice) =>{
    if(userWin){
        msg.innerText=`You win!.`;
        msgg.innerText=`Your ${userChoice} beat computer's ${compChoice}`;
        msg.style.backgroundColor="green";
        msgg.style.color="green";
        userscore++;
        userScore.innerText=userscore;
    }
    else{
        msg.innerText=`You loose!.`
        msgg.innerText=` Computer's ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor="red";
        msgg.style.color="red";
        compscore++;
        compScore.innerText=compscore;
    }
    
}


const playGame=(userChoice) =>{
    // console.log(userChoice);
    const compChoice=genCompChoice();

    if(userChoice==compChoice){
       drawGame(userChoice, compChoice)
    }
    else{
        let userWin;
        
        if(userChoice==="rock"){
            userWin= compChoice=="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice=="scissor"?false:true;
        }
        else{
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice)=>{
    
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        // console.log(`${userChoice} was clicked`);
        playGame(userChoice);
    })
})