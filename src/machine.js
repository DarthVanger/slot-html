export function spin() {
  console.log('machine.spin()')

  const screen = [
    [0, 0, 0,],
    [0, 0, 0,],
  ]

  const wins = [
    {
      positions: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}],
    },
    {
      positions: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
    }
  ]

  return {screen, wins}
}
