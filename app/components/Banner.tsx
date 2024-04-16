import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[84vh]  ">
      <Image
        src='/pexels-asad-photo-maldives-1591361.jpg'
        alt="this landing img"
        className="object-cover object-left rounded-md"
        fill
      />
      <div className="absolute top-1/2 -translate-y-[50%] text-center w-full z-10 ">
        <p className="text-[20px] mb-4 md:text-[40px] font-bold md:mb-8 text-white ">Not sure where to go ? Prefect.</p>
        <button
          className=" bg-white px-8 py-3 shadow-md rounded-full font-bold"
          type="button"
        >
          i&apos;m flexbal
        </button>
      </div>
    </div>
  )
}

export default Banner