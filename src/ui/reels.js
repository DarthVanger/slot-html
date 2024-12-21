import {wait} from '../utils/wait.js'
import {showMessage} from './messageBox.js'

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
        cellElement.append(createCellContentElement('-'))
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
      cells[y][x].innerHTML = ''
      cells[y][x].append(createCellContentElement(screen[x][y]))
    }
  }
}

export async function showWins(wins) {
  console.log('reels.showWins: ', wins)
  while (true) {
    for (let i = 0; i < wins.length; i++) {
      await showWin(wins[i], i)
    }
  }
}

async function showWin(win, winIndex) {
  console.log('reels.showWin: ', win)

  showMessage(`Win #${winIndex}`)
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

function createCellContentElement(text) {
    const element = document.createElement('div')
    element.innerText = text
    element.className = 'cell-content'
    return element
}
