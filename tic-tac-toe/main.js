const gameboard = (() => {
    let rows = 3
    let cols = 3
    let board = ['X', '', 'O', '', 'X', 'O', '', '', 'X']

    const printBoard = () => {
        let printedboard = ''
        for (let i = 0; i < board.length; i++) {
            printedboard = printedboard + board[i] + '\t'
            if ((i + 1) % 3 == 0) {
                printedboard = printedboard + '\n'
            }
        }
        console.log(printedboard)
    }

    function translateCoordToIndex(x, y) {
        return (y * cols) + x
    }

    const makeAMove = (x, y, value) => {
        board[translateCoordToIndex(x, y)] = value
    }

    return { printBoard }
})()

const gameflow = (() => {

    let currentPlayer = 'X'

    const playermove = (x, y) => {

    }

    const updateTurn = () => {
        currentPlayer = (currentPlayer == 'X') ? 'Y' : 'X'
    }

    const currentTurn = () => {
        return currentPlayer
    }

    return { currentTurn, updateTurn }

})()

do {
    gameboard.printBoard()

    console.log("X go first")
} while (true);




/* 
Tic tac toe

X - player
O - player
  00=0   01=1  11=2
[ X ][   ][ O ]
 10=3    11=4  12=5
[   ][ X ][ O ]
  20=6  21=7  22=8
[   ][   ][ X ]

[y][x]

1D Index=(y×3)+x
1D Index equals open paren y cross Width close paren plus x1D Index=(𝑦×Width)+𝑥


X wins!




  00+0=0   01+0=1  02+0=2
[ X ][   ][ O ]
 10+2=3    11+2=4  12+2=5
[   ][ X ][ O ]
  20+4=6  21+4=7  22+4=8
[   ][   ][ X ]

 */