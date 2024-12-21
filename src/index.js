import {spin} from './machine.js'
import {spinButton} from './ui/spinButton.js'
import {reelsElement, showScreen, showWins} from './ui/reels.js'

function start() {
  console.log('App start')
  document.body.append(reelsElement)
  document.body.append(spinButton)
  spinButton.addEventListener('click', handleSpinClick)
}

function handleSpinClick() {
  const {screen, wins} = spin()
  showScreen(screen)
  showWins(wins)
}

start()
