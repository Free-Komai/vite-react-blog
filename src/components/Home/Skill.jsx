// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
export default function Skill({ skillData }) {
  return (
    <section className="container m-auto mt-10">
      <h1 className="text-2xl font-bold p-1.5  text-white bg-gradient-to-l from-white via-white to-gray-900">
        Skill
      </h1>
      <div className="flex gap-[5%] flex-wrap">
        {skillData.map((data, num) => (
          <motion.dl
            key={num}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: num * 0.3,
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
