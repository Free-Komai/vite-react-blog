import { useParams } from "react-router-dom";

export default function Contents({ data }) {
  const { id } = useParams();
  return (
    <div>
      <h1>{data.portforio[id].title}</h1>
      <div>{data.portforio[id].description}</div>
      <img src={data.portforio[id].url} alt="dataImage" />
      <div>{data.portforio[id].content}</div>
    </div>
  );
}
