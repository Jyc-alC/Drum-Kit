window.addEventListener('keydown', function (pressed) {
    console.log(pressed.keyCode,pressed.code);
    const audio = document.querySelector(`audio[data-key="${pressed.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${pressed.keyCode}"]`)
    if(!audio){return;}
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playanim');
})

function removeTransition(pressed) {
    if (pressed.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playanim');
}

const allkeys = document.querySelectorAll('.key');
allkeys.forEach(key => key.addEventListener('transitionend', removeTransition));
