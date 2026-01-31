let playList = [];

const songInput = document.querySelector('#song-input');
const addSongButton = document.querySelector('#add-btn');
const playSongButton = document.querySelector('#play-btn');
const currentSong = document.querySelector('#current-song');
const warningMessage = document.querySelector('#full-msg');
const upcomingSong = document.querySelector('#queue-list');

function updatePlaylistDisplay() {
    upcomingSong.innerHTML = '';
    playList.forEach((song, index) => {
        const songElement = document.createElement('li');
        songElement.textContent = `${index + 1}. ${song}`;
        upcomingSong.appendChild(songElement);
    });

    if (playList.length >= 5) {
        warningMessage.style.display = 'block';
    } else {
        warningMessage.style.display = 'none';
    }
};

function addSong() {
    const songValue = songInput.value;

    if (songValue == '' || playList.length >= 5) {
        return;
    } else {
        playList.push(songValue);
        songInput.value = '';
        updatePlaylistDisplay();
    }
}

function playNextSong() {
    if (playList.length === 0) {
        currentSong.textContent = 'No songs to play!';
    }else {
        currentSong.textContent = `Now Playing: ${playList.shift()}`;
        updatePlaylistDisplay();
    }
}

addSongButton.addEventListener('click', addSong);
playSongButton.addEventListener('click', playNextSong);
updatePlaylistDisplay();