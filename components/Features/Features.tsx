import Image from "next/image";

const Features = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="w-full lg:w-1/2">
          <div className="space-y-4 md:space-y-5 mb-6 md:mb-10">
            <h1 className="font-bold text-textPrimary text-2xl md:text-[45px] leading-10 md:leading-14 border-l-4 px-4 md:px-6 border-thirdBg">
              Features you will <br className="hidden md:block" /> love & enjoy
            </h1>
            <p className="text-base md:text-[16px] leading-6 md:leading-6.5 text-grayText">
              There are many variations of passages of Lorem Ipsum available,
              but the{" "}
              <span className="hidden md:inline">
                <br /> majority have suffered alteration in some form, by
                injected humour, or <br /> randomised words which do not look
                even
              </span>
              <span className="inline md:hidden">
                majority have suffered alteration in some form, by injected
                humour, or randomised words which do not look even
              </span>
            </p>
          </div>
          <div className="px-2 md:px-6 space-y-6 md:space-y-10 ">
            <div>
              <h3 className="font-semibold text-[20px] text-textPrimary">
                Desktop & Mobile Version
              </h3>
              <p className="text-[16px] text-grayText leading-6.5">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration in some form, by
                <br />
                injected humour, or randomised...........
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[20px] text-textPrimary">
                Drag & Drop Builder
              </h3>
              <p className="text-[16px] text-grayText leading-6.5">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration in some form, by
                <br />
                injected humour, or randomised...........
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[20px] text-textPrimary">
                Awesome Modern Design
              </h3>
              <p className="text-[16px] text-grayText leading-6.5">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration in some form, by
                <br />
                injected humour, or randomised...........
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[20px] text-textPrimary">
                Super Easy to Edit
              </h3>
              <p className="text-[16px] text-grayText leading-6.5">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration in some form, by
                <br />
                injected humour, or randomised...........
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <Image
            src="/images/enjoy.png"
            width={650}
            height={600}
            alt="enjoy"
            className="rounded-lg w-full max-w-100 md:max-w-162.5 h-auto"
          />
          <div className="w-50 h-25 md:w-85.5 md:h-50 bg-thirdBg rounded-lg text-white flex flex-col justify-center items-center absolute -bottom-10 md:-bottom-20 left-1/2 -translate-x-1/2 md:left-42 lg:-left-42 md:translate-x-0">
            <span className="font-bold text-2xl md:text-[65px] leading-4">
              10+Year
            </span>
            <span className="font-medium text-base md:text-[25px] leading-10 lg:pt-5 md:pt-5">
              Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
