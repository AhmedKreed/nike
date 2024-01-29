import Image from "next/image";
import Link from "next/link";

const Button = ({ icon }: { icon: string }) => {
  return (
    <Link
      href={"#"}
      className="w-fit flex items-center justify-center gap-3 px-7 py-5 font-montserrat border text-lg leading-none bg-coral-red rounded-full text-white"
    >
      Shop now{" "}
      <Image
        src={icon}
        alt={"Arrow icon"}
        className=" rounded-full w-5 h-5 bg-white"
      ></Image>
    </Link>
  );
};

export default Button;
