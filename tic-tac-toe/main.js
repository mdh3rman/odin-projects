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
        return parseInt('' + x + y, 2)
    }

    return { printBoard }
})()

const gameflow = (() => {

    const playermove = (x, y) => {

    }

})()

gameboard.printBoard()

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

X wins!

 */