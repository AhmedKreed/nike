import { reviews } from "@/constants";
import Image from "next/image";
import Star from "../Star";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <div
            key={review.customerName}
            className="flex justify-center items-center flex-col"
          >
            <Image
              src={review.imgURL}
              alt={review.customerName}
              className="rounded-full object-cover w-[120px] h-[120px]"
            />
            <p className="mt-6 max-w-sm text-center info-text">
              {review.feedback}
            </p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
              <Star />
              <p className="font-montserrat text-xl leading-normal text-slate-gray">
                ({review.rating})
              </p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
              {review.customerName}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
