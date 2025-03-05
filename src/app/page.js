"use client";
import Image from "next/image";
import styles from "./styles/page.module.css";
import ContactForm2 from "./components/contactForm2";
import TypewriterText from "./components/TypeWriter";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.center} >
        <Image
            className={styles.logo}
            src="/background2.jpg"
            alt="Background"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '100vh',justifySelf: 'auto', position: 'fixed', zIndex: '-1', right: '0', bottom: '0rem', pointerEvents: 'none', opacity: '75%'}}
          />
        </div>
        <div className={styles.centerCard}>
        <Image
            className={`${styles.logo} ${styles.fadeInBlur}`}
            src="/BNT-LOGO.svg"
            alt="Background"
            placeholder="empty" 
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto', justifySelf: 'auto', position: 'relative', pointerEvents: 'none', maxHeight: '35vh', filter: 'brightness(500) drop-shadow(3px 3px 2px rgba(0, 0, 0, .7))' }}
          />
          <TypewriterText /> 
        </div>
        <div style={{marginTop: '50vh', width: "100vw", background: '#E5E9ED' }}>
          <div className={styles.card_container}>
            <div className={styles.card} style={{alignItems: "flex-end",backgroundColor: "#026481", color: 'white'}}>
              {/* <div className={styles.card_svg_container}>
                <Image
                  src="/plane.svg"
                  alt="Background"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.card_svg}
               />
              </div> */}
              <div className={styles.card_paragraph}>
                <p className={styles.subtitle}>Logistics</p>
                <p className={styles.paragraph}>
                  We provide consulting, contracting, and financial management for land, sea, and air transportation. Our goal with this service is to optimize costs and transit time.
                </p>
              </div>
            </div>
            <div className={styles.card} >
              {/* <div className={styles.card_svg_container}>
                <Image
                  src="/boat.svg"
                  alt="Background"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.card_svg}
                />
              </div> */}
              <div className={styles.card_paragraph}>
                <p className={styles.subtitle}>Export on behalf of third parties</p>
                <p className={styles.paragraph}>
                  We become your foreign trade department, expanding your sales internationally while optimizing administrative, financial, and logistical costs. Our company exports on behalf of yours, preserving the origin of the sale to the client and managing the documentary, administrative, and operational tasks.
                </p>
              </div>
            </div>
            <div>
            </div>
          </div>
          <div className={styles.card_container}>
            <div className={styles.card} style={{alignItems: "flex-end"}}>
            {/* <div className={styles.card_svg_container}>
                <Image
                  src="/truck.svg"
                  alt="Background"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.card_svg}
                />
              </div> */}
              <div className={styles.card_paragraph}>
                <p className={styles.subtitle}>Imports</p>
                <p className={styles.paragraph}>
                  We import consumer goods, raw materials, and capital goods. We also handle temporary imports for machinery repairs and product manufacturing to add value. Starting with a feasibility analysis covering commercial, financial, tax, and logistical aspects, we offer a comprehensive door-to-door service.
                </p>
              </div>
            </div>
            <div className={styles.card} style={{ backgroundColor: "#026481", color: 'white',}}>
              {/* <div className={styles.card_svg_container}>
                  <Image
                    src="/plant.svg"
                    alt="Background"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={styles.card_svg}
                  />
                </div> */}
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
          </div>
          <div style={{ backgroundColor: "#026481", color: 'white', paddingTop: '10rem'}}>
            <div className={styles.card_container} style={{ width: '100%'}}>
                <div className={styles.card_paragraph} style={{margin: 'auto', textAlign: 'center',  margin: "auto", textAlign: "center", maxWidth: "1000px", marginTop: '-2px'}}>
                  <p className={styles.title}>About us</p>
                  <div className={styles.traits}>
                    <div className={styles.traits_section}>
                      <Image
                        src="/handshake.svg"
                        alt="Background"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={styles.card_svg}
                      />
                      <p className={styles.subtitle}>
                        COMMITMENT
                      </p>
                      <p>
                      Facing challenges with determination, creativity, and delivering results.
                      </p>
                    </div>
                    <div className={styles.traits_section}>
                      <Image
                        src="/shield.svg"
                        alt="Background"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={styles.card_svg}
                      />
                      <p className={styles.subtitle}>
                        INTEGRITY
                      </p>
                      <p>
                        Operating with ethics, honesty, and full transparency.
                      </p>
                    </div>
                    <div className={styles.traits_section}>
                      <Image
                        src="/check.svg"
                        alt="Background"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={styles.card_svg}
                      />
                      <p className={styles.subtitle}>
                        TRUST
                      </p>
                      <p>
                        Achieving the best results through teamwork and respect.
                      </p>
                    </div>
                    <div className={styles.traits_section}>
                      <Image
                        src="/medal.svg"
                        alt="Background"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={styles.card_svg}
                      />
                      <p className={styles.subtitle}>
                        EXCELLENCE
                      </p>
                      <p>
                        Striving for improvement with professionalism and humility.
                      </p>
                    </div>
                  </div>
                  <p className={styles.subtitle} style={{width: '90%', margin: 'auto', marginTop: '2rem'}}>
                  We are experts in international trade. Our main activity is the trading and brokering of commodities and specialties derived from agricultural by-products, developing commercial and administrative processes for our company and third parties. With over 30 years of experience in the market, we now have a solid presence in countries across America, Europe, and Asia through our own offices and associates. With the professionalism that defines us, we manage exports and imports, engaging in areas such as Finance, Administration, Legal, Accounting, and Logistics.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
