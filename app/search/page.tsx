import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { getSearchResult } from "../utils/api";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGests: string;

};
async function SearchResult ({ searchParams: { location, startDate, endDate, numOfGests } }: { searchParams: SearchParams; }) {
  let formatedStartDate;
  let formatedEndtDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd  MMMM yy");
    formatedEndtDate = format(new Date(endDate), "dd  MMMM yy");
  }
  const range = `${formatedStartDate} - ${formatedEndtDate}`;
  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More Filters"
  ];
  const searchReusltData = await getSearchResult()
  return (
    <>
      <Header placeholder={ `${location} | ${range} | ${numOfGests} Guests` } />
      <main>
        <section
          className="pt-14"
        >
          <div className="container">
            <p className="text-sm">
              300 Stays - { range } - for { numOfGests } Guests
            </p>
            <h2
              className="text-3xl font-semibold mt-2 mb-6"

            >Stays { location }</h2>
            <div
              className="hidden lg:inline-flex mb-5 space-x-3 text-gray-300 ">
              { filters.map((btn) => (
                <button type="button" className="button" key={ btn }>{ btn }</button>
              )) }
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SearchResult;
