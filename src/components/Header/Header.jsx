import styles from "./Header.module.css";
import P5 from "./P5";

export default function Header() {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>ポートフォリオBLOG</h1>
      <P5 />
    </section>
  );
}
