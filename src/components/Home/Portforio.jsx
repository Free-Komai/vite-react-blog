import { HiDesktopComputer } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Portforio({ data }) {
  return (
    <section className="container m-auto mt-10">
      <h1 className="text-2xl font-bold p-1.5 text-white bg-gradient-to-l from-white via-white to-gray-900">
        Portfolio
      </h1>
      <div className="flex gap-[5%] flex-wrap">
        {data.portforio.map((data, num) => (
          <dl key={num} className="w-[47.5%] sm:w-[30%] p-3 hover:opacity-90">
            <div className="flex items-center">
              <HiDesktopComputer />
              <dt>{data.title}</dt>
            </div>
            <Link to={`/contents/${num}`}>
              <img src={data.url} alt="testImage" />
            </Link>
          </dl>
        ))}
      </div>
    </section>
  );
}
