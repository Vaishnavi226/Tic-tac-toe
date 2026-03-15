let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "♚";
let gameActive = true;

const statusText = document.getElementById("status");

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function makeMove(index) {

    if(board[index] !== "" || !gameActive){
        return;
    }

    board[index] = currentPlayer;
    document.getElementById("cell-" + index).innerText = currentPlayer;

    checkWinner();

    if(gameActive){
        currentPlayer = currentPlayer === "♚" ? "♛" : "♚";
        statusText.innerText = "Player " + currentPlayer + "'s Turn";
    }
}

function checkWinner(){

    for(let pattern of winPatterns){

        let a = board[pattern[0]];
        let b = board[pattern[1]];
        let c = board[pattern[2]];

        if(a === "" || b === "" || c === ""){
            continue;
        }

        if(a === b && b === c){

            document.getElementById("cell-" + pattern[0]).classList.add("winning");
            document.getElementById("cell-" + pattern[1]).classList.add("winning");
            document.getElementById("cell-" + pattern[2]).classList.add("winning");

            statusText.innerText = "Player " + currentPlayer + " Wins!";
            gameActive = false;
            return;
        }
    }

    if(!board.includes("")){
        statusText.innerText = "It's a Draw!";
        gameActive = false;
    }
}

function resetGame(){

    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "♚";
    gameActive = true;

    for(let i = 0; i < 9; i++){
        document.getElementById("cell-" + i).innerText = "";
        document.getElementById("cell-" + i).classList.remove("winning");
    }

    statusText.innerText = "Player ♚'s Turn";
}