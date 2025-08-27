// import styles from "./Main.module.css";
import { HiDesktopComputer } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Main({ data }) {
  return (
    <section className="container m-auto">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-[3%]">
        {data.map((data, num) => (
          <dl key={num} className="p-2 mx-auto w-[30%]">
            <div className="flex items-center">
              <HiDesktopComputer />
              <dt>{data.title}</dt>
            </div>
            <Link to="/portforio">
              <img src={data.url} alt="testImage" />
            </Link>
            <dd>{data.description}</dd>
          </dl>
        ))}
      </div>
    </section>
  );
}
