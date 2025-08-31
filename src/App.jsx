import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import Contents from "./pages/Contents";
import { useEffect, useState } from "react";
import { getPortforioData, getSkillData } from "./libs/microcms";

function App() {
  const [portforioData, setPortforioData] = useState([]);
  const [skillData, setSkillData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPortforioData(await getPortforioData());
      setSkillData(await getSkillData());
    };
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home portforioData={portforioData} skillData={skillData} />}
        />
        <Route
          path="/contents/:id"
          element={<Contents portforioData={portforioData} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
