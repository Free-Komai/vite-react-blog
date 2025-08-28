import { HiDesktopComputer } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Main({ data }) {
  return (
    <section className="container m-auto">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-[5%] flex-wrap">
        {data.map((data, num) => (
          <dl key={num} className="w-[47.5%] sm:w-[30%]">
            <div className="flex items-center">
              <HiDesktopComputer />
              <dt>{data.title}</dt>
            </div>
            <Link to={`/portforio/${num}`}>
              <img src={data.url} alt="testImage" />
            </Link>
          </dl>
        ))}
      </div>
    </section>
  );
}
