import Image from "next/image";
import React from "react";

const Sponsors = () => {
  return (
    <section className="py-20">
      <div className="leading-6.5 space-y-7 text-center">
        <h3 className="text-textPrimary font-bold text-[45px]">Our Sponsors</h3>
        <p className="text-[16px] text-[#727272]">
          There are many variations of passages of Lorem Ipsum available, but{" "}
          <br /> the majority have suffered alteration.
        </p>
      </div>
      <div className="py-20 flex justify-between items-center">
        <Image
          src="/spotify-Logo.png"
          width={166.76}
          height={50}
          alt="spotify"
          className="rounded-lg grayscale"
        />
        <Image
          src="/Amazon-Logo.png"
          width={166.76}
          height={50}
          alt="spotify"
          className="rounded-lg grayscale"
        />
        <Image
          src="/google-Logo.png"
          width={166.76}
          height={50}
          alt="spotify"
          className="rounded-lg grayscale"
        />
        <Image
          src="/Telerama-Logo.png"
          width={166.76}
          height={50}
          alt="spotify"
          className="rounded-lg grayscale"
        />
        <Image
          src="/figma-Logo.png"
          width={166.76}
          height={50}
          alt="spotify"
          className="rounded-lg grayscale"
        />
      </div>
    </section>
  );
};

export default Sponsors;
