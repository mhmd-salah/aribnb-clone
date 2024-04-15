"use client";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";

function Searchbar () {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndtDate] = useState(new Date())
  const [numOfGuest,setNumOfGuest] = useState(1)
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };
  const handleSelect = (ranges: RangeKeyDict  ) => {
    setStartDate(ranges.selection.startDate as Date)
    setEndtDate(ranges.selection.endDate as Date)
  }
  return (
    <>
      <div className="flex items-center md:border-2 rounded-full py-2 ">
        <input
          type="text"
          placeholder="Search"
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
          value={ input }
          onChange={ e => { setInput(e.target.value); } }
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      { input && <div className=" absolute bg-white p-3 top-[100%] left-[50%] flex flex-col col-span-3 mx-auto translate-x-[-50%] ">
        <DateRangePicker
          ranges={ [selectionRange] }
          onChange={ handleSelect }
          rangeColors={["#ff5a5f"]}
          minDate={new Date()}
        />
        <div className="flex items-center border-b mb-4">
          <h2 className="text-2xl flex-grow font-semibold">Number of Guest</h2>
          <UsersIcon className="w-7"/>
          <input
            type="number"
            className="w-12 pl-2 text-lg outline-none text-red-400"
            value={numOfGuest}
            min={1}
            onChange={e=>setNumOfGuest(Number(e.target.value))}
          />

        </div>
      </div> }
    </>
  );
}

export default Searchbar;
