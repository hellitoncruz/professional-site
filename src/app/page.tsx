import Header from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";
import styles from "../styles/main.module.scss"
import "../styles/global.scss"

export default function Home() {
  return (
    <div className={styles.containerPage}>
      <Header />
        <Main />
      <Footer />
    </div>
  );
}
