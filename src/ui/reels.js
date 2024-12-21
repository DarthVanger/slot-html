import {wait} from '../utils/wait.js'

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

export async function showWins(wins) {
  console.log('reels.showWins: ', wins)
  for (let win of wins) {
    await showWin(win)
  }
}

async function showWin(win) {
  console.log('reels.showWin: ', win)

  for (const {x, y} of win.positions) {
      cells[x][y].classList.add('win')
  }

  await wait(1000)

  for (const {x, y} of win.positions) {
      cells[x][y].classList.remove('win')
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
