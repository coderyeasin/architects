import Image from "next/image";

const Features = () => {
  return (
    <section className="py-16">
      <div className="flex justify-between items-center gap-10">
        <div className="">
          <div className="space-y-5 mb-10">
            <h1 className="font-bold text-textPrimary text-[45px] leading-14 border-l-4 px-6 border-thirdBg">
              Features you will <br /> love & enjoy
            </h1>
            <p className="text-[16px] leading-6.5 text-grayText">
              There are many variations of passages of Lorem Ipsum available,
              but the <br /> majority have suffered alteration in some form, by
              injected humour, or <br /> randomised words which do not look even
            </p>
          </div>
          <div className="px-6 space-y-10 ">
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
        <div className="relative">
          <Image
            src="/images/enjoy.png"
            width={650}
            height={600}
            alt="enjoy"
            className="rounded-lg"
          />
          <div className="w-85.5 h-50 bg-thirdBg rounded-lg text-white flex flex-col justify-center items-center absolute -bottom-20 -left-42">
            <span className="font-bold text-[65px] leading-4">10+Year</span>{" "}
            <br />
            <span className="font-medium text-[25px] leading-10">
              Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
