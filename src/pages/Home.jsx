import Portforio from "../components/Home/Portforio";
import Profile from "../components/Home/Profile";
import Skill from "../components/Home/Skill";

export default function Home({ data }) {
  return (
    <div>
      <Profile />
      <Portforio data={data} />
      <Skill data={data} />
    </div>
  );
}
