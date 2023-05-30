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
    <div className="flex w-4/5 md:w-3/5 m-auto mt-10">
        <input
          id="search"
          type="text"
          placeholder="Search GitHub username…"
          className="bg-[#ffffff] dark:bg-[#1e2c48] text-gray-900 dark:text-white w-full h-14 pl-3 rounded-l-lg outline-none"
          onChange={handleType}
          onKeyDown={handleSubmit}
        />
        {isError && (
          <div
            role="alert"
            className=""
          >
            No results
          </div>
        )}
        <span className='bg-[#ffffff] dark:bg-[#1e2c48] h-14 pt-2 rounded-r-lg'>
            <Button handleClick={handleSubmit} />
        </span>
    </div>
  );
};

export default Search;