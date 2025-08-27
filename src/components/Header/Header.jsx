import Icons from "./Icons";
import P5 from "./P5";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="relative bg-gradient-to-br from-gray-400">
      <Link to="/">
        <Icons />
        <h1 className="absolute top-1/2 left-1/2  w-8/10 text-[5vw] -translate-1/2 text-center font-bold">
          Webコンテンツを紹介する
        </h1>
      </Link>
      <P5 />
    </section>
  );
}
