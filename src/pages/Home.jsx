import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Home/Main/Main";
import styles from "./Home.module.css";

export default function Home({ data }) {
  // console.log(data);
  return (
    <div className={styles.home}>
      <Main data={data} />
    </div>
  );
}
