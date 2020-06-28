// DOM's element : 
const artist = document.querySelector('.artist');
const song = document.querySelector('.song');
const disc = document.querySelector('.disc');
const colorDisc = document.querySelector('.center-disc');
const libraryDisc = document.querySelectorAll('.middle-disc');
const libraryArtist = document.querySelectorAll('.artist-name');
const librarySong = document.querySelectorAll('.song-name');
const audio = document.querySelector('audio');
const startButton = document.querySelector('.start-button');
const noticeButton = document.querySelector('button');

//  Variables :
let isAudioPlaying = false;

// Functions : 
const displayNotice = () => {
    alert('Choose a song in the library and press the start button (the biggest grey button).');
}

const setDisc = (e) => {
    let event = e.target;

    if(disc.classList.contains('hide')) {
        disc.classList.remove('hide');
    }

    colorDisc.classList.remove(colorDisc.classList[1]);
    colorDisc.classList.add(event.classList[1]);

    let songSrc = "song/" + event.children[1].value; 
    audio.setAttribute('src', songSrc);

    artist.textContent = event.children[2].value;
    song.textContent = event.children[3].value;

    isAudioPlaying = false;
    disc.classList.remove('spin');
}

const startPause = () => {

    if(isAudioPlaying) {
        audio.pause();
        isAudioPlaying = false;
        disc.classList.remove('spin');
    } else {
        audio.play();
        isAudioPlaying = true;
        disc.classList.add('spin');
    }
}

// Events :
noticeButton.addEventListener('click', displayNotice);

for(let disc of libraryDisc) {
    disc.addEventListener('click', setDisc);
}

startButton.addEventListener('click', startPause);