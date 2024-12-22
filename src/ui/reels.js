import { numRows, numCols } from '../config.js'
import {wait} from '../utils/wait.js'
import {showMessage} from './messageBox.js'
import { debugElement } from './debug.js'

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

export async function showWins(win) {
  console.log('ui/reels.showWins: ', win)
  const winsText = JSON.stringify(win, null, 2)
  const element = document.createElement('div')
  element.innerText = winsText

  debugElement.append(element)

  for (let i = 0; i < win.lines.length; i++) {
    await showWin(win.lines[i], i)
  }
}

async function showWin(line, winIndex) {
  showMessage(`Win #${winIndex}`)
  for (let x = 0; x < numCols; x++) {
    for (const y of line.lineArray) {
        cells[x][y].classList.add('win')
    }
  }


  await wait(1000)

  for (let x = 0; x < numCols; x++) {
    for (const y of line.lineArray) {
        cells[x][y].classList.remove('win')
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

function createCellContentElement(text) {
    const element = document.createElement('div')
    element.innerText = text
    element.className = 'cell-content'
    return element
}
