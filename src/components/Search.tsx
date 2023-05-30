import React from 'react';
import Button from './Button';

type Props = {
  handleSubmit: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => void;

  handleType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
};

const Search: React.FC<Props> = ({ handleSubmit, handleType, isError }) => {
  return (
    <div className="w-4/5 md:w-3/5 m-auto mt-10">
        <div className="flex w-full">
        <input
          id="search"
          type="text"
          placeholder="Search GitHub username…"
          className="bg-[#ffffff] dark:bg-[#1e2c48] text-gray-900 dark:text-white w-full h-14 pl-3 rounded-l-lg outline-none"
          onChange={handleType}
          onKeyDown={handleSubmit}
        />
        <span className='bg-[#ffffff] dark:bg-[#1e2c48] h-14 pt-2 rounded-r-lg'>
            <Button handleClick={handleSubmit} />
        </span>
        </div>

        {isError && (
          <div
            role="alert"
            className="text-center text-lg mt-1 text-gray-900 dark:text-white"
          >
            Please Search a Correct Github User
          </div>
        )}

    </div>
  );
};

export default Search;