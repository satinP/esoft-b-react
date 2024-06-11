"use client"

import Contador from "@/components/Contador/Contador";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Olá!</h1>
      <Contador valorInicial={5} callback={(valor) => console.log(valor)} />

    </main>
  );
}
