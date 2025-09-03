export default function Profile({ profileData }) {
  console.log(profileData);
  return (
    <div className="container flex-row sm:flex p-2 m-auto items-center justify-center gap-2">
      <img
        src={profileData[0].image.url}
        alt="faceImage"
        className="sm:w-1/3 w-2/3 max-w-80 m-auto"
      />
      <div className="sm:w-2/3 w-full m-auto leading-8 pr-1 pb-1 bg-clip-padding border-r-2 border-b-2 border-transparent relative">
        <div className="bg-white p-5">
          <h2 className="text-2xl font-bold mb-2">-プロフィール-</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: profileData[0].description,
            }}
          />
        </div>
        <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-white via-white to-gray-950 "></div>
      </div>
    </div>
  );
}
