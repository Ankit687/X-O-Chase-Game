let X = "X";
let O = "O";

let boxTexts = document.querySelectorAll('.boxtext');
let positionOfX = Math.floor(Math.random() * 9);
let positionOfO = Math.floor(Math.random() * 9);
if (positionOfO != positionOfX) {
    boxTexts[positionOfX].innerText = X;
    boxTexts[positionOfO].innerText = O;
} else {
    boxTexts[positionOfX].innerText = X;
    if (positionOfO == 8) {
        positionOfO = positionOfO - 1;
        boxTexts[positionOfO].innerText = O;
    }
    else {
        positionOfO = positionOfO + 1;
        boxTexts[positionOfO].innerText = O;
    }
}
console.log("X: " + positionOfX);
console.log("O: " + positionOfO);


document.onkeydown = function(e) {
    // console.log(e.key)
    // console.log(typeof e.key)
    // 38 up
    if (e.key === "ArrowUp") {
        console.log("Up")
        if ((positionOfX - 3) >= 0) {
            if ((positionOfX - 3) == positionOfO) {
                positionOfO = Math.floor(Math.random() * 9);
                while (true) {
                    if ((positionOfX - 3) != positionOfO) {
                        break;
                    }
                    positionOfO = Math.floor(Math.random() * 9);
                }
                boxTexts[positionOfO].innerText = O;
            }
            if (positionOfO != positionOfX)
                boxTexts[positionOfX].innerText = "";
            positionOfX = positionOfX - 3;
            boxTexts[positionOfX].innerText = X;
            console.log("X: " + positionOfX);
            console.log("O: " + positionOfO);
        }
    }
    // 40 down
    if (e.key === "ArrowDown") {
        console.log("Down")
        if ((positionOfX + 3) <= 8) {
            if ((positionOfX + 3) == positionOfO) {
                positionOfO = Math.floor(Math.random() * 9);
                while (true) {
                    if ((positionOfX + 3) != positionOfO) {
                        break;
                    }
                    positionOfO = Math.floor(Math.random() * 9);
                }
                boxTexts[positionOfO].innerText = O;
            }
            if (positionOfO != positionOfX)
                boxTexts[positionOfX].innerText = "";
            positionOfX = positionOfX + 3;
            boxTexts[positionOfX].innerText = X;
            console.log("X: " + positionOfX);
            console.log("O: " + positionOfO);
        }
    }
    // 37 left 
    if (e.key === "ArrowLeft") {
        console.log("Left")
        if (positionOfX != 0 && positionOfX != 3 && positionOfX != 6 && (positionOfX - 1) >= 0) {
            if ((positionOfX - 1) == positionOfO) {
                positionOfO = Math.floor(Math.random() * 9);
                while (true) {
                    if ((positionOfX - 1) != positionOfO) {
                        break;
                    }
                    positionOfO = Math.floor(Math.random() * 9);
                }
                boxTexts[positionOfO].innerText = O;
            }
            if (positionOfO != positionOfX)
                boxTexts[positionOfX].innerText = "";
            positionOfX = positionOfX - 1;
            boxTexts[positionOfX].innerText = X;
            console.log("X: " + positionOfX);
            console.log("O: " + positionOfO);
        }
    }
    // 38 right
    if (e.key === "ArrowRight") {
        console.log("right")
        if (positionOfX != 2 && positionOfX != 5 && positionOfX != 8 && (positionOfX + 1) <= 8) {
            if ((positionOfX + 1) == positionOfO) {
                positionOfO = Math.floor(Math.random() * 9);
                while (true) {
                    if ((positionOfX + 1) != positionOfO) {
                        break;
                    }
                    positionOfO = Math.floor(Math.random() * 9);
                }
                boxTexts[positionOfO].innerText = O; 
            }
            if (positionOfO != positionOfX)
                boxTexts[positionOfX].innerText = "";
            positionOfX = positionOfX + 1;
            boxTexts[positionOfX].innerText = X;
            console.log("X: " + positionOfX);
            console.log("O: " + positionOfO);
        }
    }
}

// add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxtext');
    Array.from(boxTexts).forEach(boxText => {
        boxText.innerText = ""
    })
    positionOfX = Math.floor(Math.random() * 9);
    positionOfO = Math.floor(Math.random() * 9);
    if (positionOfO != positionOfX) {
        boxTexts[positionOfX].innerText = X;
        boxTexts[positionOfO].innerText = O;
    } 
    else {
        boxTexts[positionOfX].innerText = X;
        if (positionOfO == 8) {
            positionOfO = positionOfO - 1;
            boxTexts[positionOfO].innerText = O;
        }
        else {
            positionOfO = positionOfO + 1;
            boxTexts[positionOfO].innerText = O;
        }
    }
    console.log("X: " + positionOfX);
    console.log("O: " + positionOfO);
})