

const rows = 6;
const cols = 7;

let player = 1;

const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
];

const squares = document.querySelectorAll(".grid div");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const reset = document.querySelector("button");
const result = document.querySelector("#result");

let gameOver = false;

function checkGameover() {
    for (let arr of winningArrays) {
        if (
            squares[arr[0]].classList.contains("p1") &&
            squares[arr[1]].classList.contains("p1") &&
            squares[arr[2]].classList.contains("p1") &&
            squares[arr[3]].classList.contains("p1")
        ) {
            for (let i of arr) {
                squares[i].style.backgroundColor = "#1aff53"
            }
            gameOver = true;
            return "Player 1 Wins"
        } else if (
            squares[arr[0]].classList.contains("p2") &&
            squares[arr[1]].classList.contains("p2") &&
            squares[arr[2]].classList.contains("p2") &&
            squares[arr[3]].classList.contains("p2")
        ) {
            for (let i of arr) {
                squares[i].style.backgroundColor = "#1aff53"
            }
            gameOver = true;
            return "Player 2 Wins"
        }
    }
    return "";
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
        if (!gameOver) {
            console.log("you clicked");
            console.log("row: " + i / 7);
            console.log("column: " + i % 7);

            let r = 0;
            let c = i % 7;
            for (let i = rows - 1; i >= 0; i--) {
                const idx = i * cols + c % cols;

                if (squares[idx].classList.contains("p1") === false && squares[idx].classList.contains("p2") === false) {
                    r = i;
                    if (player === 1) {
                        squares[idx].classList.add("p1");
                        squares[idx].style.backgroundColor = "#4d79ff";
                        player = 2;
                    } else {
                        squares[idx].classList.add("p2");
                        squares[idx].style.backgroundColor = "#ff4d4d";
                        player = 1;
                    }
                    const res = checkGameover();
                    if (res) {
                        result.classList.add("mb-3");
                        result.innerText = res;
                        console.log(res);
                    }
                    else {
                        player1.classList.toggle("p1Select");
                        player2.classList.toggle("p2Select");
                    }



                    break;
                }
            }
        }
    })
}


reset.addEventListener("click", () => {
    location.reload();
})
