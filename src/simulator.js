import {spin} from './machine.js'
const iterationsNum = 1

for (let iteration = 0; iteration < iterationsNum; iteration++) {
  const {screen, wins} = spin()
  console.log('Screen:')
  console.table(screen)
  console.log('Wins:')
  console.log(wins)
}


