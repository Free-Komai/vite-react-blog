import Profile from "../components/Home/Profile";
import Portforio from "../components/Home/Portforio";
import Skill from "../components/Home/Skill";

export default function Home({ profileData, portforioData, skillData }) {
  return (
    <div>
      {profileData && <Profile profileData={profileData} />}
      {portforioData && <Portforio portforioData={portforioData} />}
      {skillData && <Skill skillData={skillData} />}
    </div>
  );
}
