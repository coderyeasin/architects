import Image from "next/image";
import Link from "next/link";

const QuickTour = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 w-full lg:w-full">
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
        <div className="space-y-6 md:space-y-10 mx-auto w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl md:text-[45px] font-bold text-textPrimary leading-10 md:leading-14">
            <span className="text-grayText">Quick list</span> of Our
            <br className="hidden md:block" />
            <span className="text-thirdBg"> Features</span>
          </h3>
          <p className="text-grayText text-base md:text-[16px]">
            There are many variations of passages of Lorem Ipsum available,
            <span className="hidden md:inline">
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
            </span>
            <span className="inline md:hidden">
              {" "}
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
            </span>
          </p>
          <Link
            href="#"
            className="text-white bg-thirdBg font-semibold text-base md:text-[20px] rounded-lg px-4 py-2 md:px-4 md:py-4"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickTour;
