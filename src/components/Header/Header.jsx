import { useEffect, useState } from "react";
import Icons from "./Icons";
import P5 from "./P5";

export default function Header() {
  const [flag, setFrag] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 37) setFrag((prev) => !prev);
  }, [counter]);

  return (
    <section className="bg-clip-padding border-transparent relative h-[1/4vh + 1/15vw]">
      <Icons className="z-3" />
      {flag ? (
        <>
          <h1 className="absolute z-2 top-1/2 left-1/2  w-8/10 h-[7vw] text-[5vw] -translate-1/2 text-center font-bold bg-white">
            Web制作ポートフォリオ
          </h1>
          <div className="absolute inset-0 z-1 w-6/10 h-[8vw] -bottom-2 m-auto bg-gradient-to-br from-white via-white to-gray-950 rounded-4xl"></div>
        </>
      ) : (
        <h1 className="absolute top-1/2 left-1/2  w-8/10 h-[7vw] text-[5vw] -translate-1/2 text-center font-bold">
          Web制作ポートフォリオ
        </h1>
      )}
      <P5 setCounter={setCounter} className="m-auto" />
    </section>
  );
}
