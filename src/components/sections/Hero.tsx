import { arrowRight } from "@/assets/icons";
import Button from "../Button";
import { statistics } from "@/constants";
import ImageSlider from "../ImageSlider";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative flex justify-center flex-col items-start xl:w-2/5 w-full pt-28 max-xl:padding-x">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white relative z-10 pr-10 xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-4 mr-5">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button icon={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => {
            return (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <ImageSlider />
    </section>
  );
};

export default Hero;
