import { services } from "@/constants";
import Image from "next/image";
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((serv) => (
        <div
          key={serv.label}
          className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 "
        >
          <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <Image src={serv.imgURL} alt={serv.label} />
          </div>
          <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
            {serv.label}
          </h3>
          <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
            {serv.subtext}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Services;
