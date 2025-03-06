import Image from "next/image";
import styles from "./page.module.css";
import MyComponent from "./components/MyComponent";

export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Meu Titulo</h1>

      <h2 className={styles.heading_module}>Meu Module CSS</h2>

      <div className={styles.container}>
        <p>Testando CSS Module</p>
      </div>

      <div className={styles.container}>
        <p>Teste</p>
      </div>

      {/* Tailwind */}
      <MyComponent/>
    </main>
  );
}
