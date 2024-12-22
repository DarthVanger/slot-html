import {spin} from './machine.js'
import {spinButton} from './ui/spinButton.js'
import {reelsElement, showScreen, showWins, stopWinsAnimation} from './ui/reels.js'
import {messageBoxElement} from './ui/messageBox.js'
import {debugElement, showReels} from './ui/debug.js'

function start() {
  console.log('App start')
  document.body.append(reelsElement)
  document.body.append(messageBoxElement)
  document.body.append(spinButton)
  document.body.append(debugElement)
  spinButton.addEventListener('click', handleSpinClick)
}

function handleSpinClick() {
  stopWinsAnimation()
  const {screen, wins, reels} = spin()
  showScreen(screen)
  showWins(wins)
  showReels(reels)
}

start()
