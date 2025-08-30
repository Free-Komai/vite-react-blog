export default function Profile() {
  return (
    <div className="container flex-row sm:flex p-2 m-auto items-center justify-center gap-2">
      <img
        src="src/assets/face.jpeg"
        alt="faceImage"
        className="sm:w-1/3 w-2/3 max-w-80 m-auto"
      />
      <div className="sm:w-2/3 w-full m-auto leading-8 pr-1 pb-1 bg-clip-padding border-r-2 border-b-2 border-transparent relative">
        <div className="bg-white p-5">
          <h2 className="text-2xl font-bold mb-2">-プロフィール・経歴-</h2>
          <p>フリーランスでWeb制作を仕事にしたい駒井と申します。</p>
          <p>
            北海道大学法学部を卒業し、市役所で15年ほど勤め、趣味を活かしWeb制作者へと転身したいと考えています。
          </p>
          <p>39歳既婚、小学生の息子がいます。</p>
          <p>
            私が制作するコンテンツのコンセプトは『シンプルで安価、一度試してみたい』です。
          </p>
          <p>
            ポートフォリオを掲載していますので、興味のある方はぜひご覧ください。
          </p>
          <p>
            また、公務員時代にはExcelマクロ機能を活用した、帳票作成・集計の自動化などVBAプログラムの作成経験もございます。
          </p>
        </div>
        <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-white via-white to-gray-950 "></div>
      </div>
    </div>
  );
}
