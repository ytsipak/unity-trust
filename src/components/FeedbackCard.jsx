const FeedbackCard = ({content, name, title, img}) => (
  <div className="flex justify-between flex-col px-10 py-8 rounded-[20px] max-w-[370px] lg:mr-10 sm:mr-5 mr-0 feedback-card bg-secondaryLightGrey">
    <div className="flex flex-col">
      <div className="flex justify-center mb-6">
        <img
          src={img}
          className="w-[100px] h-[100px] rounded-full"
          alt={name}
        />
      </div>

      <h4 className="font-poppins font-semibold text-primaryTitle text-[26px] leading-[32px] justify-start">
        {name}
      </h4>
      <p
        className={`font-poppins font-normal text-[16px] leading-[32px] text-primaryTitle my-2`}
      >
        {content}
      </p>
    </div>
  </div>
);

export default FeedbackCard;
