import React from 'react';

const Button = ({href, target, title, styles}) => {
  return (
    <button
      type="button"
      className={`py-[10px] px-8 font-poppins font-medium text-[18px] text-primary outline-none rounded-full ${styles} hover:scale-105 duration-150`}
    >
      <a href={href} target={target}>{title}</a>
    </button>
  );
};

export default Button;
