import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayback, 1000));

function onPlayback(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

const outputStorageTimeParsed = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

player.setCurrentTime(outputStorageTimeParsed);
