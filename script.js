const KEYS_ARR = ['z', 's', 'x', 'd',  'c', 'v', 'g', 'b', 'h','n', 'j','m',',', 'l','.', ';','/', 'q', '2', 'w', '3', 'e', '4', 'r', 't', '6', 'y', '7', 'u', 'i', '9', 'o', '0', 'p', '-', '[', ']'];
const NOT_EXIST=-1;
const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', event => {
  if (event.repeat) return;
  const key = event.key;
  const keyIndex = KEYS_ARR.indexOf(key);
  if (keyIndex > NOT_EXIST)
  playNote(keys[keyIndex]);
})

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key));
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  })
}
