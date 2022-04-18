import { Fragment } from "react";
import Navigation from "../home/navigation";
import Aside from "../home/aside";
import Head from "next/head";
import styles from "./layout.module.css";

function Layout(props) {
  return (
    <div className={styles.layout}>
      <Head>
      <title>Emmanuel Garcia</title>
      </Head>
      <Navigation />
      <Aside/>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
