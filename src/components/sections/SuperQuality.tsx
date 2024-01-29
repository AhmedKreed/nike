import Link from "next/link";
import Image from "next/image";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Link
          href={"#"}
          className="lex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      bg-coral-red text-white border-coral-red rounded-full undefined w-fit mt-11"
        >
          View details
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={"https://nike-rosy.vercel.app/assets/shoe8-721e1149.svg"}
          alt={""}
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
