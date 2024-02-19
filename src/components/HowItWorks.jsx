import styles, {layout} from '../style';
import Button from './Button';

import {analysis} from '../assets';
import symbols from '../assets/symbol-defs.svg';

const HowItWorks = () => (
  <section
    id="how-it-works"
    className={`${layout.section} flex-col-reverse justify-around gap-8 items-center`}
  >
    <img src={analysis} alt="billing" className={layout.statsImg} />
    <div className={layout.sectionCircleImg}>
      <div className={layout.iconStarContainer}>
        <svg className={layout.iconStar}>
          <use href={`${symbols}#icon-star`} />
        </svg>
        <p className={`${styles.paragraph} mx-2 capitalize`}>
          Anywhere, anytime with safewallet
        </p>
      </div>
      <h2 className={styles.heading2}>
        All <span className="text-primaryLime">Transactions</span> Easily
        <br className="sm:block hidden" />
        on
        Your Mobile
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] my-6`}>
        Paying for anything is as easy as a tap. With CachEase, you can effortlessly handle a wide range of transactions, from bill payments and barcode scans to e-commerce
      </p>
      <Button
        href="https://apps.apple.com/us/app/bank-of-america-mobile-banking/id284847138"
        target="blank"
        title="Download App"
        styles="bg-primaryDark text-primaryWhite font-normal"
      />
    </div>
  </section>
);

export default HowItWorks;
