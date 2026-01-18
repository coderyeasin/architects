import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pb-10">
      <div className="text-center space-y-10 mb-10">
        <h1 className="font-work font-bold text-[64px] text-textPrimary leading-18">
          Brand New <br />
          Group of Architects{" "}
        </h1>
        <p className="text-[16px] leading-6.5 text-[#727272]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in <br /> some form, by injected
          humour, or randomised words which do not look even
        </p>
        <Link
          href="#"
          className="text-white bg-thirdBg font-semibold text-[20px] rounded-lg px-4 py-3"
        >
          Explore More
        </Link>
      </div>
      <Image
        src="/images/banner.png"
        width={1440}
        height={700}
        alt="banner"
        className="rounded-lg bg-cover"
      />
    </section>
  );
};

export default HeroSection;
