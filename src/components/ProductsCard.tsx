import { products } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Star from "./Star";
const ProductsCard = () => {
  return (
    <>
      {products.map((product) => (
        <Link
          key={product.name}
          className="flex flex-1 flex-col w-full max-sm:w-full max-sm:items-center"
          href={""}
        >
          <Image
            className={`w-[282px] h-[282px]`}
            src={product.imgURL}
            alt={"ShoeImage"}
          />
          <div className="mt-8 flex justify-start gap-2.5 ">
            <Star />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">
              (4.5)
            </p>
          </div>
          <h3 className="mt-2 text-[23px] leading-normal font-semibold font-palanquin">
            {product.name}
          </h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
            {product.price}
          </p>
        </Link>
      ))}
    </>
  );
};

export default ProductsCard;
