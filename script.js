const video = document.querySelector('#video');
const playButton = document.querySelector('#play');
const stopButton = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');

// play and pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
// update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    playButton.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    playButton.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

playButton.addEventListener('click', toggleVideoStatus);
stopButton.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
