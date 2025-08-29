import Main from "../components/Home/Portforio";
import Profile from "../components/Home/Profile";

export default function Home({ data }) {
  // console.log(data);
  return (
    <div>
      <Profile />
      <Main data={data} />
    </div>
  );
}
