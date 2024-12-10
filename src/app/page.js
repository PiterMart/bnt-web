import Image from "next/image";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.center} >
        <Image
            className={styles.logo}
            src="/BNT-LOGO_SIGLAS.svg"
            alt="Background"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', padding: '20rem' }}
          />
        </div>
        <div>
          {/* <div>
          <Image
            className={styles.logo}
            src="/BNT-LOGO_SIGLAS.svg"
            alt="Background"
            width={0}
            height={0}
            sizes="100vw"
          />
          </div> */}
        </div>
        <div style={{marginTop: '50vh', width: "100vw", background: '#E5E9ED' , paddingTop: '5REM', paddingBottom: '5rem'}}>
          <div className={styles.card_container}>
            <div className={styles.card}>
              <div className={styles.card_svg_container}>
                <Image
                  src="/plane.svg"
                  alt="Background"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.card_svg}
                />
              </div>
              <div className={styles.card_paragraph}>
                <p className={styles.subtitle}>Logistics</p>
                <p className={styles.paragraph}>
                  We provide consulting, contracting, and financial management for land, sea, and air transportation. Our goal with this service is to optimize costs and transit time.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_svg_container}>
                <Image
                  src="/boat.svg"
                  alt="Background"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.card_svg}
                />
              </div>
              <div className={styles.card_paragraph}>
                <p className={styles.subtitle}>Export on behalf of third parties</p>
                <p className={styles.paragraph}>
                  We become your foreign trade department, expanding your sales internationally while optimizing administrative, financial, and logistical costs. Our company exports on behalf of yours, preserving the origin of the sale to the client and managing the documentary, administrative, and operational tasks.
                </p>
              </div>
            </div>
            <div className={styles.card}>
            <div className={styles.card_svg_container}>
                <Image
                  src="/truck.svg"
                  alt="Background"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.card_svg}
                />
              </div>
              <div className={styles.card_paragraph}>
                <p className={styles.subtitle}>Imports</p>
                <p className={styles.paragraph}>
                  We import consumer goods, raw materials, and capital goods. We also handle temporary imports for machinery repairs and product manufacturing to add value. Starting with a feasibility analysis covering commercial, financial, tax, and logistical aspects, we offer a comprehensive door-to-door service.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_svg_container}>
                  <Image
                    src="/plant.svg"
                    alt="Background"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={styles.card_svg}
                  />
                </div>
                <div className={styles.card_paragraph}>
                  <p className={styles.subtitle}>Export of products for human and animal consumption</p>
                  <p className={styles.paragraph}>
                  As our main activity, we export daily to South America, Central America, the European Union, and Asia products derived from agricultural production. Under strict quality control protocols, in both our own and third-party facilities, our production meets the international certifications demanded by the market. These include:
                  Oils
                  Vegetable and animal fatty acids
                  Butters
                  Margarines
                  Glycerols and derivatives
                  Protein and energy blends (feed & food grade)
                  And more.
                  </p>
                </div>
              </div>
            <div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
