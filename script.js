/** @format */

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//fun toggleVideoStatus
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//fun update play/stop icon
function updateIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="gg-play-button"></i>';
  } else {
    play.innerHTML = '<i class="gg-play-pause"></i>';
  }
}

//fun update progress&&timeStamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //get minutes
  let min = Math.floor(video.currentTime / 60);
  if (min < 10) {
    min = '0' + String(min);
  }

  //get seconds
  let sec = Math.floor(video.currentTime % 60);
  if (sec < 10) {
    sec = '0' + String(sec);
  }
  timestamp.innerHTML = `${min}:${sec}`;
}

//fun stop Video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

//Event Listner
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
