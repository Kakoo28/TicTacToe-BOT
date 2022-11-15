const cases = [...document.querySelectorAll('.case')];
const selectDifficulty = document.getElementById('difficulty-select');
const corners = ['c1', 'c3', 'c7', 'c9'];

/* SCORE */
let botScore = 0;
let playerScore = 0;
let nulScore = 0;

let gameStatus = {
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    c9: 0
};

function resetScore() {
    botScore = 0;
    playerScore = 0;
    nulScore = 0;
    document.getElementById('scoreBot').textContent = `${botScore}`;
    document.getElementById('scorePlayer').textContent = `${playerScore}`;
    document.getElementById('scoreNul').textContent = `${nulScore}`;
}

function resetGame() {
    gameStatus = {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,
        c7: 0,
        c8: 0,
        c9: 0
    };
    cases.forEach((c) => {
        c.innerText = '';
    });
}

let botPlayed = true;
function botPlaying() {
    botPlayed = false;
    let freeCases = [];
    for (const c in gameStatus) {
        if (gameStatus[c] === 0) {
            freeCases.push(c);
        }
    }
    switch (selectDifficulty.value) {
        case 'random':
            let randomCase = freeCases[Math.floor(Math.random() * freeCases.length)];
            if (gameStatus[randomCase] === 0) {
                gameStatus[randomCase] = 2;
                document.getElementById(randomCase).textContent = 'O';
                document.getElementById(randomCase).style.color = '#4563fc';
            }
            break;
        case 'normal':
            let selectedCase;
            if ((freeCases.length === 9 ||freeCases.length === 8)) {
                if (freeCases.includes("c5")) {
                    selectedCase = 'c5';
                } else {
                    selectedCase = corners[Math.floor(Math.random() * 4)];
                }
            } else if (
                freeCases.includes("c5") &&
                ((gameStatus.c4 === 2 && gameStatus.c6 === 2) ||
                (gameStatus.c2 === 2 && gameStatus.c8 === 2) ||
                (gameStatus.c1 === 2 && gameStatus.c9 === 2) ||
                (gameStatus.c7 === 2 && gameStatus.c3 === 2))
            ) {
                selectedCase = 'c5';
            } else if (
                freeCases.includes("c1") &&
                ((gameStatus.c2 === 2 && gameStatus.c3 === 2) ||
                (gameStatus.c5 ===  2 && gameStatus.c9 === 2) ||
                (gameStatus.c4 === 2 && gameStatus.c7 === 2))
            ) {
                selectedCase = 'c1';
            } else if (
                freeCases.includes("c9") &&
                ((gameStatus.c3 === 2 && gameStatus.c6 === 2) ||
                (gameStatus.c7 === 2 && gameStatus.c8 === 2) ||
                (gameStatus.c1 === 2 && gameStatus.c5 === 2))
            ) {
                selectedCase = 'c9';
            } else if (
                freeCases.includes("c3") &&
                ((gameStatus.c1 === 2 && gameStatus.c2 === 2) ||
                (gameStatus.c5 === 2 && gameStatus.c7 === 2) ||
                (gameStatus.c6 === 2 && gameStatus.c9 === 2))
            ) {
                selectedCase = 'c3';
            } else if (
                freeCases.includes("c7") &&
                ((gameStatus.c1 === 2 && gameStatus.c4 === 2) ||
                (gameStatus.c5 === 2 && gameStatus.c3 === 2) ||
                (gameStatus.c8 === 2 && gameStatus.c9 === 2))
            ) {
                selectedCase = 'c7';
            } else if (
                freeCases.includes("c2") &&
                ((gameStatus.c1 === 2 && gameStatus.c3 === 2) ||
                (gameStatus.c5 === 2 && gameStatus.c8 === 2))
            ) {
                selectedCase = 'c2';
            }  else if (
                freeCases.includes("c4") &&
                ((gameStatus.c1 === 2 && gameStatus.c7 === 2) ||
                (gameStatus.c5 === 2 && gameStatus.c6 === 2))
            ) {
                selectedCase = 'c4';
            } else if (
                freeCases.includes("c6") &&
                ((gameStatus.c4 === 2 && gameStatus.c5 === 2) ||
                (gameStatus.c3 === 2 && gameStatus.c9 === 2))
            ) {
                selectedCase = 'c6';
            } else if (
                freeCases.includes("c8") &&
                ((gameStatus.c2 === 2 && gameStatus.c5 === 2) ||
                (gameStatus.c7 === 2 && gameStatus.c9 === 2))
            ) {
                selectedCase = 'c8';
            } else if (
                freeCases.includes("c5") &&
                ((gameStatus.c4 === 1 && gameStatus.c6 === 1) ||
                (gameStatus.c2 === 1 && gameStatus.c8 === 1) ||
                (gameStatus.c1 === 1 && gameStatus.c9 === 1) ||
                (gameStatus.c7 === 1 && gameStatus.c3 === 1))
            ) {
                selectedCase = 'c5';
            } else if (
                freeCases.includes('c1') &&
                ((gameStatus.c2 === 1 && gameStatus.c3 === 1) ||
                (gameStatus.c5 === 1 && gameStatus.c9 === 1) ||
                (gameStatus.c4 === 1 && gameStatus.c7 === 1))
            ) {
                selectedCase = 'c1';
            } else if (
                freeCases.includes('c9') &&
                ((gameStatus.c3 === 1 && gameStatus.c6 === 1) ||
                (gameStatus.c7 === 1 && gameStatus.c8 === 1) ||
                (gameStatus.c1 === 1 && gameStatus.c5 === 1))
            ) {
                selectedCase = 'c9';
            } else if (
                freeCases.includes('c3') &&
                ((gameStatus.c1 === 1 && gameStatus.c2 === 1) ||
                (gameStatus.c5 === 1 && gameStatus.c7 === 1) ||
                (gameStatus.c6 === 1 && gameStatus.c9 === 1))
            ) {
                selectedCase = 'c3';
            } else if (
                freeCases.includes('c7') &&
                ((gameStatus.c1 === 1 && gameStatus.c4 === 1) ||
                (gameStatus.c5 === 1 && gameStatus.c3 === 1) ||
                (gameStatus.c8 === 1 && gameStatus.c9 === 1))
            ) {
                selectedCase = 'c7';
            } else if (
                freeCases.includes('c2') &&
                ((gameStatus.c1 === 1 && gameStatus.c3 === 1) ||
                (gameStatus.c5 === 1 && gameStatus.c8 === 1))
            ) {
                selectedCase = 'c2';
            } else if (
                freeCases.includes('c4') &&
                ((gameStatus.c1 === 1 && gameStatus.c7 === 1) ||
                (gameStatus.c5 === 1 && gameStatus.c6 === 1))
            ) {
                selectedCase = 'c4';
            } else if (
                freeCases.includes('c6') &&
                ((gameStatus.c4 === 1 && gameStatus.c5 === 1) ||
                (gameStatus.c3 === 1 && gameStatus.c9 === 1))
            ) {
                selectedCase = 'c6';
            } else if (
                freeCases.includes('c8') &&
                ((gameStatus.c2 === 1 && gameStatus.c5 === 1) ||
                (gameStatus.c7 === 1 && gameStatus.c9 === 1))
            ) {
                selectedCase = 'c8';
            } else {
                selectedCase = freeCases[Math.floor(Math.random() * freeCases.length)];
            }
            gameStatus[selectedCase] = 2;
            document.getElementById(selectedCase).textContent = 'O';
            document.getElementById(selectedCase).style.color = '#4563fc';
            break;
        case 'hard':
            /* SOON */
    }
    setTimeout(()=>{checkWin(true); botPlayed = true;}, 100);
}

function checkWin(bot) {
    if (
        (gameStatus.c1 === gameStatus.c2 && gameStatus.c2 === gameStatus.c3 && gameStatus.c1 > 0) ||
        (gameStatus.c4 === gameStatus.c5 && gameStatus.c5 === gameStatus.c6 && gameStatus.c4 > 0) ||
        (gameStatus.c7 === gameStatus.c8 && gameStatus.c8 === gameStatus.c9 && gameStatus.c7 > 0) ||
        (gameStatus.c1 === gameStatus.c4 && gameStatus.c4 === gameStatus.c7 && gameStatus.c1 > 0) ||
        (gameStatus.c2 === gameStatus.c5 && gameStatus.c5 === gameStatus.c8 && gameStatus.c2 > 0) ||
        (gameStatus.c3 === gameStatus.c6 && gameStatus.c6 === gameStatus.c9 && gameStatus.c3 > 0) ||
        (gameStatus.c1 === gameStatus.c5 && gameStatus.c5 === gameStatus.c9 && gameStatus.c1 > 0) ||
        (gameStatus.c3 === gameStatus.c5 && gameStatus.c5 === gameStatus.c7 && gameStatus.c3 > 0)
    ) {
        if (bot) {
            alert('Le bot à gagné !');
            botScore++;
            document.getElementById('scoreBot').textContent = `${botScore}`;
        } else {
            alert('Tu as gagné !');
            playerScore++;
            document.getElementById('scorePlayer').textContent = `${playerScore}`;
        }
        resetGame();
    } else if (
        gameStatus.c1 > 0 &&
        gameStatus.c2 > 0 &&
        gameStatus.c3 > 0 &&
        gameStatus.c4 > 0 &&
        gameStatus.c5 > 0 &&
        gameStatus.c6 > 0 &&
        gameStatus.c7 > 0 &&
        gameStatus.c8 > 0 &&
        gameStatus.c9 > 0
    ) {
        alert('Match Nul !');
        nulScore++;
        document.getElementById('scoreNul').textContent = `${nulScore}`;
        resetGame();
    }
}

function caseClicked(e) {
    let clickedCase = e.target.id;
    if (gameStatus[clickedCase] === 0 && botPlayed) {
        document.getElementById(clickedCase).textContent = 'X';
        document.getElementById(clickedCase).style.color = '#fc4560';
        gameStatus[clickedCase] = 1;
        setTimeout(()=>{checkWin(false); botPlaying();}, 100);
    } else {
        return false;
    }
}

cases.forEach((c) => {
    c.addEventListener('click', caseClicked);
})
document.getElementById('resetButton').addEventListener('click', resetScore);