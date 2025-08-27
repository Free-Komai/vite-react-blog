import Icons from "./Icons";
import P5 from "./P5";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="relative">
      <Link to="/">
        <Icons />
        <h1 className="absolute top-1/2 left-1/2 text-neutral-200  w-8/10 text-[9vw] -translate-1/2 text-center font-bold">
          ポートフォリオBLOG
        </h1>
      </Link>
      <P5 />
    </section>
  );
}
