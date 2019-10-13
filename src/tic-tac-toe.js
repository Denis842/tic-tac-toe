class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.playerOne = 'x';
        this.playerTwo = 'o';
        this.playerCurrent = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.playerCurrent;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.playerCurrent;
            this.playerCurrent = this.playerCurrent === 'x' ? 'o' : 'x';
        } 
    }

    isFinished() {
        if (this.getWinner() || this.noMoreTurns()) return true;
        return false;
    }

    getWinner() {
        if ((this.field[0][0] == 'x' && this.field[0][1] == 'x' && this.field[0][2] == 'x') ||
            (this.field[1][0] == 'x' && this.field[1][1] == 'x' && this.field[1][2] == 'x') ||
            (this.field[2][0] == 'x' && this.field[2][1] == 'x' && this.field[2][2] == 'x') ||
            (this.field[0][0] == 'x' && this.field[1][0] == 'x' && this.field[2][0] == 'x') ||
            (this.field[0][1] == 'x' && this.field[1][1] == 'x' && this.field[2][1] == 'x') ||
            (this.field[0][2] == 'x' && this.field[1][2] == 'x' && this.field[2][2] == 'x') ||
            (this.field[0][0] == 'x' && this.field[1][1] == 'x' && this.field[2][2] == 'x') ||
            (this.field[0][2] == 'x' && this.field[1][1] == 'x' && this.field[2][0] == 'x')){
            return 'x';

        }else if((this.field[0][0] == 'o' && this.field[0][1] == 'o' && this.field[0][2] == 'o') ||
            (this.field[1][0] == 'o' && this.field[1][1] == 'o' && this.field[1][2] == 'o') ||
            (this.field[2][0] == 'o' && this.field[2][1] == 'o' && this.field[2][2] == 'o') ||
            (this.field[0][0] == 'o' && this.field[1][0] == 'o' && this.field[2][0] == 'o') ||
            (this.field[0][1] == 'o' && this.field[1][1] == 'o' && this.field[2][1] == 'o') ||
            (this.field[0][2] == 'o' && this.field[1][2] == 'o' && this.field[2][2] == 'o') ||
            (this.field[0][0] == 'o' && this.field[1][1] == 'o' && this.field[2][2] == 'o') ||
            (this.field[0][2] == 'o' && this.field[1][1] == 'o' && this.field[2][0] == 'o')){
            return 'o';
        }
        else {
            return null;
        }
    }

    noMoreTurns() {
        let i = 0;
        for (i = 0; i <3; i++) {
            if (this.field[i].includes(null)) return false;
          }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
