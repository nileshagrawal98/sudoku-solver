import { createContext, useState } from "react";

let initData = [
    [0, 4, 0, 0, 0, 0, 1, 7, 9],
    [0, 0, 2, 0, 0, 8, 0, 5, 4],
    [0, 0, 6, 0, 0, 5, 0, 0, 8],
    [0, 8, 0, 0, 7, 0, 9, 1, 0],
    [0, 5, 0, 0, 9, 0, 0, 3, 0],
    [0, 1, 9, 0, 6, 0, 0, 4, 0],
    [3, 0, 0, 4, 0, 0, 7, 0, 0],
    [5, 7, 0, 1, 0, 0, 2, 0, 0],
    [9, 2, 8, 0, 0, 0, 0, 6, 0],
]

export const MatrixContext = createContext('');

export const MatrixContextProvider = ({ children }) => {
    const [matrix, setMatrix] = useState(initData);

    const handleMatrixChange = (value, i, j) => {
        let num = +value;
        if (num < 0 || num > 9 || Number.isNaN(num)) {
            alert('Only enter numbers between 0 to 9');
            return;
        }
        setMatrix(prev => {
            let mat = [...prev];
            mat[i][j] = +num;
            return mat;
        });
        console.log(matrix)
    }

    return <MatrixContext.Provider value={{ matrix, handleMatrixChange }} >{children}</MatrixContext.Provider>

}