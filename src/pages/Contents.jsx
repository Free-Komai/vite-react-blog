// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import Sub from "../components/Home/Sub";

export default function Contents({ portforioData }) {
  window.scrollTo(0, 0);
  const { id } = useParams();

  return (
    <>
      {portforioData[id] && (
        <div className="container m-auto p-4">
          <Sub title={portforioData[id].title} />
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
