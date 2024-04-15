import Image from "next/image";
import Link from "next/link";

type CreateProps = {
  img: string,
  title: string,
  description: string,
  linkText: string;
};
function Greats (props: CreateProps) {
  return (
    <div className="container relative my-10">
      <div className=" h-96 w-full">
        <Image
          src={ props.img }
          alt="this img"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl -z-10"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className=" text-[34px] md:text-5xl text-white font-bold  mb-3 ">{ props.title }</h3>
        <p className="text-lg text-white">{ props.description }</p>
        <Link
          className='text-sm px-4 py-2 rounded-lg mt-5 block text-black  w-fit bg-white'
          href={"/"}
        >
          { props.linkText }
        </Link>
      </div>
    </div>
  );
}

export default Greats;
