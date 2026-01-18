import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pb-6 md:pb-10">
      <div className="text-center space-y-6 md:space-y-10 mb-6 md:mb-10">
        <h1 className="font-work font-bold text-3xl md:text-[64px] text-textPrimary leading-10 md:leading-18">
          Brand New <br className="hidden md:block" />
          Group of Architects
        </h1>
        <p className="text-base md:text-[16px] leading-6 md:leading-6.5 text-grayText">
          There are many variations of passages of Lorem Ipsum available, but
          <span className="hidden md:inline">
            {" "}
            the majority have suffered alteration in <br /> some form, by
            injected humour, or randomised words which do not look even
          </span>
          <span className="inline md:hidden">
            {" "}
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even
          </span>
        </p>
        <Link
          href="#"
          className="text-white bg-thirdBg font-semibold text-base md:text-[20px] rounded-lg px-4 py-2 md:px-4 md:py-4"
        >
          Explore More
        </Link>
      </div>
      <Image
        src="/images/banner.png"
        width={1440}
        height={700}
        alt="banner"
        className="rounded-lg bg-cover w-full h-auto max-h-[300px] md:max-h-[700px] object-cover"
      />
    </section>
  );
};

export default HeroSection;
