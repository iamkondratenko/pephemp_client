import Image from "next/image";
import styles from "./page.module.css";
import HeroSlider from '@/app/Components/HeroSlider/HeroSlider';
import Header from "@/app/Components/Header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <HeroSlider />
    </main>
  );
}
