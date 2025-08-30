import { useParams } from "react-router-dom";

export default function Contents({ data }) {
  const { id } = useParams();
  return (
    <div>
      <h1>portforioPage</h1>
      <p>{data.portforio[id].title}</p>
    </div>
  );
}
