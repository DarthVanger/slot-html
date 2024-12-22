import { numRows, numCols, symbols } from './config.js'

let reels = [
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
]

/**
 *
 * Return sliced reels, showing only first `numRows` rows
 * For example for 3x2 game:
 * screen = [
 *   [0, 0],
 *   [0, 0],
 *   [0, 0],
 * ]
 */
function getScreen(reels) {
  return reels.map(reel => reel.slice(0, numRows))
}

console.log('machine. Initial screen: ', screen)

function spinReel(reel) {
  const newReel = [...reel]
  const lastElement = newReel.pop()
  newReel.unshift(lastElement)
  return newReel
}

export function spin() {
  console.log('machine.spin()')

  reels = reels.map(reel => spinReel(reel))
  const screen = getScreen(reels)

  const wins = calculateWins(screen)

  return {screen, wins, reels}
}

function calculateWinForSymbol(symbol, screen) {
  const positions = []
  for (let x = 0; x < numCols; x++) {
    for (let y = 0; y < numRows; y++) {
      if (screen[x][y] === symbol) {
        positions.push({x,y})
      }
    }
  }

  let numInRow = 0
  for (let x = 0; x < numCols; x++) {
    const reelHasSymbol = positions.find(p => p.x === x)
    if (reelHasSymbol) {
      numInRow++
    }
  }

  if (numInRow >= 3) {
    return {
      positions,
      numInRow
    }
  }
}

export function calculateWins(screen) {
  const wins = []

  for (const symbol of symbols) {
    const win = calculateWinForSymbol(symbol, screen)
    if (win) {
      wins.push(win)
    }
  }
  
  return wins
}
