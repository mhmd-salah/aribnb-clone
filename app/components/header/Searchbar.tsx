"use client";
import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range";

function Searchbar () {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndtDate] = useState(new Date())
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };
  const handleSelect = (ranges:any) => {
    console.log(ranges.selection.startDate)
    setStartDate(ranges.selection.startDate) 
    setEndtDate(ranges.selection.endDate);
    console.log("start -------------"+startDate)
    console.log("end -------------" + endDate)
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
          onChange={handleSelect}
        />
      </div> }
    </>
  );
}

export default Searchbar;
