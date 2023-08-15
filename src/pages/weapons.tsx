import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";
import ItemCard from "~/components/itemCard";
import ResponsiveAppBar from "~/components/nav";

export default function weapons() {
    return (
      <>
        <div>
          <ItemCard></ItemCard>
        </div>
      </>
    );
  }