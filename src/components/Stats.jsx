import styles, {layout} from '../style';
import {creditcard} from '../assets';

import symbols from '../assets/symbol-defs.svg';

const Stats = () => (
  <section className={`${layout.section} pt-0 justify-around items-center`}>
    <div className={layout.sectionCircleImg}>
      <div className={layout.iconStarContainer}>
        <svg className={layout.iconStar}>
          <use href={`${symbols}#icon-star`} />
        </svg>
        <p className={`${styles.paragraph} mx-2 capitalize`}>
          Empowering with safewallet
        </p>
      </div>
      <h2 className={styles.heading2}>
        Empowering Your <br className="sm:block hidden" />
        <span className="text-primaryLime">Financial</span> Journey
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] my-5`}>
        <span className="capitalize">
          Transforming banking experiences, empower your finances with viztrust,
        </span> where security meets simplicity for seamless online banking.
      </p>
      <div className="flex gap-8 mb-8">
        <div>
          <h4 className="text-primaryLime font-semibold text-[48px] leading-[60px]">
            2M+
          </h4>
          <p>Registered Customers</p>
        </div>
        <div>
          <h4 className="text-primaryLime font-semibold text-[48px] leading-[60px]">
            $10B+
          </h4>
          <p>Total Revenue</p>
        </div>
      </div>
    </div>
    <img src={creditcard} alt="billing" className={layout.statsImg} />
  </section>
);

export default Stats;
