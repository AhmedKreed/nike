"use client";
import Image, { StaticImageData } from "next/image";
import { shoes } from "@/constants";
import { useState } from "react";
const ImageSlider = () => {
  const [shoee, setShoe] = useState(shoes[0].bigShoe);
  const handleClick = (i: number) => setShoe(shoes[i].bigShoe);
  return (
    <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center ">
      <Image
        src={shoee}
        alt={"shoe"}
        width={610}
        height={502}
        className="object-contain relative z-10 max-h-[500px]"
      />
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe, index) => (
          <div key={index}>
            <div
              className={`
                ${
                  shoe.bigShoe === shoee
                    ? `  border-coral-red `
                    : ` border-transparent `
                }rounded-xl  cursor-pointer max-sm:flex-1 border-2 `}
            >
              <div className="flex justify-center items-center bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 bg-[#c1c4de]">
                <Image
                  src={shoe.thumbnail}
                  alt={"ShoeCard"}
                  onClick={() => handleClick(index)}
                ></Image>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
