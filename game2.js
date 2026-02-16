let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".buttons button");
const msg=document.querySelector("#pick");


const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const compChoice=()=>{
    let options=["stone","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

} 
const drawGame=(userChoice,compuChoice) =>{
    msg.innerText=`The Game is a DRAW 🤦‍♀️!!! both selected ${compuChoice} and ${userChoice} `;
    msg.style.backgroundColor="#2d3e50";
    msg.style.color="#ffffff";

}
const countScore=()=>{

}
const showWinner=(userWin,userChoice,compuChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win ❤️!! Your ${userChoice} beats the ${compuChoice}`;
        msg.style.backgroundColor="#28a745";
        msg.style.color="white";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`Oh ohh 😓.. The Computer Won!! It's ${compuChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#dc3545";
        msg.style.color="white";
    }

}

const playGame=(userChoice)=>{
    console.log("User choice:",userChoice);
    const compuChoice=compChoice();
    console.log("Computer Choice:",compuChoice);
    if(userChoice===compuChoice) {
        drawGame(userChoice,compuChoice);
    }else{
        let userWin=true;
        if(userChoice==="stone") {
            userWin= compuChoice==="paper" ? false:true;

        }else if(userChoice==="paper"){
            userWin=compuChoice==="scissor"?false:true;
        }else{
            userWin=compuChoice==="rock"?false:true;          
        }
        showWinner(userWin,userChoice,compuChoice);
    }




}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})
