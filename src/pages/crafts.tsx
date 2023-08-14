import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";
import ItemCard from "~/components/itemCard";

export default function crafts() {
    return (
      <>
        <Head>
          <title>The Escape From Tarkov Wiki</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <ItemCard></ItemCard>
        </main>
      </>
    );
  }