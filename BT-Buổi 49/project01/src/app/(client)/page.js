import clsx from "clsx";
import style from "../../styles/Home.module.scss";
import Book from "./book/page";
import Packages from "./packages/page";
import Services from "./services/page";
import Gallary from "./gallary/page";
import Review from "./review/page";
import Contact from "./contact/page";
export default function Home() {
  return (
    <div id="home">
      <section id={clsx(style.home)}>
        <h1>Home</h1>
      </section>

      <section id="book">
        <Book />
      </section>

      <section id="packages">
        <Packages />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="gallary">
        <Gallary />
      </section>

      <section id="review">
        <Review />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
