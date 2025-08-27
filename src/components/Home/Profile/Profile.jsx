export default function Profile() {
  return (
    <div className="container flex-row sm:flex p-2 m-auto items-center justify-center gap-2 mt-5">
      <img
        src="src/assets/face.jpeg"
        alt="faceImage"
        className="sm:w-1/3 w-2/3 max-w-80 m-auto"
      />
      <div className="sm:w-2/3 w-full m-auto leading-8 p-5 border-r-2 border-b-2 bg-gradient-to-r from-white to-gray-950">
        <h2 className="text-2xl font-bold mt-5 mb-2">-プロフィール・経歴-</h2>
        <p>フリーランスでWeb制作を行う予定の駒井と申します。</p>
        <p>
          北海道大学法学部を卒業し、市役所で15年ほど勤め、趣味を活かしWeb制作者へと転身しました。
        </p>
        <p>39歳既婚、小学生の息子がいます。</p>
        <p>
          私が制作するコンテンツのコンセプトは、シンプルで安価、一度試してみたい方へのHP・LPコンテンツの提供です。
        </p>
        <p>
          ポートフォリオを掲載していますので、興味のある方はぜひご連絡ください。
        </p>
        <p>
          また、公務員時代にはExcelマクロ機能を活用した、帳票・集計の自動化などVBAプログラムの作成経験もございます。お力添えできるかもしれませんので、ぜひご相談ください。
        </p>
      </div>
    </div>
  );
}
