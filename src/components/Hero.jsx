import styles from '../style';
import Button from './Button';

const Hero = () => (
  <section
    id="home"
    className={`flex justify-center md:flex-row flex-col sm:py-56 py-36 relative`}
  >
    <div className="white_gradient" />
    <div className="green_gradient" />

    <div className={`${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 border-[1px] border-primaryLime rounded-full mb-6">
        <p className={`${styles.paragraph} text-primaryLime mx-2`}>
          Welcome to a Modern Financial Experience
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] text-white ss:leading-[90px] leading-[65px] uppercase text-center mb-8">
          <span className="text-primaryLime">Save</span> your time &
          <br className="sm:block hidden" />
          {' '}
          less
          {' '}
          <span className="text-primaryLime">expense</span>
        </h1>
        <div className="flex sm:flex-row flex-col gap-4">
          <Button
            href="https://apps.apple.com/us/app/bank-of-america-mobile-banking/id284847138"
            target="blank"
            title="Download Now"
            styles="bg-primaryLime"
          />
          <Button
            href="#product"
            title="See How It Works"
            styles="border text-primaryWhite"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
