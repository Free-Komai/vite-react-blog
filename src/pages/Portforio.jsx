import { useParams } from "react-router-dom";

export default function Portforio({ data }) {
  const { id } = useParams();
  return (
    <div>
      <h1>portforioPage</h1>
      <p>{data[id].title}</p>
    </div>
  );
}
