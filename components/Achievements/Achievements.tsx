import Image from "next/image";
import React from "react";

const Achievements = () => {
  return (
    <section className="py-40">
      <div className="leading-6.5 space-y-10">
        <h3 className="text-textPrimary font-bold text-[45px]">Some Facts</h3>
        <p className="text-[#727272] text-[16px]">
          There are many variations of passages of Lorem Ipsum available, but{" "}
          <br /> the majority have suffered alteration.
        </p>
      </div>
      <div className="py-20 flex justify-between items-center gap-12">
        <div className="w-[241.83] h-[241.83] border-2 border-thirdBg rounded-lg flex flex-col justify-center items-center">
          <Image
            src="/icons/medal.png"
            width={45.22}
            height={45.22}
            alt="medal"
            className="rounded-lg"
          />
          <h3 className="font-semibold text-[45px] text-[#424242]">54</h3>
          <p className="font-semibold text-[20px] text-[#727272]">
            Awards Winnings
          </p>
        </div>
        <div className="w-[241.83] h-[241.83] border-2 border-thirdBg rounded-lg flex flex-col justify-center items-center">
          <Image
            src="/icons/finished.png"
            width={45.22}
            height={45.22}
            alt="finished"
            className="rounded-lg"
          />
          <h3 className="font-semibold text-[45px] text-[#424242]">1458</h3>
          <p className="font-semibold text-[20px] text-[#727272]">
            Project Finished{" "}
          </p>
        </div>
        <div className="w-[241.83] h-[241.83] border-2 border-thirdBg rounded-lg flex flex-col justify-center items-center">
          <Image
            src="/icons/progress.png"
            width={45.22}
            height={45.22}
            alt="progress"
            className="rounded-lg"
          />
          <h3 className="font-semibold text-[45px] text-[#424242]">590</h3>
          <p className="font-semibold text-[20px] text-[#727272]">
            Clients Worked
          </p>
        </div>
        <div className="w-[241.83] h-[241.83] border-2 border-thirdBg rounded-lg flex flex-col justify-center items-center">
          <Image
            src="/icons/email.png"
            width={45.22}
            height={45.22}
            alt="email"
            className="rounded-lg"
          />
          <h3 className="font-semibold text-[45px] text-[#424242]">22578</h3>
          <p className="font-semibold text-[20px] text-[#727272]">Email Send</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
