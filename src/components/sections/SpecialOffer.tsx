import Image from "next/image";
import Button from "../Button";
import { arrowRight } from "@/assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <Image
        src={"https://nike-rosy.vercel.app/assets/offer-dd627fbb.svg"}
        alt={"Shoe Promotion"}
        width={733}
        height={687}
      />
      <div>
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button icon={arrowRight} />
          <button
            className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      bg-white text-slate-gray border-slate-gray rounded-full undefined"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
