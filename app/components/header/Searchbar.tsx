import {SearchIcon} from "@heroicons/react/solid" 
function Searchbar () {
  return (
    <div className="flex items-center md:border-2 rounded-full py-2 ">
      <input
        type="text"
        placeholder="Search"
        className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
      />
      <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
    </div>
  )
}

export default Searchbar
