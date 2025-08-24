import styles from "./Main.module.css";
import { HiDesktopComputer } from "react-icons/hi";

export default function Main({ data }) {
  return (
    <section className={styles.section}>
      <h1>Portfolio</h1>
      <div className={styles.dataArea}>
        {data.map((data, num) => (
          <dl key={num}>
            <span>
              <HiDesktopComputer />
              <dt>{data.title}</dt>
            </span>
            <dd>{data.description}</dd>
          </dl>
        ))}
      </div>
    </section>
  );
}
