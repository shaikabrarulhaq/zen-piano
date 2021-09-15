const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
const BLACK_KEYS = ['2', '3', '5', '6', '7', '9', '0', 's', 'd', 'f', 'h', 'j', 'l', ';', '\'']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white-key')
const blackKeys = document.querySelectorAll('.key.black-key')

keys.forEach(key => {
    key.addEventListener('mousedown', () => playNote(key))
    key.addEventListener('mouseup', () => mouseUnPlay(key))
})

var down = [140]

document.addEventListener('keydown', e => {
    if (down[event.keyCode]) {
        return;
    } else {
        if (e.repeat) return
        const key = e.key
        const whiteKeyIndex = WHITE_KEYS.indexOf(key)
        const blackKeyIndex = BLACK_KEYS.indexOf(key)
        if (whiteKeyIndex > -1) {
            playNote(whiteKeys[whiteKeyIndex])
        }
        if (blackKeyIndex > -1) {
            playNote(blackKeys[blackKeyIndex])
        }
        down[event.keyCode] = true;
    }
}, true);

document.addEventListener('keyup', e => {
    down[event.keyCode]=false;
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) {
        unPlay(whiteKeys[whiteKeyIndex])
    }
    if (blackKeyIndex > -1) {
        unPlay(blackKeys[blackKeyIndex])
    }
}, true)

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
}

function unPlay(key) {
    key.classList.remove('active')
}

function mouseUnPlay(key) {
    keys.forEach(key => {
        key.classList.remove('active');
    })
}