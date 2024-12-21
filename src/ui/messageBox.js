export const messageBoxElement = document.createElement('div')
messageBoxElement.id = 'message-box'

export function showMessage(text) {
  messageBoxElement.innerText = text
}
