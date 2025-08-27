import Main from "../components/Home/Main/Main";
import Profile from "../components/Home/Profile/Profile";

export default function Home({ data }) {
  // console.log(data);
  return (
    <div>
      <Profile />
      <Main data={data} />
    </div>
  );
}
