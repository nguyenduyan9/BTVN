import { client } from "./client.js";
import { config } from "./config.js";

const { PAGE_LIMIT } = config;

const start = document.querySelector(".start");
const overlay = document.querySelector(".overlay");
const container = document.querySelector(".container");
const progress = document.createElement("div");
let timerProgress = document.createElement("div");

let _sort = "id";
let _order = "asc";
let limit = PAGE_LIMIT;
let currentQuestionIndex = 0;
let score = 0;

start.addEventListener("click", () => {
  start.classList.add("active");
  getPosts({
    _sort: "id",
    _order: "asc",
    _limit: limit,
    _page: 1,
  });

  startGame();
});

const startGame = () => {
  const span = document.createElement("span");
  console.log(span);
  let counter = 5;
  // span.innerText = counter;
  span.innerText = counter;
  span.style.color = "green";
  span.style.fontSize = "44px";
  span.style.margin = "auto";
  overlay.append(span);

  const timerStart = setInterval(() => {
    --counter;
    span.innerText = counter;
    if (counter === 1) {
      span.innerText = "GO!";
    } else if (counter === 0) {
      overlay.classList.add("active");
      currentTimer();
      clearInterval(timerStart);
    }
  }, 2000);
};

const currentTimer = () => {
  const progressWidth = progress.clientWidth;
  let timerProgressWidth = timerProgress.clientWidth;
  const setProgress = setInterval(() => {
    if (timerProgressWidth >= 0) {
      timerProgressWidth -= 0.5;
      let ratio = (timerProgressWidth / progressWidth) * 100 + "%";
      timerProgress.style.width = ratio;
    } else {
      clearInterval(setProgress);
      // container.innerHTML = "";
      getPosts({
        _sort: "id",
        _order: "asc",
        _limit: limit,
        _page: 2,
      });
      setProgress();
    }
  }, 10);
  currentQuestionIndex++;
  console.log(currentQuestionIndex);
};

const getPosts = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.get(`/questions?${queryString}`);
  render(data);
};

const render = (posts) => {
  // currentQuestionIndex = 1;
  const content = document.querySelector(".content");
  content.innerText = "";
  posts.forEach(({ question, answers }) => {
    const h2 = document.createElement("h2");
    h2.innerText = question;
    content.append(h2);
    const answer = document.createElement("div");
    answer.classList.add("answer");
    content.append(answer);

    answers.forEach(({ text }) => {
      const button = document.createElement("button");
      answer.append(button);
      button.innerText = text;
    });
  });
  // const questions = posts[currentQuestionIndex];

  // const h2 = document.createElement("h2");
  // h2.innerText = questions.question;
  // console.log(questions);
  // content.append(h2);

  // Render timerProgress

  progress.append(timerProgress);
  progress.className = "progress";
  timerProgress.className = "timer-progress";
  container.append(progress);
};

// const timer = () => {
//   // console.log(questions);
//   // for(let i=0; i<= questions.le)
// };
