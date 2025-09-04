// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { HiDesktopComputer } from "react-icons/hi";
import { Link } from "react-router-dom";
import Sub from "./Sub";

export default function Portforio({ portforioData }) {
  return (
    <section className="container m-auto mt-10">
      <Sub title="Portforio" />
      <div className="flex gap-[5%] flex-wrap">
        {portforioData.map((data, num) => (
          <dl key={num} className="w-[47.5%] sm:w-[30%] p-3 hover:opacity-90">
            <div className="flex items-center">
              <HiDesktopComputer />
              <dt>{data.title}</dt>
            </div>
            <Link to={`/contents/${num}`}>
              <img src={data.url} alt="testImage" />
            </Link>
          </dl>
        ))}
      </div>
    </section>
  );
}
