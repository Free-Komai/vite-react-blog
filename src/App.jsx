import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import { createClient } from "microcms-js-sdk";
import { useState } from "react";
import Layout from "./layouts/Layout";
import Contents from "./pages/Contents";

const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

function App() {
  const [data, setData] = useState({
    portforio: [],
    skill: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getPortforioData = await client.get({
          endpoint: "portforio",
        });
        const getSkillData = await client.get({
          endpoint: "skill",
        });
        setData({
          ...data,
          portforio: getPortforioData.contents,
          skill: getSkillData.contents,
        });
      } catch (error) {
        console.error("error fetching :", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home data={data} />} />
          <Route path="/contents/:id" element={<Contents data={data} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
