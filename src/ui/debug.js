import { numRows, numCols } from '../config.js'
export const debugElement = document.createElement('div')
debugElement.id = 'debug'

const reelsElement = document.createElement('div')
debugElement.innerHTML = `
  <h2>Debug</h2>
  <h3>Reels</h3>
`
debugElement.append(reelsElement)

export function showReels(reels) {
  console.log('debug.showReels: ', reels)
  reelsElement.innerHTML = ''
  for (const reel of reels) {
    const reelElement = document.createElement('div')
    reelElement.className = 'reel'
    for (const symbol of reel) {
      const cellElement = document.createElement('div')
      cellElement.className = 'cell'
      cellElement.innerText = symbol;
      reelElement.append(cellElement)
    }
    reelsElement.append(reelElement)
  }
}
