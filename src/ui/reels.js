export const reelsElement = document.createElement('div')

export const numRows = 2
export const numCols = 3

export const cells = []

createReels()

function createReels() {
  for (let x = 0; x < numCols; x++) {
    const reelElement = createReelElement()
    const reel = []
    for (let y = 0; y < numRows; y++) {
        const cellElement = createCellElement()
        cellElement.innerText = '-'
        reelElement.append(cellElement)
        reel.push(cellElement)
    }
    reelsElement.append(reelElement)
    cells.push(reel)
  }
}

export function showScreen(screen) {
  console.log('reels.showScreen: ', screen)

  for (let x = 0; x < screen.length; x++) {
    for (let y = 0; y < screen[x].length; y++) {
      cells[y][x].innerText =  screen[x][y]
    }
  }
}

function createReelElement() {
    const reelElement = document.createElement('div')
    reelElement.className = 'reel'
    return reelElement
}

function createCellElement() {
    const cellElement = document.createElement('div')
    cellElement.className = 'cell'
    return cellElement
}
