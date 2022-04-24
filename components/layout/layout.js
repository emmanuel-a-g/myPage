import Navigation from "../home/navigation";
import Head from "next/head";
import styles from "./layout.module.css";
import MyPortal from "../ui/myPortal";
import { useState, useEffect } from 'react';
import { useMyContext } from "../context/myContext";

function Layout(props) {
  const {name, sayHiTo, date } = useMyContext();
  useEffect(() => {
    if (name) {
      let timer = setTimeout(() => {
        sayHiTo("");
      }, 6000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [name])

  return (
    <div className={styles.layout}>
    <Head>
    <title>Emmanuel Garcia</title>
    </Head>
    {name && <MyPortal name={name} date={date}/>}
    <Navigation className={styles.nav}/>
      <main className={styles.main}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
