import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
client.setUrl(SERVER_AUTH_API);

const root = document.querySelector("#root");
const container = document.querySelector(".container");
const loading = document.querySelector(".loading");

const render = () => {
  const blogHtml = `
  <h1>Xin chao!!</h1>
  `;
  const LoginHtml = `
  <div class="content">
        <div class="access-form">
          <h3 class="login">Đăng nhập</h3>
          <h3 class="register">Đăng kí</h3>
        </div>
        <form action="" class="form-login active">
          <div class="form-control email">
            <label>Email</label>
            <input
              class="email-input"
              type="email"
              placeholder="Email..."
              required
            />
          </div>
          <div class="form-control password">
            <label for="">Password</label>
            <input
              class="password-input"
              type="password"
              placeholder="Password..."
              required
            />
          </div>

          <button class="btn btn-login" type="submit">Đăng nhập</button>
        </form>

        <form action="" class="form-register">
          <div class="form-control">
            <label for="">Name</label>
            <input class="name-register" type="text" placeholder="Your Name..." required />
          </div>
          <div class="form-control email">
            <label>Email</label>
            <input class="email-register" type="email" placeholder="Email..." required />
          </div>
          <div class="form-control password">
            <label for="">Password</label>
            <input class="password-register" type="password" placeholder="Password..." required />
          </div>

          <button class="btn btn-login">Đăng kí</button>
        </form>
      </div>
  `;
  if (localStorage.getItem("accessToken")) {
    getProfile();
    loading.classList.remove("active");
    container.innerHTML = blogHtml;
    // getPost();
  } else {
    container.innerHTML = LoginHtml;
  }
};

render();

const login = document.querySelector(".login");
const register = document.querySelector(".register");

const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");
const result = document.createElement("div");

register.addEventListener("click", () => {
  formLogin.style.display = "none";
  formRegister.style.display = "block";
  register.style.background = "#eee";
  register.style.color = "#999";

  login.style.background = "#fff";
  login.style.color = "#000";
});

login.addEventListener("click", () => {
  formLogin.style.display = "block";
  login.style.background = "#eee";
  login.style.color = "#999";
  formRegister.style.display = "none";
  register.style.background = "#fff";
  register.style.color = "#000";
});

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailEl = e.target.querySelector(".email-input");
  const passwordEl = e.target.querySelector(".password-input");
  const email = emailEl.value;
  const password = passwordEl.value;
  handleLogin({ email, password });
  loading.classList.add("active");
});

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailEl = e.target.querySelector(".email-register");
  const nameEl = e.target.querySelector(".name-register");
  const passwordEl = e.target.querySelector(".password-register");

  const email = emailEl.value;
  const password = passwordEl.value;
  const name = nameEl.value;

  handleRegister({ name, email, password });
  loading.classList.add("active");
});

const handleRegister = async (data) => {
  try {
    const { data: response } = await client.post("/auth/register", data);
    loading.classList.remove("active");
    if (response.status_code === "SUCCESS") {
      rederResult(response);
      result.style.background = " aqua";
    } else {
      rederResult(response);
      result.style.background = "red";
    }
  } catch (error) {
    loading.classList.remove("active");
    result.style.background = "red";
    result.className = "result";
    root.append(result);
    result.innerText = "Xin vui lòng thử lại";
  }
};

// result

const rederResult = (response) => {
  result.className = "result";
  root.append(result);
  result.innerText = response.message;
  setTimeout(() => {
    root.removeChild(result);
  }, 2000);
};

const handleLogin = async (data) => {
  const { data: tokens } = await client.post("/auth/login", data);
  console.log(tokens);
  if (tokens.code === 400) {
    rederResult(tokens);
    loading.classList.remove("active");
    result.style.background = "red";
  } else {
    const { accessToken, refreshToken } = tokens.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    render();
    getProfile();
  }
};

const getProfile = async () => {
  client.setUrl(SERVER_AUTH_API);
  const token = localStorage.getItem("accessToken");
  console.log(token);

  const { data } = await client.get("/users/profile", token);
  console.log(data);
  if (data.code !== 200) {
    refreshToken();
  }
};
