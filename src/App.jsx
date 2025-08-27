import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import { createClient } from "microcms-js-sdk";
import { useState } from "react";
import Layout from "./layouts/Layout";
import Portforio from "./pages/Portforio";

const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const x = await client.get({ endpoint: "blog" });
        setData(x.contents);
      } catch (error) {
        console.error("error fetching :", error);
      }
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home data={data} />} />
          <Route path="/portforio" element={<Portforio data={data} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
