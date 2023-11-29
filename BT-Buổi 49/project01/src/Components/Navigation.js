import styles from "../styles/Nav.module.scss";
import Link from "next/link";
import clsx from "clsx";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa6";
export default function Navigation() {
  return (
    <nav className={clsx(styles.navigation)}>
      <div className={clsx(styles.logo)}>
        <Link href="#">
          <span>S</span>
          TRAVEL
        </Link>
      </div>
      <ul className={clsx(styles.menu)}>
        <li>
          <Link href="#">Trang Chủ</Link>
        </li>
        <li>
          <Link href="#book">Đặt Lịch</Link>
        </li>
        <li>
          <Link href="#packages">Uư Đãi</Link>
        </li>
        <li>
          <Link href="#services">Dịch Vụ</Link>
        </li>
        <li>
          <Link href="#gallary">Thư Viện</Link>
        </li>
        <li>
          <Link href="#review">Đánh Gía</Link>
        </li>
        <li>
          <Link href="#contact">Liên Hệ</Link>
        </li>
      </ul>

      <div className={clsx(styles.menu)}>
        <div className="">
          <FaRegMoon />
        </div>
        <div className="">
          <FaSearch />
        </div>
        <div className="">
          <FaUser />
        </div>
        <div className=""></div>
      </div>
    </nav>
  );
}
