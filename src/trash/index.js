let winsConfig = 0;
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
    const win = []
    //                  = 3 * 2 = 6
    const totalElements = rows * cols;
    //                      = 2^6 = 64
    const totalCombinations = Math.pow(2, totalElements);
    const combinations = [];

    for (let i = 0; i < totalCombinations; i++) {
        // For example: '000', '001', etc
        const binaryString = i.toString(2).padStart(totalElements, '0');
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
            console.log(matrix[element.symbol]);
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
        for (const line of lines) {
            for (let col = 0; col < line.length; col++) {
                const symbol = matrix[line[col]][col]
                if (symbol === prevSymbol && col === line.length - 1) {
                    isWin = true;
                }
                prevSymbol = symbol
            }

            if (isWin) {
                // console.log('win line #' + lines.indexOf(line), line);
            }
        }

        // console.log('isWin: ', isWin);
        if (isWin) {
            winsConfig++;
        }

    }

    return combinations;
};

// Пример использования
const rows = 2; // Количество строк
const cols = 3; // Количество столбцов
const result = generateCombinations(rows, cols);

console.log('number of combinations: ', result.length);
console.log('wins:', winsConfig);

// Вывод результата
//console.log(JSON.stringify(result, null, 2));
