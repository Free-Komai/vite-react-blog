import { useParams } from "react-router-dom";

export default function Contents({ portforioData }) {
  window.scrollTo(0, 0);
  const { id } = useParams();

  return (
    <div>
      <h1>{portforioData[id].title}</h1>
      <div>{portforioData[id].description}</div>
      <img src={portforioData[id].url} alt="dataImage" />
      <div>{portforioData[id].content}</div>
    </div>
  );
}
