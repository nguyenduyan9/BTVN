var progressBar = document.querySelector(".progress-bar");

var progress = document.querySelector(".progress");

var progressDot = progress.querySelector(".progress-bar .progress span");

var widthProgressBar = progressBar.clientWidth;

var initialClientX = 0;

var isDrag = false;

var initialRate = 0;

var rate = 0;

var currentTime = 0;

var handleChange = function (value) {
  currentTime = (audio.duration * value) / 100;
  if (!isDrag) {
    audio.currentTime = currentTime;
  }
};

progressBar.addEventListener("mousedown", function (e) {
  // Tính tỷ lệ phần trăm giữa vị trí với chiều rộng
  var rate = (e.offsetX * 100) / widthProgressBar;
  //   update Css vào progress
  handleChange(rate);
  progress.style.width = `${rate}%`;
  initialRate = rate;
  audio.currentTime = currentTime;
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
    if (rate < 0) {
      rate = 0;
    }
    if (rate > 100) {
      rate = 100;
    }

    progress.style.width = `${rate}%`;
    handleChange(rate);
    audio.currentTime = currentTime;
  }
});

document.addEventListener("mouseup", function (e) {
  isDrag = false;
  initialRate = rate;
  audio.currentTime = currentTime;
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
  if (!isDrag) {
    currentTimeEl.innerText = getTime(this.currentTime);
    rate = (this.currentTime / this.duration) * 100;
    progress.style.width = `${rate}%`;
  }

  currentTime = this.currentTime;
  handleKaraoke(currentTime);
  // rate = (e.offsetX * 100) / widthProgressBar;
  // console.log(rate);01:34
});

var timer = progressBar.querySelector(".timer");

progressBar.addEventListener("mousemove", function (e) {
  timer.style.left = `${e.offsetX}px`;
  var rateTimer = (e.offsetX * 100) / widthProgressBar;
  var rate = (audio.duration * rateTimer) / 100;
  timer.innerText = getTime(rate);
});

audio.addEventListener("ended", function () {
  rate = 0;
  currentTime = 0;
  audio.currentTime = 0;
  pro;
});

var lyric = `{"err":0,"msg":"Success","data":{"sentences":[{"words":[{"startTime":43759,"endTime":44090,"data":"Anh"},{"startTime":44669,"endTime":45029,"data":"gặp"},{"startTime":45039,"endTime":45289,"data":"em"}]},{"words":[{"startTime":45529,"endTime":45859,"data":"Giữa"},{"startTime":45869,"endTime":46279,"data":"trời"},{"startTime":46279,"endTime":46489,"data":"đông"},{"startTime":47139,"endTime":47419,"data":"buốt"},{"startTime":47429,"endTime":47729,"data":"giá"}]},{"words":[{"startTime":48079,"endTime":48409,"data":"Mắt"},{"startTime":48419,"endTime":48739,"data":"ta"},{"startTime":48739,"endTime":49029,"data":"nhìn"}]},{"words":[{"startTime":49319,"endTime":49689,"data":"Tựa"},{"startTime":49699,"endTime":49989,"data":"đã"},{"startTime":49989,"endTime":50710,"data":"quen"},{"startTime":50940,"endTime":51220,"data":"từ"},{"startTime":51339,"endTime":51609,"data":"lâu"}]},{"words":[{"startTime":53900,"endTime":54580,"data":"Em"},{"startTime":54760,"endTime":55079,"data":"cười"},{"startTime":55089,"endTime":55299,"data":"tươi"}]},{"words":[{"startTime":55449,"endTime":55969,"data":"Như"},{"startTime":55969,"endTime":56440,"data":"mặt"},{"startTime":56440,"endTime":56950,"data":"trời"},{"startTime":57269,"endTime":57700,"data":"cuối"},{"startTime":57700,"endTime":57919,"data":"đông"}]},{"words":[{"startTime":58269,"endTime":58529,"data":"Nụ"},{"startTime":58539,"endTime":58929,"data":"cười"},{"startTime":58929,"endTime":59369,"data":"đó"}]},{"words":[{"startTime":59829,"endTime":60049,"data":"Làm"},{"startTime":60059,"endTime":60769,"data":"sao"},{"startTime":60779,"endTime":61489,"data":"anh"},{"startTime":61759,"endTime":62059,"data":"quên"}]},{"words":[{"startTime":63980,"endTime":64630,"data":"Ta"},{"startTime":64809,"endTime":65150,"data":"cách"},{"startTime":65160,"endTime":65600,"data":"xa"}]},{"words":[{"startTime":65719,"endTime":66129,"data":"Muôn"},{"startTime":66139,"endTime":66779,"data":"trùng"},{"startTime":66779,"endTime":67420,"data":"mây"}]},{"words":[{"startTime":68359,"endTime":68659,"data":"Từng"},{"startTime":68659,"endTime":69009,"data":"dòng"},{"startTime":69009,"endTime":69320,"data":"thư"}]},{"words":[{"startTime":69849,"endTime":70199,"data":"Gởi"},{"startTime":70199,"endTime":70709,"data":"kèm"},{"startTime":70709,"endTime":71279,"data":"nỗi"},{"startTime":71279,"endTime":71529,"data":"nhớ"},{"startTime":71849,"endTime":72049,"data":"thương"}]},{"words":[{"startTime":74080,"endTime":74500,"data":"Anh"},{"startTime":74510,"endTime":75500,"data":"nhớ"},{"startTime":75500,"endTime":75619,"data":"em"}]},{"words":[{"startTime":75899,"endTime":76239,"data":"đêm"},{"startTime":76249,"endTime":76939,"data":"từng"},{"startTime":76939,"endTime":77749,"data":"đêm"}]},{"words":[{"startTime":78459,"endTime":78759,"data":"Lòng"},{"startTime":78759,"endTime":79139,"data":"thầm"},{"startTime":79139,"endTime":79399,"data":"mong"}]},{"words":[{"startTime":79959,"endTime":80359,"data":"Thấy"},{"startTime":80369,"endTime":80739,"data":"em"},{"startTime":80739,"endTime":81229,"data":"trong"},{"startTime":81229,"endTime":81870,"data":"phút"},{"startTime":81870,"endTime":82149,"data":"giây"}]},{"words":[{"startTime":83569,"endTime":83849,"data":"Ngày"},{"startTime":83849,"endTime":84199,"data":"gặp"},{"startTime":84209,"endTime":84529,"data":"em"}]},{"words":[{"startTime":84829,"endTime":85099,"data":"Đi"},{"startTime":85099,"endTime":85459,"data":"bên"},{"startTime":85459,"endTime":85519,"data":"em"}]},{"words":[{"startTime":85689,"endTime":86059,"data":"Không"},{"startTime":86059,"endTime":86409,"data":"nói"},{"startTime":86409,"endTime":86680,"data":"được"},{"startTime":86690,"endTime":87900,"data":"câu"},{"startTime":87900,"endTime":88170,"data":"gì"}]},{"words":[{"startTime":88600,"endTime":88869,"data":"Ngồi"},{"startTime":88869,"endTime":89279,"data":"kề"},{"startTime":89289,"endTime":89480,"data":"em"}]},{"words":[{"startTime":89719,"endTime":90169,"data":"Sao"},{"startTime":90179,"endTime":90499,"data":"mùa"},{"startTime":90499,"endTime":90790,"data":"đông"},{"startTime":90790,"endTime":90890,"data":"thấy"}]},{"words":[{"startTime":91069,"endTime":91509,"data":"Không"},{"startTime":91519,"endTime":92079,"data":"giá"},{"startTime":92199,"endTime":92529,"data":"lạnh"}]},{"words":[{"startTime":93800,"endTime":93939,"data":"Ngày"},{"startTime":93939,"endTime":94330,"data":"gặp"},{"startTime":94340,"endTime":94580,"data":"em"}]},{"words":[{"startTime":94799,"endTime":95199,"data":"Sương"},{"startTime":95199,"endTime":95439,"data":"đêm"},{"startTime":95439,"endTime":95469,"data":"rơi"}]},{"words":[{"startTime":95759,"endTime":96089,"data":"Gió"},{"startTime":96089,"endTime":96429,"data":"rét"},{"startTime":96429,"endTime":96609,"data":"từng"},{"startTime":96739,"endTime":97109,"data":"cơn"},{"startTime":97769,"endTime":98089,"data":"lạnh"},{"startTime":98099,"endTime":98379,"data":"lùng"}]},{"words":[{"startTime":98629,"endTime":98979,"data":"Sao"},{"startTime":98989,"endTime":99389,"data":"lòng"},{"startTime":99389,"endTime":99619,"data":"anh"}]},{"words":[{"startTime":99900,"endTime":100269,"data":"Thấy"},{"startTime":100269,"endTime":100339,"data":"ấm"},{"startTime":100569,"endTime":100599,"data":"nồng"}]},{"words":[{"startTime":100829,"endTime":101189,"data":"Cuộc"},{"startTime":101189,"endTime":101580,"data":"tình"},{"startTime":101580,"endTime":102159,"data":"đầu"},{"startTime":102159,"endTime":102189,"data":"tiên"}]},{"words":[{"startTime":103699,"endTime":103989,"data":"Giờ"},{"startTime":103989,"endTime":104339,"data":"chia"},{"startTime":104339,"endTime":104649,"data":"ly"}]},{"words":[{"startTime":104990,"endTime":105269,"data":"Em"},{"startTime":105269,"endTime":105630,"data":"quay"},{"startTime":105630,"endTime":105649,"data":"đi"}]},{"words":[{"startTime":105850,"endTime":106190,"data":"Che"},{"startTime":106190,"endTime":106559,"data":"giấu"},{"startTime":106559,"endTime":106850,"data":"bờ"},{"startTime":106880,"endTime":107290,"data":"mi"},{"startTime":107859,"endTime":108129,"data":"lệ"},{"startTime":108159,"endTime":108479,"data":"rơi"}]},{"words":[{"startTime":108749,"endTime":108980,"data":"Ta"},{"startTime":108980,"endTime":109370,"data":"xa"},{"startTime":109370,"endTime":110070,"data":"nhau"}]},{"words":[{"startTime":110309,"endTime":110689,"data":"Mong"},{"startTime":110689,"endTime":110989,"data":"đến"},{"startTime":110989,"endTime":111299,"data":"một"},{"startTime":111299,"endTime":111649,"data":"ngày"},{"startTime":111659,"endTime":112330,"data":"gặp"},{"startTime":112340,"endTime":113000,"data":"lại"}]},{"words":[{"startTime":113820,"endTime":114110,"data":"Giờ"},{"startTime":114120,"endTime":114459,"data":"chia"},{"startTime":114459,"endTime":114869,"data":"ly"}]},{"words":[{"startTime":115070,"endTime":115340,"data":"Anh"},{"startTime":115340,"endTime":115710,"data":"xa"},{"startTime":115710,"endTime":116000,"data":"em"},{"startTime":116010,"endTime":116320,"data":"nhưng"},{"startTime":116320,"endTime":116410,"data":"sẽ"}]},{"words":[{"startTime":116649,"endTime":117099,"data":"Nhớ"},{"startTime":117099,"endTime":117930,"data":"em"},{"startTime":117930,"endTime":118349,"data":"người"},{"startTime":118349,"endTime":118609,"data":"ơi"}]},{"words":[{"startTime":118849,"endTime":119169,"data":"Trái"},{"startTime":119169,"endTime":119479,"data":"tim"},{"startTime":119489,"endTime":119890,"data":"anh"}]},{"words":[{"startTime":120039,"endTime":120419,"data":"Trái"},{"startTime":120419,"endTime":120740,"data":"tim"},{"startTime":120750,"endTime":121150,"data":"em"},{"startTime":121150,"endTime":121520,"data":"không"},{"startTime":121610,"endTime":122450,"data":"rời"},{"startTime":122450,"endTime":122510,"data":"xa"}]},{"words":[{"startTime":165050,"endTime":165639,"data":"Anh"},{"startTime":165929,"endTime":166289,"data":"gặp"},{"startTime":166299,"endTime":166639,"data":"em"}]},{"words":[{"startTime":166850,"endTime":167119,"data":"Giữa"},{"startTime":167119,"endTime":167550,"data":"trời"},{"startTime":167550,"endTime":168329,"data":"đông"},{"startTime":168409,"endTime":168779,"data":"buốt"},{"startTime":168789,"endTime":169149,"data":"giá"}]},{"words":[{"startTime":169279,"endTime":169679,"data":"Mắt"},{"startTime":169679,"endTime":170010,"data":"ta"},{"startTime":170010,"endTime":170329,"data":"nhìn"}]},{"words":[{"startTime":170619,"endTime":170949,"data":"Tựa"},{"startTime":170949,"endTime":171249,"data":"đã"},{"startTime":171249,"endTime":171989,"data":"quen"},{"startTime":172199,"endTime":172560,"data":"từ"},{"startTime":172580,"endTime":172990,"data":"lâu"}]},{"words":[{"startTime":175130,"endTime":175609,"data":"Em"},{"startTime":175999,"endTime":176349,"data":"cười"},{"startTime":176349,"endTime":176669,"data":"tươi"}]},{"words":[{"startTime":176719,"endTime":177240,"data":"Như"},{"startTime":177240,"endTime":177589,"data":"mặt"},{"startTime":177589,"endTime":178510,"data":"trời"},{"startTime":178510,"endTime":178950,"data":"cuối"},{"startTime":178950,"endTime":179270,"data":"đông"}]},{"words":[{"startTime":179530,"endTime":179780,"data":"Nụ"},{"startTime":179780,"endTime":180199,"data":"cười"},{"startTime":180199,"endTime":180729,"data":"đó"}]},{"words":[{"startTime":181079,"endTime":181350,"data":"Làm"},{"startTime":181360,"endTime":181969,"data":"sao"},{"startTime":181989,"endTime":182959,"data":"anh"},{"startTime":183029,"endTime":183409,"data":"quên"}]},{"words":[{"startTime":185239,"endTime":185519,"data":"Ta"},{"startTime":186109,"endTime":186429,"data":"cách"},{"startTime":186439,"endTime":186629,"data":"xa"}]},{"words":[{"startTime":186989,"endTime":187399,"data":"Muôn"},{"startTime":187409,"endTime":187899,"data":"trùng"},{"startTime":187909,"endTime":188409,"data":"mây"}]},{"words":[{"startTime":189619,"endTime":189929,"data":"Từng"},{"startTime":189929,"endTime":190259,"data":"dòng"},{"startTime":190259,"endTime":190549,"data":"thư"}]},{"words":[{"startTime":191139,"endTime":191450,"data":"Gởi"},{"startTime":191450,"endTime":191929,"data":"kèm"},{"startTime":191939,"endTime":192369,"data":"nỗi"},{"startTime":192379,"endTime":192669,"data":"nhớ"},{"startTime":193109,"endTime":193309,"data":"thương"}]},{"words":[{"startTime":195370,"endTime":196230,"data":"Anh"},{"startTime":196240,"endTime":196780,"data":"nhớ"},{"startTime":196780,"endTime":196889,"data":"em"}]},{"words":[{"startTime":197170,"endTime":197499,"data":"đêm"},{"startTime":197499,"endTime":198199,"data":"từng"},{"startTime":198199,"endTime":199039,"data":"đêm"}]},{"words":[{"startTime":199720,"endTime":200030,"data":"Lòng"},{"startTime":200030,"endTime":200220,"data":"thầm"},{"startTime":200390,"endTime":200670,"data":"mong"}]},{"words":[{"startTime":201239,"endTime":201659,"data":"Thấy"},{"startTime":201679,"endTime":201999,"data":"em"},{"startTime":201999,"endTime":202509,"data":"trong"},{"startTime":202509,"endTime":203120,"data":"phút"},{"startTime":203130,"endTime":203400,"data":"giây"}]},{"words":[{"startTime":205109,"endTime":205139,"data":"Ngày"},{"startTime":205149,"endTime":205299,"data":"gặp"},{"startTime":205489,"endTime":205749,"data":"em"}]},{"words":[{"startTime":206069,"endTime":206370,"data":"Đi"},{"startTime":206370,"endTime":206680,"data":"bên"},{"startTime":206680,"endTime":206699,"data":"em"}]},{"words":[{"startTime":206999,"endTime":207299,"data":"Không"},{"startTime":207299,"endTime":207679,"data":"nói"},{"startTime":207679,"endTime":207990,"data":"được"},{"startTime":207990,"endTime":208350,"data":"câu"},{"startTime":209110,"endTime":209370,"data":"gì"}]},{"words":[{"startTime":209890,"endTime":210120,"data":"Ngồi"},{"startTime":210120,"endTime":210549,"data":"kề"},{"startTime":210559,"endTime":210770,"data":"em"}]},{"words":[{"startTime":210979,"endTime":211409,"data":"Sao"},{"startTime":211409,"endTime":211770,"data":"mùa"},{"startTime":211770,"endTime":212040,"data":"đông"},{"startTime":212040,"endTime":212070,"data":"thấy"}]},{"words":[{"startTime":212299,"endTime":212689,"data":"Không"},{"startTime":212699,"endTime":213399,"data":"giá"},{"startTime":213399,"endTime":213759,"data":"lạnh"}]},{"words":[{"startTime":214950,"endTime":215219,"data":"Ngày"},{"startTime":215219,"endTime":215590,"data":"gặp"},{"startTime":215599,"endTime":215830,"data":"em"}]},{"words":[{"startTime":216059,"endTime":216469,"data":"Sương"},{"startTime":216469,"endTime":216750,"data":"đêm"},{"startTime":216750,"endTime":216789,"data":"rơi"}]},{"words":[{"startTime":217049,"endTime":217339,"data":"Gió"},{"startTime":217339,"endTime":217700,"data":"rét"},{"startTime":217700,"endTime":218020,"data":"từng"},{"startTime":218020,"endTime":218430,"data":"cơn"},{"startTime":219029,"endTime":219349,"data":"lạnh"},{"startTime":219349,"endTime":219539,"data":"lùng"}]},{"words":[{"startTime":219849,"endTime":220239,"data":"Sao"},{"startTime":220239,"endTime":220659,"data":"lòng"},{"startTime":220659,"endTime":220969,"data":"anh"}]},{"words":[{"startTime":221189,"endTime":221519,"data":"Thấy"},{"startTime":221519,"endTime":221619,"data":"ấm"},{"startTime":221819,"endTime":221849,"data":"nồng"}]},{"words":[{"startTime":222119,"endTime":222479,"data":"Cuộc"},{"startTime":222489,"endTime":222839,"data":"tình"},{"startTime":222839,"endTime":223409,"data":"đầu"},{"startTime":223409,"endTime":223439,"data":"tiên"}]},{"words":[{"startTime":224949,"endTime":225249,"data":"Giờ"},{"startTime":225279,"endTime":225609,"data":"chia"},{"startTime":225609,"endTime":225849,"data":"ly"}]},{"words":[{"startTime":226210,"endTime":226520,"data":"Em"},{"startTime":226520,"endTime":226870,"data":"quay"},{"startTime":226870,"endTime":226890,"data":"đi"}]},{"words":[{"startTime":227099,"endTime":227469,"data":"Che"},{"startTime":227479,"endTime":227829,"data":"giấu"},{"startTime":227829,"endTime":228110,"data":"bờ"},{"startTime":228110,"endTime":229020,"data":"mi"},{"startTime":229109,"endTime":229380,"data":"lệ"},{"startTime":229380,"endTime":229750,"data":"rơi"}]},{"words":[{"startTime":229999,"endTime":230239,"data":"Ta"},{"startTime":230239,"endTime":230629,"data":"xa"},{"startTime":230629,"endTime":231219,"data":"nhau"}]},{"words":[{"startTime":231599,"endTime":231949,"data":"Mong"},{"startTime":231949,"endTime":232259,"data":"đến"},{"startTime":232259,"endTime":232550,"data":"một"},{"startTime":232550,"endTime":232910,"data":"ngày"},{"startTime":232920,"endTime":233529,"data":"gặp"},{"startTime":233559,"endTime":234089,"data":"lại"}]},{"words":[{"startTime":235100,"endTime":235369,"data":"Giờ"},{"startTime":235369,"endTime":235730,"data":"chia"},{"startTime":235730,"endTime":236140,"data":"ly"}]},{"words":[{"startTime":236359,"endTime":236600,"data":"Anh"},{"startTime":236600,"endTime":236949,"data":"xa"},{"startTime":236959,"endTime":237269,"data":"em"},{"startTime":237279,"endTime":237589,"data":"nhưng"},{"startTime":237589,"endTime":237699,"data":"sẽ"}]},{"words":[{"startTime":237919,"endTime":238330,"data":"Nhớ"},{"startTime":238330,"endTime":239210,"data":"em"},{"startTime":239210,"endTime":239609,"data":"người"},{"startTime":239609,"endTime":239869,"data":"ơi"}]},{"words":[{"startTime":240119,"endTime":240419,"data":"Trái"},{"startTime":240419,"endTime":240810,"data":"tim"},{"startTime":240810,"endTime":241080,"data":"anh"}]},{"words":[{"startTime":241330,"endTime":241689,"data":"Trái"},{"startTime":241689,"endTime":242069,"data":"tim"},{"startTime":242069,"endTime":242470,"data":"em"},{"startTime":242470,"endTime":242809,"data":"không"},{"startTime":242889,"endTime":243690,"data":"rời"},{"startTime":243690,"endTime":243760,"data":"xa"}]},{"words":[{"startTime":245139,"endTime":245469,"data":"Trái"},{"startTime":245489,"endTime":245889,"data":"tim"},{"startTime":245889,"endTime":245979,"data":"anh"}]},{"words":[{"startTime":247659,"endTime":247999,"data":"Trái"},{"startTime":247999,"endTime":248369,"data":"tim"},{"startTime":248369,"endTime":248539,"data":"em"}]},{"words":[{"startTime":251979,"endTime":252479,"data":"Không"},{"startTime":252689,"endTime":252979,"data":"rời"},{"startTime":253269,"endTime":253559,"data":"xa"}]}],"file":"https://static-zmp3.zmdcdn.me/lyrics/2016/6/c/6c903612aeb7785f606ac7021627c077_1073743092.lrc","beat":"https://mcloud-bf-s9-audio-zmp3.zmdcdn.me/C37NDbStZnU/e15275bae961023f5b70/8bfe578fe55b0e05574a/96/accompaniment.m4a?authen=exp=1694683848~acl=/C37NDbStZnU/*~hmac=fab883091729523270e09bf64193994c","enabledVideoBG":true,"defaultIBGUrls":["https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/0/5/3c05c10ae36f6361f9af0874bb7c4851.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/e/0/bbe01e4bf6d8e23101fcb6db44df311d.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/1/f/3/a1f34293d1dc92735be8c3f9082c4acf.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/e/9/5/6e95b598e1e14a187ee779bcd888e75c.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/8/1/1c81e957a6270eba91571d822a47e7c5.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/d/000d9d0679bbbb564a191a6801d7f19d.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/6/4/f/e64f4fd6f53caebabc1c26d592093cfa.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/e/3/1/de315c40b537d40b7409a6702f446631.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/6/2/1462efc7378bed3f98ace411e11eab45.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/b/f/a/5bfa05533ed7975035e69a4508c82fd6.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/2/b/1/f2b1b91fa64e0c354150c86fd96c249c.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/f/b/51fbcd4ae32096ffe2dd89cd36bb6ed9.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/3/9/62392463eab1eb1aaa2d1f3bd0f758bb.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/f/0/12f01e12d6e13e263ef76f3fdb65d66e.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/8/2/4/8824ef8e3e3aa3e302f03879a1f9d7d3.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/4/9/43491e9d95a9942015548bd2a061250d.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/8/7/5/987517940ce71a96bab9c0c88d5b6b95.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/2/4/8e24305fde744814083af980a593e8c2.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/1/2/7/f1270dd1bed79b527228e3351d2b67ae.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/a/3/0/0a301934881ee4e2de30dc8f41bc55f9.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/c/9/f/cc9fce8719364ba9d8a846984c590a0e.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/5/d/e/e5de86acd7567465f54a6b9307076947.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/4/b/b/64bb19c5f971b4e4f16f3bfdff64a396.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/3/2/0/03206606d461843e22451747a9b60769.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/4/4/bd4485d6dfef80764869a4d88d9b0475.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/6/8/e86817d147315d9d644835f60d17ae41.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/4/7/bb477f2f56f162b13426f70c9858c732.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/3/6/c536ff6ab992e36be24ca0adf8e86ae0.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/f/c/6cfc1e6e3b94c62cded257659602f00b.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/d/6/25d6adaa11b4e932d61309ed635d57fa.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/2/a/e/d2ae42243ccd4fec321fc60692a5a2dc.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/7/b/a/e7ba1207018f1d2fa7048598c7d627df.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/f/4/0/3f40bd0d6d8cbcf833c72ab050f19e6a.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/d/a/d/adad060e15f8409ec2e7670cf943c202.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/1/7/ed17742d63b635725e6071a9bee362c5.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/a/e/8/3ae816de233a9eae0116b4b5a21af43e.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/7/f/1/d7f15e3996e7923ffc2a64d1f8e43448.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/7/e/007e6b48696aab4a61ca46a10d980f63.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/9/f/5/d9f592437d80e358a76e32798ce2d294.jpg"],"BGMode":0},"timestamp":1694527985141}`;

var lyric = JSON.parse(lyric).data.sentences;
var karaoke = document.querySelector(".karaoke");
var karaInner = karaoke.querySelector(".karaoke-inner");
var karaokePlay = document.querySelector(".play");
var karaokeClose = karaInner.querySelector(".close");
var karaokeContent = karaInner.querySelector(".karaoke-content");

var songInfo = `<p>Mùa đông không lạnh</p>
<p>Ca sỹ :AkiraPhan</p>`;

karaokePlay.addEventListener("click", function () {
  karaInner.classList.add("show");
  karaokeContent.innerHTML = songInfo;
});
karaokeClose.addEventListener("click", function () {
  karaInner.classList.remove("show");
  karaokeContent.innerHTML = "";
});

var handleKaraoke = function (currentTime) {
  currentTime *= 1000;
  var index = lyric.findIndex(function (wordItem) {
    var wordItemArr = wordItem.words;
    return (
      currentTime >= wordItemArr[0].startTime &&
      currentTime <= wordItemArr[wordItemArr.length - 1].endTime
    );
  });

  if (index !== -1) {
    var karaokeContent = document.querySelector(".karaoke-content");
    // karaokeContent.innerHTML = "";

    // vòng lặp các câu trong 1 màn hình

    /*
    page = 1 -> index = 0 đến 1
    page = 2 -> index = 2 đến 3
    page = 3 -> index = 4 đến 5

    index = (page -1) * 2

    công thưc : page = index/2 + 1
    */

    var number = 2;

    var currentPage;

    var page = Math.floor(index / number + 1);

    if (page !== currentTime) {
      var offset = (page - 1) * number;

      if (index >= offset && index < offset + number) {
        var div = document.createElement("div");

        for (var i = offset; i < offset + number; i++) {
          var p = document.createElement("p");

          lyric[i].words.forEach(function (word) {
            console.log(word);
            var wordEl = document.createElement("span");
            wordEl.classList.add("word");
            wordEl.innerText = word.data;

            var span = document.createElement("span");
            span.innerText = word.data;
            wordEl.append(span);

            p.append(wordEl);

            if (currentTime >= word.startTime) {
              span.style.width = `100%`;
            }

            if (currentTime >= word.startTime && currentTime <= word.endTime) {
              var wordTime = word.endTime - word.startTime;
              // var start = currentTime - word.startTime;
              // var rate = (start * 100) / wordTime;
              span.style.transition = `width ${wordTime}ms linear`;
            }
          });

          div.append(p);
        }
      }
    }

    // vòng lặp các từ trong 1 câu
  }
  karaokeContent.append(div);
};

var handleColor = function (currentTime) {
  var wordItems = karaokeContent.querySelectorAll(".word");

  /*
-wordItems trả về các từ trong 1 trang
- lyric[index].word : Trả về các từ trong 1 câu

 ý tưởng 
*/

  lyric[index].words.forEach(function (word, i) {
    if (currentTime >= word.startTime) {
      console.log(word.data);
    }
  });
};
