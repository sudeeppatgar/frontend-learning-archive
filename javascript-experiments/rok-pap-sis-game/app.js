let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")

//Showing Result
const drawGame=()=>{
msg.innerText="Game was draw try again!";
msg.style.backgroundColor="#081b31";
}
const showwiner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText=`you lose! Comp's ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
//comparing userchoice & compchoice
const playGame=(userchoice)=>{
const compchoice=genCompChoice();
    if(userchoice===compchoice){
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
          userWin=  compchoice==="paper" ? false : true;
        }else if(userchoice==="paper"){
            userWin=compchoice==="scissors" ? false : true;
        }else{
            userWin=compchoice==="rock" ? false : true;
            }
        showwiner(userWin,userchoice,compchoice);
    }
}
//user choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice)
    });
});
//computer choice
const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}