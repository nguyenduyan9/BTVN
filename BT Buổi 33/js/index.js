const btn = document.querySelector(".text");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
console.log(recognition);
recognition.interimResults = true;

let p = document.createElement("p");

recognition.add;
