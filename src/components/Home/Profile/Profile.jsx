export default function Profile() {
  return (
    <div className="container flex p-2 m-auto items-center">
      <img src="src/assets/face.jpeg" alt="faceImage" className="w-1/3" />
      <div className="w-2/3">
        <h2 className="text-2xl font-bold">-プロフィール・経歴-</h2>
        <p className="p-2">
          フリーランスでWeb制作を行う予定の駒井と申します。
          <br />
          北海道大学法学部を卒業し、市役所で15年ほど勤め、趣味を活かしWeb制作者へと転身しました。
          <br />
          39歳既婚、小学生の息子がいます。
          <br />
          これまでに制作したコンテンツを掲載していますので、ホームページやWebコンテンツの制作に興味のある方はご連絡ください。
          <br />
          また、公務員時代にはExcelマクロ機能を活用した業務改善の経験もございます。帳票・集計の自動化などにもお力添えできるかもしれません。
        </p>
      </div>
    </div>
  );
}
