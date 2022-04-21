import Navigation from "../home/navigation";
import Head from "next/head";
import styles from "./layout.module.css";
// import MyPortal from "../ui/myPortal";

function Layout(props) {
  // useEffect(() => {
  //   setShow(true);
  // }, [])
  // {show && <MyPortal />}
  return (
    <div className={styles.layout}>
      <Head>
        <title>Emmanuel Garcia</title>
      </Head>
      <Navigation className={styles.nav}/>
      <main className={styles.main}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
