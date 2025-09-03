import { useParams } from "react-router-dom";

export default function Contents({ portforioData }) {
  window.scrollTo(0, 0);
  const { id } = useParams();

  return (
    <>
      {portforioData[id] && (
        <div className="container m-auto p-4">
          <h1 className="text-2xl font-bold mb-2">{portforioData[id].title}</h1>
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
