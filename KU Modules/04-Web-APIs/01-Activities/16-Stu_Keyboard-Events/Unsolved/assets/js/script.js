function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector('#key').textContent = event.key
  document.querySelector('#code').textContent = event.code
  document.querySelector('#status').textContent = 'KEYDOWN Event';
}

function keyupAction() {
  document.querySelector('#status').textContent = 'KEYUP Event';
  document.querySelector('#key').textContent = ''
  document.querySelector('#code').textContent = ''
}

document.addEventListener('keyup', keyupAction);
// TODO: Add Event Listener for 'keydown' eventt
document.addEventListener('keydown', keydownAction)
