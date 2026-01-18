import Image from "next/image";

const Sponsors = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="leading-6.5 space-y-4 md:space-y-7 text-center">
        <h3 className="text-textPrimary font-bold text-2xl md:text-[45px]">
          Our Sponsors
        </h3>
        <p className="text-base md:text-[16px] text-grayText">
          There are many variations of passages of Lorem Ipsum available, but
          <span className="hidden md:inline">
            {" "}
            <br /> the majority have suffered alteration.
          </span>
          <span className="inline md:hidden">
            {" "}
            the majority have suffered alteration.
          </span>
        </p>
      </div>
      <div className="py-10 md:py-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 items-center justify-items-center">
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
