// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useParams } from "react-router-dom";

export default function Contents({ portforioData }) {
  window.scrollTo(0, 0);
  const { id } = useParams();

  return (
    <>
      {portforioData[id] && (
        <div className="container m-auto p-4">
          <h1 className="text-2xl font-bold mb-2">{portforioData[id].title}</h1>
          <motion.div
            className="bg-amber-400 w-[100%] h-1 bg-gradient-to-r from-amber-400 to-amber-50"
            initial={{ x: "-90vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: 1 }}
            transition={{
              duration: 1,
            }}
          />
          <div className="p-1.5">{portforioData[id].description}</div>
          <img
            src={portforioData[id].url}
            alt="dataImage"
            className="w-[100%]"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: portforioData[id].content,
            }}
            className="wrap-anywhere p-2"
          />
        </div>
      )}
    </>
  );
}
