import Image from "next/image";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Live from "./components/Live";
import Greats from "./components/Greats";

export default function Home() {
  return (
    <main>
      <Banner/>
      <Explore/>
      <Live/>
      <Greats/>
    </main>
  );
}
