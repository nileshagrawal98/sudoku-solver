import { useContext, useState } from "react"
import { MatrixContext } from "../context/MatrixContext"
import './sudokuSolver.css'

export const SudokuSolver = () => {

    const { matrix } = useContext(MatrixContext);
    const [heading, setHeading] = useState('Click on solve');
    const [headingColor, setHeadingColor] = useState('#D4F1F4');
    const [solvedMat, setSolvedMat] = useState(matrix);


    const matrixSolver = () => {
        done = false;
        setSolvedMat(matrix);
        let tempMat = [];
        matrix.forEach(row => tempMat.push([...row]));

        if (solveSudoku(tempMat, 0, 0)) {
            setHeading('Solved Sudoku');
            setHeadingColor('#6DE1A7');
        } else {
            setHeading("Invalid Sudoku Input, Can't Solve")
            setHeadingColor('coral');
        }
    }

    let done = false;

    function solveSudoku(mat, i, j) {
        setSolvedMat(mat);

        if (done) {
            return;
        }

        if (mat[i][j] !== 0 && j !== 9) {
            j++;
        }

        if (j === 9) {
            i++;
            j = 0;
        }

        if (i >= 9) {
            done = true;
            return true;
        }

        if (mat[i][j] !== 0) {
            if (solveSudoku(mat, i, j + 1)) return true;
        } else {
            for (let n = 1; n <= 9; n++) {
                if (checkPlacement(i, j, n, mat)) {
                    mat[i][j] = n;
                    if (solveSudoku(mat, i, j + 1)) return true;;
                    mat[i][j] = 0;
                }
            }
        }

    }

    function checkPlacement(row, col, n, mat) {
        // Col check
        for (let i = 0; i < 9; i++) {
            if (mat[i][col] === n) {
                return false;
            }
        }

        // Row CheckPlacement
        for (let j = 0; j < 9; j++) {
            if (mat[row][j] === n) {
                return false;
            }
        }

        // console.log(mat.join('\n'), row, col)
        row = Math.floor(row / 3) * 3;
        col = Math.floor(col / 3) * 3;

        // Check in box
        for (let i = row; i < row + 3; i++) {
            for (let j = col; j < col + 3; j++) {
                if (mat[i][j] === n) {
                    return false;
                }
            }
        }


        return true;
    }


    return <div className="matrix-output-box">
        <h3 style={{ color: `${headingColor}` }} >{heading}</h3>
        {
            solvedMat.map((row, i) => <div key={i}>{
                row.map((elem, j) => <span key={j} >{elem}</span>)
            }</div>)
        }
        <button onClick={matrixSolver} className='solve-btn' >Solve</button>
    </div>

}