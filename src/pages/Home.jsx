import Portforio from "../components/Home/Portforio";
import Profile from "../components/Home/Profile";
import Skill from "../components/Home/Skill";

export default function Home({ portforioData, skillData, profileData }) {
  return (
    <div>
      <Profile profileData={profileData} />
      <Portforio portforioData={portforioData} />
      <Skill skillData={skillData} />
    </div>
  );
}
