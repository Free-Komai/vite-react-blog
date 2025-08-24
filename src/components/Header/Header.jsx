import styles from "./Header.module.css";
import Icons from "./Icons";
import P5 from "./P5";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>ポートフォリオBLOG</h1>
      <Link>
        <Icons to="/" />
      </Link>
      <P5 />
    </section>
  );
}
