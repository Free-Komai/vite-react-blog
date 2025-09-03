// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { HiDesktopComputer } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Portforio({ portforioData }) {
  return (
    <section className="container m-auto mt-10">
      <h1 className="text-2xl font-bold p-1.5">Portfolio</h1>
      <motion.div
        className="bg-amber-400 w-[100%] h-1 bg-gradient-to-r from-amber-400 to-amber-50"
        initial={{ x: "-90vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once: 1 }}
        transition={{
          duration: 1,
        }}
      />
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
