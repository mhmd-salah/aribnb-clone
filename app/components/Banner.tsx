import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]">
      <Image
        src='https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80'
        alt="this landing img"
        className="object-cover object-left"
        fill
      />
      <div className="absolute top-1/2 text-center w-full  ">
        <p className="text-sm sm:text-lg md:mb-4">Not sure where to go ? Prefect.</p>
        <button
          className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold"
          type="button"
        >
          i&apos;m flexbal
        </button>
      </div>
    </div>
  )
}

export default Banner