function Search() {
  return (
    <>
      <div className="flex flex-col mt-6 md:mt-10">
        <div className="search-box mx-auto my-auto w-4/5 md:w-2/4">
          <form className="flex flex-row">
            <span className="flex items-center bg-[#ffffff] dark:bg-[#1e2c48] rounded-lg rounded-r-none md:pl-2">🔍</span>
            <input className="bg-[#ffffff] dark:bg-[#1e2c48] placeholder:text-[#7e7e7b] dark:text-white font-semibold placeholder-italic placeholder-thin md:placeholder-semibold h-12 w-full md:px-2 outline-none"
              type="text" placeholder="Search Github username..."
            />

            <span className="flex items-center bg-[#ffffff] dark:bg-[#1e2c48] rounded rounded-l-none border-0 px-1 md:px-3 font-bold text-grey-100">
              <button className="bg-[#0055ff] text-white relative w-24 md:w-28 h-10 rounded-lg md:font-semibold">Search</button>
            </span>
          </form>
        </div>
      </div>
    </>
  )
}

export default Search