import "./App.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import {
  getPortforioData,
  getProfileData,
  getSkillData,
} from "./libs/microcms";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [portforioData, setPortforioData] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setProfileData(await getProfileData());
      setPortforioData(await getPortforioData());
      setSkillData(await getSkillData());
    };
    fetchData();
  }, []);
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Home
        portforioData={portforioData}
        profileData={profileData}
        skillData={skillData}
      />
      <Footer />
    </div>
  );
}

export default App;
