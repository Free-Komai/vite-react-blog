import styles from "./Icons.module.css";
import { Gi3dGlasses } from "react-icons/gi";

export default function Icons() {
  return (
    <section className={styles.section}>
      <div className={styles.homeIcon}>
        <Gi3dGlasses />
        <h1>Home</h1>
      </div>
    </section>
  );
}
