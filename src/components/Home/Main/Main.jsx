// import styles from "./Main.module.css";
import { HiDesktopComputer } from "react-icons/hi";

export default function Main({ data }) {
  return (
    <section className="">
      <h1>Portfolio</h1>
      <div className="flex gap-[3%]">
        {data.map((data, num) => (
          <dl key={num} className="p-2 bg-green-600 mx-auto w-[30%]">
            <div className="flex items-center">
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
