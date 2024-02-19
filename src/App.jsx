import styles from './style';

import {
  Navbar,
  Hero,
  Advantages,
  HowItWorks,
  Stats,
  Testimonials,
  Footer,
} from './components';

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} relative`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart} heroBackground`}>
      <div className={styles.boxWidth}><Hero /></div>
    </div>

    <div className={`${styles.flexStart} bg-primaryWhite`}>
      <div className={styles.boxWidth}>
        <div className={styles.paddingX}>
          <Advantages />
        </div>
        <div
          className={`${styles.paddingX} bg-secondaryLightGrey xl:rounded-[2%]`}
        >
          <HowItWorks />
          <Stats />
        </div>
        <div className={styles.paddingX}>
          <Testimonials />
        </div>
        <div
          className={`${styles.paddingX} bg-primaryDark xl:rounded-t-[20px]`}
        >
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
