const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const p = document.createElement("p");
const textContent = document.createElement("div");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = false;

// let p = document.createElement("p");
recognition.continuous = false;

recognition.lang = "vi-VN";

const search = (text) => {
  const handleText = text.toLowerCase().trim();
  if (handleText === "google") {
    window.open("https://www.google.com/");
  } else if (handleText === "facebook") {
    window.open("https://www.facebook.com/");
  } else if (handleText === "youtobe") {
    window.open("youtobe");
  } else if (handleText === "goole map" || handleText === "bản đồ") {
    window.open(
      "https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN&entry=ttu"
    );

    // không ai chung tình được mãi
  } else if (handleText.includes("ai chung tình được mãi")) {
    console.log("hi");
    const keyWord = handleText.trim();
    window.open(`https://zingmp3.vn/tim-kiem/tat-ca?q=${keyWord}`);
  }
  //    map
  else if (handleText.includes("69 thái thịnh")) {
    const keyWord = handleText.trim();
    window.open(`https://www.google.com/maps/search/${keyWord}`);
  } else {
    return "không thực hiện được";
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  recognition.start();
  p.innerHTML = "Hãy nói nội dung bạn muốn";
  p.style.color = "red";
  container.appendChild(p);
  container.removeChild(textContent);
});

recognition.addEventListener("speechend", (e) => {
  console.log("ngừng");
  recognition.stop();
  p.innerHTML = "Đã nói xong.Hy vọng kết quả như ý bạn";
  p.style.color = "green";
});

recognition.onresult = (e) => {
  const text = e.results[0][0].transcript;
  container.append(textContent);
  textContent.innerHTML = `Đang thực hiện :${text}`;
  setTimeout(() => {
    if (search(text) === "không thực hiện được") {
      textContent.innerHTML = "không thực hiện được";
    } else {
      textContent.innerHTML = "thực hiện thành công";
    }
  }, 750);
  //   diagcostic.textContent.innerHTML = "${color}";
};
