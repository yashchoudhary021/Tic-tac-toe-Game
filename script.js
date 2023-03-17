let isGameOver = false;
let turn = "X"
function ChangeTurn() {
    return turn === 'X' ? "O" : "X"
}
function CheckWin() {
    let boxtext = document.getElementsByClassName('boxContent')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [0, 3, 6],
        [0, 3, 6],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            let over = document.querySelector('.info')
            over.innerText = `Game Over
            ${boxtext[e[0]].innerText} Won 
            `
            isGameOver = true;
            // setTimeout(() => {
            //     location.reload();
            // }, 10000)
        }
    })
}
let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    location.reload();
})
let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector('.boxContent');
    element.addEventListener("click", (e) => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = ChangeTurn();
            CheckWin();
            if (!isGameOver) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})