"use client";

import { ticketGroups } from "@/lib/utils/contants";
import Group from "./Group";
import { useDisplay, data } from "@/app/context/DisplayContext";

const Dashboard = () => {
  const { display, data } = useDisplay();
  return (
    <section className=" px-6 md:px-10  py-8  w-full h-screen  bgDarkFontLight">
      <div className="w-full h-full grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1  justify-start gap-4 ">
        {data.tickets && display.grouping !== "user"
          ? ticketGroups.map((el, index) => (
              <Group key={index} groupInfo={el} />
            ))
          : data?.users?.map((el, index) => (
              <Group key={index} groupInfo={el} />
            ))}
      </div>
    </section>
  );
};

export default Dashboard;
