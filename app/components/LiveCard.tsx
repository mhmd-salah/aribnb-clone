import Image from "next/image";
import { LiveItem } from "../types/app";

type LiveCardProps= LiveItem
function LiveCard ({ title, img }: LiveCardProps) {
  return (
    <div className="cursor-pointer hover:scale-[1.01] transition ">
      <div className="relative  h-80 w-80">
      <Image src={img} alt="this imag live LiveCard" fill/>
      </div>
      <h3 className="text-2xl mt-3">{ title }</h3>
    </div>
  )
}

export default LiveCard
