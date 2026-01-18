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
        <h3 className="text-textPrimary font-bold text-[45px]">Some Facts</h3>
        <p className="text-grayText text-[16px]">
          There are many variations of passages of Lorem Ipsum available, but{" "}
          <br /> the majority have suffered alteration.
        </p>
      </div>
      <div className="py-20 flex justify-between items-center gap-12">
        {achieveBox.map((item, i) => (
          <div
            key={i}
            className="w-[241.83] h-[241.83] border-2 border-thirdBg rounded-lg flex flex-col justify-center items-center"
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
