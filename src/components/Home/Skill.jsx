import { HiDesktopComputer } from "react-icons/hi";

export default function Skill({ data }) {
  return (
    <section className="container m-auto mt-10">
      <h1 className="text-2xl font-bold p-1.5  text-white bg-gradient-to-l from-white via-white to-gray-900">
        Skill
      </h1>
      <div className="flex gap-[5%] flex-wrap">
        {data.skill.map((data, num) => (
          <dl key={num} className="w-[30%] sm:w-[21.25%] p-3">
            <div className="flex items-center">
              <HiDesktopComputer />
              <dt>{data.name}</dt>
            </div>
            <dd className="p-1 pl-3">{data.star}</dd>
            <img src={data.image.url} alt="testImage" />
          </dl>
        ))}
      </div>
    </section>
  );
}
