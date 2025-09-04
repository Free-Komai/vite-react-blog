// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Sub from "./sub";

export default function Skill({ skillData }) {
  return (
    <section className="container m-auto mt-10">
      <Sub title="Skill" />
      <div className="flex flex-wrap gap-[8%] justify-center">
        {skillData.map((data, num) => (
          <motion.dl
            key={num}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: num * 0.1,
              type: "spring",
            }}
            className="w-30 p-3 ml-2"
          >
            <div className="flex items-center">
              <dt className="font-bold">{data.name}</dt>
            </div>
            <dd className="p-1 pl-3">{data.star}</dd>
            <img src={data.image.url} alt="testImage" />
          </motion.dl>
        ))}
      </div>
    </section>
  );
}
