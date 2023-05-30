import React from 'react';

type Props = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({ handleClick }) => (
  <button
    type="button"
    className="bg-[#0055ff] text-white w-24 md:w-28 h-10 rounded-lg md:font-semibold"
    onClick={handleClick}
  >
    Search
  </button>
);

export default Button;