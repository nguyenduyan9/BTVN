import Navigo from "navigo";

const root = document.querySelector("#root");
const routerObj = new Navigo("/", { linksSelector: "a", hash: true });

const render = (content, target, params = null) => {
  target.innerHtml = content(params);
};

export const router = (routers, DefaultLayout) => {
  if (DefaultLayout) {
    render(DefaultLayout, root);
  }

  if (routers.length !== 0) {
    routers.forEach((item) => {});
  }
};
