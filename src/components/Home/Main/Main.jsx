// import styles from "./Main.module.css";
import { HiDesktopComputer } from "react-icons/hi";

export default function Main({ data }) {
  return (
    <section className="">
      <h1>Portfolio</h1>
      <div className="flex gap-1">
        {data.map((data, num) => (
          <dl key={num} className="p-3 bg-green-600 mx-auto">
            <div className="flex items-center justify-center">
              <HiDesktopComputer />
              <dt>{data.title}</dt>
            </div>
            <dd>{data.description}</dd>
          </dl>
        ))}
      </div>
    </section>
  );
}
