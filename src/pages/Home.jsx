import Footer from "../components/Home/Footer/Footer";
import Header from "../components/Home/Header/Header";
import Main from "../components/Home/Main/Main";

export default function Home({ data }) {
  // console.log(data);
  return (
    <>
      <Header />
      <Main data={data} />
      <Footer />
    </>
  );
}
