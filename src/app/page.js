import Image from "next/image";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.center} >
        <Image
            className={styles.logo}
            src="/background.png"
            alt="Valeries factory"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', }}
          />
        </div>
        <div>
          <div>
          <Image
            className={styles.logo}
            src="/background.png"
            alt="Valeries factory"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', }}
          />

          </div>
        </div>
      </main>
    </div>
  );
}
