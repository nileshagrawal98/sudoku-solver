import { SudokuInput } from "./SudokuInput"
import { SudokuSolver } from "./SudokuSolver"
import './mainPage.css'
export const MainPage = () => {

    return <div className="main-page-container">

        <h1>Sudoku Solver</h1>

        <div className="sudoku-container">
            <div>
                <SudokuSolver />
            </div>
            <div>
                <h3>Input Sudoku</h3>
                <SudokuInput />
            </div>
        </div>
    </div>

}