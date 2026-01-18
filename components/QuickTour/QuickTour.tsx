import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuickTour = () => {
  return (
    <section className="py-20">
      <div className="flex justify-around items-center ">
        <div className="flex flex-wrap justify-center gap-5">
          <Image
            src="/images/clients-one.png"
            width={342}
            height={342}
            alt="banner"
            className="rounded-lg"
          />
          <Image
            src="/images/clients-two.png"
            width={342}
            height={342}
            alt="banner"
            className="rounded-lg"
          />
          <Image
            src="/images/clients-three.png"
            width={342}
            height={342}
            alt="banner"
            className="rounded-lg"
          />
          <Image
            src="/images/clients-four.png"
            width={342}
            height={342}
            alt="banner"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-10 mx-auto">
          <h3 className="text-[45px] font-bold text-textPrimary leading-14">
            <span className="text-grayText">Quick list</span> of Our <br />{" "}
            <span className="text-thirdBg">Features</span>
          </h3>
          <p className="text-grayText">
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration in some form, by
            injected humour, or randomised words which do not look even
          </p>
          <Link
            href="#"
            className="text-white bg-thirdBg font-semibold text-[20px] rounded-lg px-4 py-4"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickTour;
