import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const stopTime = parseFloat(localStorage.getItem(LOCAL_STORAGE_KEY));


player.on('play', function () {
    console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle(function (data) {
    console.log(data.seconds);
    localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds)
}), 1000);

player.setCurrentTime(stopTime).then(function (seconds) {
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':

            break;

        default:

            break;
    }
});