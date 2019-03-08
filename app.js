let playerScore = 0;
let computerScore = 0;
const playerSCore_a = document.getElementById("playerScore");
const computerScore_a = document.getElementById("computerScore");
const playerOption_a = document.getElementById("playerOption");
const computerOption_a = document.getElementById("computerOption");
const gameStatus_a = document.getElementById("gameStatus");
const r_div = document.getElementById("rock");
const p_div = document.getElementById("papper");
const s_div = document.getElementById("scissors");

main();

function getComputerOption(){
    let options = ['r','p','s'];
    return options[Math.floor(Math.random()*3)];
}

function main(){
    r_div.addEventListener('click',function(){
        game('r');
    });

    p_div.addEventListener('click',function(){
        game('p');
    });

    s_div.addEventListener('click',function(){
        game('s');
    }); 
}

function game(playerOption){
    let computerOption = getComputerOption();
    switch (playerOption + computerOption) {
        case 'rs':
        case 'pr':
        case 'sp':{
            playerScore++;
            gameStatus_a.innerHTML = "Venceu";
            playerOption_a.innerHTML = transformToWord(playerOption);
            computerOption_a.innerHTML = transformToWord(computerOption);
            playerSCore_a.innerHTML = playerScore;
            computerScore_a.innerHTML = computerScore;
            break;
        }
        case 'rp':
        case 'ps':
        case 'sr':{
            computerScore++;
            gameStatus_a.innerHTML = "Perdeu";
            playerOption_a.innerHTML = transformToWord(playerOption);
            computerOption_a.innerHTML = transformToWord(computerOption);
            playerSCore_a.innerHTML = playerScore;
            computerScore_a.innerHTML = computerScore;
            break;
        }
        case 'rr':
        case 'pp':
        case 'ss':{
            gameStatus_a.innerHTML = "Empatou";
            playerOption_a.innerHTML = transformToWord(playerOption);
            computerOption_a.innerHTML = transformToWord(computerOption);
            playerSCore_a.innerHTML = playerScore;
            computerScore_a.innerHTML = computerScore;
            break;
        }
    }
}

function transformToWord(option){
    if(option === 'r') return "Pedra";
    if(option === 'p') return "Papel";
    if(option === 's') return "Tesoura";
}