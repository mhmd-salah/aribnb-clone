import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { useSearchParams } from "next/navigation";

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
      <Header placeholder={`${location} | ${range} | ${numOfGests}`} />
      <main>

      </main>
      <Footer/>
    </>
  )
}

export default SearchResult;
