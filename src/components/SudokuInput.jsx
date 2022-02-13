import { useContext } from 'react';
import { MatrixContext } from '../context/MatrixContext';
import './sudokuInput.css'

export const SudokuInput = () => {
    const { matrix, handleMatrixChange } = useContext(MatrixContext);

    return <div className="matrix-input-box">
        <div>
            <input value={matrix[0][0]} onChange={(e) => handleMatrixChange(e.target.value, 0, 0)} />
            <input value={matrix[0][1]} onChange={(e) => handleMatrixChange(e.target.value, 0, 1)} />
            <input value={matrix[0][2]} onChange={(e) => handleMatrixChange(e.target.value, 0, 2)} />
            <input value={matrix[0][3]} onChange={(e) => handleMatrixChange(e.target.value, 0, 3)} />
            <input value={matrix[0][4]} onChange={(e) => handleMatrixChange(e.target.value, 0, 4)} />
            <input value={matrix[0][5]} onChange={(e) => handleMatrixChange(e.target.value, 0, 5)} />
            <input value={matrix[0][6]} onChange={(e) => handleMatrixChange(e.target.value, 0, 6)} />
            <input value={matrix[0][7]} onChange={(e) => handleMatrixChange(e.target.value, 0, 7)}></input>
            <input value={matrix[0][8]} onChange={(e) => handleMatrixChange(e.target.value, 0, 8)} />
        </div>

        <div>
            <input value={matrix[1][0]} onChange={(e) => handleMatrixChange(e.target.value, 1, 0)} />
            <input value={matrix[1][1]} onChange={(e) => handleMatrixChange(e.target.value, 1, 1)} />
            <input value={matrix[1][2]} onChange={(e) => handleMatrixChange(e.target.value, 1, 2)} />
            <input value={matrix[1][3]} onChange={(e) => handleMatrixChange(e.target.value, 1, 3)} />
            <input value={matrix[1][4]} onChange={(e) => handleMatrixChange(e.target.value, 1, 4)} />
            <input value={matrix[1][5]} onChange={(e) => handleMatrixChange(e.target.value, 1, 5)} />
            <input value={matrix[1][6]} onChange={(e) => handleMatrixChange(e.target.value, 1, 6)} />
            <input value={matrix[1][7]} onChange={(e) => handleMatrixChange(e.target.value, 1, 7)}></input>
            <input value={matrix[1][8]} onChange={(e) => handleMatrixChange(e.target.value, 1, 8)} />
        </div>

        <div>
            <input value={matrix[2][0]} onChange={(e) => handleMatrixChange(e.target.value, 2, 0)} />
            <input value={matrix[2][1]} onChange={(e) => handleMatrixChange(e.target.value, 2, 1)} />
            <input value={matrix[2][2]} onChange={(e) => handleMatrixChange(e.target.value, 2, 2)} />
            <input value={matrix[2][3]} onChange={(e) => handleMatrixChange(e.target.value, 2, 3)} />
            <input value={matrix[2][4]} onChange={(e) => handleMatrixChange(e.target.value, 2, 4)} />
            <input value={matrix[2][5]} onChange={(e) => handleMatrixChange(e.target.value, 2, 5)} />
            <input value={matrix[2][6]} onChange={(e) => handleMatrixChange(e.target.value, 2, 6)} />
            <input value={matrix[2][7]} onChange={(e) => handleMatrixChange(e.target.value, 2, 7)}></input>
            <input value={matrix[2][8]} onChange={(e) => handleMatrixChange(e.target.value, 2, 8)} />
        </div>

        <div>
            <input value={matrix[3][0]} onChange={(e) => handleMatrixChange(e.target.value, 3, 0)} />
            <input value={matrix[3][1]} onChange={(e) => handleMatrixChange(e.target.value, 3, 1)} />
            <input value={matrix[3][2]} onChange={(e) => handleMatrixChange(e.target.value, 3, 2)} />
            <input value={matrix[3][3]} onChange={(e) => handleMatrixChange(e.target.value, 3, 3)} />
            <input value={matrix[3][4]} onChange={(e) => handleMatrixChange(e.target.value, 3, 4)} />
            <input value={matrix[3][5]} onChange={(e) => handleMatrixChange(e.target.value, 3, 5)} />
            <input value={matrix[3][6]} onChange={(e) => handleMatrixChange(e.target.value, 3, 6)} />
            <input value={matrix[3][7]} onChange={(e) => handleMatrixChange(e.target.value, 3, 7)}></input>
            <input value={matrix[3][8]} onChange={(e) => handleMatrixChange(e.target.value, 3, 8)} />
        </div>

        <div>
            <input value={matrix[4][0]} onChange={(e) => handleMatrixChange(e.target.value, 4, 0)} />
            <input value={matrix[4][1]} onChange={(e) => handleMatrixChange(e.target.value, 4, 1)} />
            <input value={matrix[4][2]} onChange={(e) => handleMatrixChange(e.target.value, 4, 2)} />
            <input value={matrix[4][3]} onChange={(e) => handleMatrixChange(e.target.value, 4, 3)} />
            <input value={matrix[4][4]} onChange={(e) => handleMatrixChange(e.target.value, 4, 4)} />
            <input value={matrix[4][5]} onChange={(e) => handleMatrixChange(e.target.value, 4, 5)} />
            <input value={matrix[4][6]} onChange={(e) => handleMatrixChange(e.target.value, 4, 6)} />
            <input value={matrix[4][7]} onChange={(e) => handleMatrixChange(e.target.value, 4, 7)}></input>
            <input value={matrix[4][8]} onChange={(e) => handleMatrixChange(e.target.value, 4, 8)} />
        </div>

        <div>
            <input value={matrix[5][0]} onChange={(e) => handleMatrixChange(e.target.value, 5, 0)} />
            <input value={matrix[5][1]} onChange={(e) => handleMatrixChange(e.target.value, 5, 1)} />
            <input value={matrix[5][2]} onChange={(e) => handleMatrixChange(e.target.value, 5, 2)} />
            <input value={matrix[5][3]} onChange={(e) => handleMatrixChange(e.target.value, 5, 3)} />
            <input value={matrix[5][4]} onChange={(e) => handleMatrixChange(e.target.value, 5, 4)} />
            <input value={matrix[5][5]} onChange={(e) => handleMatrixChange(e.target.value, 5, 5)} />
            <input value={matrix[5][6]} onChange={(e) => handleMatrixChange(e.target.value, 5, 6)} />
            <input value={matrix[5][7]} onChange={(e) => handleMatrixChange(e.target.value, 5, 7)}></input>
            <input value={matrix[5][8]} onChange={(e) => handleMatrixChange(e.target.value, 5, 8)} />
        </div>

        <div>
            <input value={matrix[6][0]} onChange={(e) => handleMatrixChange(e.target.value, 6, 0)} />
            <input value={matrix[6][1]} onChange={(e) => handleMatrixChange(e.target.value, 6, 1)} />
            <input value={matrix[6][2]} onChange={(e) => handleMatrixChange(e.target.value, 6, 2)} />
            <input value={matrix[6][3]} onChange={(e) => handleMatrixChange(e.target.value, 6, 3)} />
            <input value={matrix[6][4]} onChange={(e) => handleMatrixChange(e.target.value, 6, 4)} />
            <input value={matrix[6][5]} onChange={(e) => handleMatrixChange(e.target.value, 6, 5)} />
            <input value={matrix[6][6]} onChange={(e) => handleMatrixChange(e.target.value, 6, 6)} />
            <input value={matrix[6][7]} onChange={(e) => handleMatrixChange(e.target.value, 6, 7)}></input>
            <input value={matrix[6][8]} onChange={(e) => handleMatrixChange(e.target.value, 6, 8)} />
        </div>

        <div>
            <input value={matrix[7][0]} onChange={(e) => handleMatrixChange(e.target.value, 7, 0)} />
            <input value={matrix[7][1]} onChange={(e) => handleMatrixChange(e.target.value, 7, 1)} />
            <input value={matrix[7][2]} onChange={(e) => handleMatrixChange(e.target.value, 7, 2)} />
            <input value={matrix[7][3]} onChange={(e) => handleMatrixChange(e.target.value, 7, 3)} />
            <input value={matrix[7][4]} onChange={(e) => handleMatrixChange(e.target.value, 7, 4)} />
            <input value={matrix[7][5]} onChange={(e) => handleMatrixChange(e.target.value, 7, 5)} />
            <input value={matrix[7][6]} onChange={(e) => handleMatrixChange(e.target.value, 7, 6)} />
            <input value={matrix[7][7]} onChange={(e) => handleMatrixChange(e.target.value, 7, 7)}></input>
            <input value={matrix[7][8]} onChange={(e) => handleMatrixChange(e.target.value, 7, 8)} />
        </div>

        <div>
            <input value={matrix[8][0]} onChange={(e) => handleMatrixChange(e.target.value, 8, 0)} />
            <input value={matrix[8][1]} onChange={(e) => handleMatrixChange(e.target.value, 8, 1)} />
            <input value={matrix[8][2]} onChange={(e) => handleMatrixChange(e.target.value, 8, 2)} />
            <input value={matrix[8][3]} onChange={(e) => handleMatrixChange(e.target.value, 8, 3)} />
            <input value={matrix[8][4]} onChange={(e) => handleMatrixChange(e.target.value, 8, 4)} />
            <input value={matrix[8][5]} onChange={(e) => handleMatrixChange(e.target.value, 8, 5)} />
            <input value={matrix[8][6]} onChange={(e) => handleMatrixChange(e.target.value, 8, 6)} />
            <input value={matrix[8][7]} onChange={(e) => handleMatrixChange(e.target.value, 8, 7)}></input>
            <input value={matrix[8][8]} onChange={(e) => handleMatrixChange(e.target.value, 8, 8)} />
        </div>

    </div>


}