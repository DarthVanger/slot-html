import { numRows, numCols } from '../config.js'
import {wait} from '../utils/wait.js'
import {showMessage} from './messageBox.js'

export const reelsElement = document.createElement('div')

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
  console.log('ui/reels.showScreen: ', screen)

  for (let x = 0; x < screen.length; x++) {
    for (let y = 0; y < screen[x].length; y++) {
      cells[x][y].innerHTML = ''
      cells[x][y].append(createCellContentElement(screen[x][y]))
    }
  }
}

export  function stopWinsAnimation() {
  console.log('stopWinAnimation')
  for (let x = 0; x < numCols; x++) {
    for (let y = 0; y < numRows; y++) {
      cells[x][y].classList.remove('win')
    }
  }
}

export async function showWins(wins) {
  console.log('ui/reels.showWins: ', wins)
  for (let i = 0; i < wins.length; i++) {
    await showWin(wins[i], i)
  }
}

async function showWin(win, winIndex) {
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
