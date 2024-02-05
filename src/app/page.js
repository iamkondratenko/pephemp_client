import Image from "next/image";
import styles from "./page.module.css";
import HeroSlider from '@/app/Components/HeroSlider/HeroSlider'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSlider />
    </main>
  );
}
