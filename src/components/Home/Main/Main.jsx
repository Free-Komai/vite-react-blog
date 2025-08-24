import styles from "./Main.module.css";

export default function Main({ data }) {
  return (
    <section className={styles.section}>
      <h1>Main</h1>
      <div className={styles.dataArea}>
        {data.map((data, num) => (
          <dl key={num}>
            <dt>{data.title}</dt>
            <dd>{data.description}</dd>
          </dl>
        ))}
      </div>
    </section>
  );
}
