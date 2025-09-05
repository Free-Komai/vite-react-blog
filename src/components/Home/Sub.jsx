// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function Sub({ title }) {
  return (
    <motion.h1
      className="text-2xl font-bold p-1.5 text-white bg-gradient-to-r from-gray-950 via-white to-white"
      initial={{ x: "-90vw", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: 1 }}
      transition={{
        duration: 1,
      }}
    >
      {title}
    </motion.h1>
  );
}
