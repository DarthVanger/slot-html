const numRows = 2

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

  const wins = [
    {
      positions: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}],
    },
    {
      positions: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
    },
    {
      positions: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}],
    },
    {
      positions: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 1}],
    }
  ]

  return {screen, wins}
}
