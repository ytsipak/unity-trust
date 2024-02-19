import styles, {layout} from '../style';
import {features} from '../constants';

import symbols from '../assets/symbol-defs.svg';

const FeatureCard = ({icon, title, content, index}) => (
  <div
    className={`flex flex-col gap-6 p-6 rounded-[20px] feature-card bg-secondaryLightGrey`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-primaryWhite shadow-md`}
    >
      <svg className="w-[50%] h-[50%] object-contain fill-primaryDark">
        <use href={icon} />
      </svg>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-primaryDark text-[24px] leading-[23px] mb-4">
        {title}
      </h4>
      <p className="font-poppins font-normal text-primaryDark text-[14px] leading-[24px] mb-1 capitalize max-w-[560px]">
        {content}
      </p>
    </div>
  </div>
);

const Advantages = () => (
  <section id="advantages" className={`flex flex-col ${styles.paddingY}`}>
    <div className={`flex items-center flex-col text-center mb-8`}>
      <div className={layout.iconStarContainer}>
        <svg className={layout.iconStar}>
          <use href={`${symbols}#icon-star`} />
        </svg>
        <p className={`${styles.paragraph} mx-2 capitalize`}>
          Awesome benefit from us
        </p>
      </div>
      <h2 className={styles.heading2}>
        Experience the Future of <br className="sm:block hidden" />
        Banking - <span className="text-primaryLime">UnityTrust</span>
      </h2>
    </div>

    <div className={`${layout.advantagesCard} flex-col md:flex-row`}>
      {features.map ((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      )) //spread all of the feature properties
      }
    </div>
  </section>
);

export default Advantages;
