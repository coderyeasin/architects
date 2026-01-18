import { AchieveType } from "@/types/types";
import Image from "next/image";

const achieveBox: AchieveType[] = [
  { icon: "/icons/medal.png", countNumber: 54, title: "Awards Winnings" },
  {
    icon: "/icons/finished.png",
    countNumber: 1458,
    title: "Project Finished",
  },
  { icon: "/icons/progress.png", countNumber: 590, title: "Clients Worked" },
  { icon: "/icons/email.png", countNumber: 22578, title: "Email Send" },
];

const Achievements = () => {
  return (
    <section className="pt-40 pb-20">
      <div className="leading-6.5 space-y-10">
        <h3 className="text-textPrimary font-bold text-2xl md:text-[45px]">
          Some Facts
        </h3>
        <p className="text-grayText text-base md:text-[16px]">
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
      <div className="py-10 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        {achieveBox.map((item, i) => (
          <div
            key={i}
            className="w-full h-[180px] md:w-[241.83px] md:h-[241.83px] border-2 border-thirdBg rounded-lg flex flex-col justify-center items-center mx-auto"
          >
            <Image
              src={item.icon}
              width={45.22}
              height={45.22}
              alt={item.title}
              className="rounded-lg"
            />
            <h3 className="font-semibold text-[45px] text-[#424242]">
              {item.countNumber}
            </h3>
            <p className="font-semibold text-[20px] text-grayText">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
