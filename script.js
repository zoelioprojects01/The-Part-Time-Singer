// Add your actual song filenames here
const songs = [
  "Teri adad si lag gyi hai.mp3",
  "Ishq mein dil bana hai, dil ka yakin.mp3",
  "Chhupa ke rakhi thi jo baatein dil mein.mp3",
  "Tere Jane Ke Bad Bhi.mp3",
  "Teri har ek baat mein kuch khaas hai.mp3",
  "Tujhse Mila To Jana Mai.mp3",
  "Aaj ki rat akhiri hai shayd.mp3",
  "Jinna ne chhode si raaste.mp3",
  "Jinho ne chore the raste (Hindi).mp3",
  "Tu jaha ajj hai main wahaan ab nahi.mp3",
  "Khwabo ka bojh tha 2.mp3"
];

const songList = document.getElementById('songList');
const audioPlayer = document.getElementById('audioPlayer');
const nowPlaying = document.getElementById('nowPlaying');
const currentSong = document.getElementById('currentSong');

songs.forEach(song => {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${song.replace(".mp3", "")}</span>
    <i class="fas fa-play-circle"></i>
  `;
  li.addEventListener('click', () => {
    audioPlayer.src = `songs/${song}`;
    audioPlayer.play();
    nowPlaying.classList.remove('hidden');
    currentSong.textContent = `Now Playing: ${song.replace(".mp3", "")}`;
  });
  songList.appendChild(li);
});
