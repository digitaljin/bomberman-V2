// Music Selector
// edit desired music here
let selectedMusic = 'battle-music';
// edit volume (range 0 to 1)
let musicVolume = 0.1;






export function playMusic() {
  let music = document.querySelector(`audio#${selectedMusic}`);
  music.volume = musicVolume;
  music.play();
}
