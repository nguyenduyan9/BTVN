var progressBar = document.querySelector(".progress-bar");

var progress = document.querySelector(".progress");

var progressDot = document.querySelector(".progress-bar .progress span");

var widthProgressBar = progressBar.clientWidth;

var initialClientX = 0;

var isDrag = false;

var initialRate = 0;

var rate = 0;

var handleChange = function (value) {
  value = (audio.duration * value) / 100;
  audio.currentTime = value;
};

progressBar.addEventListener("mousedown", function (e) {
  // Tính tỷ lệ phần trăm giữa vị trí với chiều rộng
  var rate = (e.offsetX * 100) / widthProgressBar;
  //   update Css vào progress
  progress.style.width = `${rate}%`;
  initialRate = rate;
  handleChange(initialRate);
  isDrag = true;
  initialClientX = e.clientX;
});

progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  initialClientX = e.clientX;
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var space = e.clientX - initialClientX;
    rate = (space * 100) / widthProgressBar + initialRate;
    if (rate >= 0 && rate <= 100) {
      progress.style.width = `${rate}%`;
    }
    // handleChange(rate);
  }
});

document.addEventListener("mouseup", function (e) {
  isDrag = false;
  initialRate = rate;
  handleChange(initialRate);
});

// audio

var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationTimeEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".play-btn");

var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

audio.addEventListener("loadeddata", function () {
  durationTimeEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  if (isDrag) {
    currentTimeEl.innerText = getTime(this.currentTime);
  }

  // rate = (e.offsetX * 100) / widthProgressBar;
  // console.log(rate);01:34

  rate = (this.currentTime / this.duration) * 100;
  console.log("he");
  progress.style.width = `${rate}%`;
});

var timer = progressBar.querySelector(".timer");

progressBar.addEventListener("mousemove", function (e) {
  timer.style.left = `${e.offsetX}px`;
  var rateTimer = (e.offsetX * 100) / widthProgressBar;
  var rate = (audio.duration * rateTimer) / 100;
  timer.innerText = getTime(rate);
});
