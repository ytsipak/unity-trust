import styles, {layout} from '../style';
import FeedbackCard from './FeedbackCard';

import {feedback} from '../constants';
import symbols from '../assets/symbol-defs.svg';

const Testimonials = () => (
  <section
    id="testimonials"
    className={`${styles.flexCenter} sm:py-16 pt-8 pb-10 sm:pb-16 flex-col relative`}
  >
    <div className="w-full flex justify-between items-center flex-col sm:mb-14 mb-6 relative z-[1]">
      <div className={layout.iconStarContainer}>
        <svg className={layout.iconStar}>
          <use href={`${symbols}#icon-star`} />
        </svg>
        <p className={`${styles.paragraph} mx-2 capitalize`}>
          Testimonial
        </p>
      </div>
      <h1 className={`${styles.heading2} text-center`}>
        What our <span className="text-primaryLime">Happy User</span> says
      </h1>
    </div>

    <div className="flex flex-wrap gap-8 sm:justify-center justify-center w-full feedback-container items-center relative z-[1]">
      {feedback.map (card => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
