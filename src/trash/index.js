const priceConfig = [
    {
        symbol: 0,
        prices : [
            {
                elementInARow: 3,
                price: 3
            },
        ],
    },
    {
        symbol: 1,
        prices : [
            {
                elementInARow: 3,
                price: 3
            },
        ],
    },
]
const generateCombinations = (rows, cols) => {
    const wins = []
    //                  = 3 * 2 = 6
    const totalElements = rows * cols;
    //                      = 2^6 = 64
    const totalCombinations = Math.pow(2, totalElements);
    const combinations = [];

    for (let i = 0; i < totalCombinations; i++) {
        // For example: '000', '001', etc
        const binaryString = i.toString(2).padStart(totalElements, '0');
        // 2x3 matrix
        const matrix = [];
        for (let r = 0; r < rows; r++) {
            const row = [];
            for (let c = 0; c < cols; c++) {
                const index = r * cols + c;
                row.push(parseInt(binaryString[index]));
            }
            matrix.push(row);
        }
        combinations.push({ combination: i + 1, matrix });


        priceConfig.forEach(element => {
            element.prices.forEach(price => {})
            const price = matrix[element.symbol];
        })

        const lines = [
            [0, 0, 0], // horizontal
            [1, 1, 1], // horizontal
            [0, 1, 0], // treygolni4ek
            [1, 0, 1], // treygolni4ek

            [0, 1, 1], //
            [1, 0, 0], //

            [0, 0, 1], //
            [1, 1, 0], //
        ];

        let prevSymbol;
        let isWin = false;
        const win = {
          lines: []
        }
        for (const line of lines) {
            for (let col = 0; col < line.length; col++) {
                const symbol = matrix[line[col]][col]
                if (symbol === prevSymbol && col === line.length - 1) {
                    isWin = true;
                }
                prevSymbol = symbol
            }

            if (isWin) {
              const winLine = {
                id: lines.indexOf(line),
                win: 1.5,
                lineArray: line
              }
              win.lines.push(winLine)
              // console.log('win line ' + lines.indexOf(line), winLine);
            }
        }

       if (isWin) {
         wins.push({
           lines: win.lines,
           win: win.lines.reduce((acc, curr) => acc + curr.win, 0),
         });
       }
    }

    return {combinations, wins};
};

// Пример использования
const rows = 2; // Количество строк
const cols = 3; // Количество столбцов
const {combinations, wins } = generateCombinations(rows, cols);

console.log('combinations: ', combinations)
console.log('number of combinations: ', combinations.length);
console.log('wins: ', wins)

let i = -1;
export function spin() {
  i++
  const screen = transpose(combinations[i].matrix)
  return {
    screen,
    win: wins[i],
    reels: [],
  }
}


function transpose(matrix) {
  let newMatrix = []
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (!newMatrix[y]) {
        newMatrix[y] = []
      }
      newMatrix[y][x] = matrix[x][y]
    }
  }
  return newMatrix
}

// Вывод результата
//console.log(JSON.stringify(result, null, 2));
