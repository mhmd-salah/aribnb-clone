import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";

type SearchParams = {
  location:string
  startDate:string
  endDate:string
  numOfGests:string

}
function SearchResult ({ searchParams: {location, startDate, endDate, numOfGests } }:{searchParams:SearchParams}) {
  let formatedStartDate;
  let formatedEndtDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd  MMMM yy");
    formatedEndtDate = format(new Date(endDate), "dd  MMMM yy");
  }
  const range = `${formatedStartDate} - ${formatedEndtDate}`
  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGests} Guests`} />
      <main>
        <section>
          <p className="text-sm">
            300 Stays - {range} - for {numOfGests} Guests
          </p>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default SearchResult;
