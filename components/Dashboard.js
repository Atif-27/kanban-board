"use client";

import { ticketGroups } from "@/lib/utils/contants";
import Group from "./Group";
import { useDisplay } from "@/app/context/DisplayContext";

const Dashboard = () => {
  const { display, data } = useDisplay(); // ! Consuming context
  // ! GROUP COLUMNS
  return (
    <div className=" min-h-screen h-full bgDarkFontLight">
      <section className=" px-3 md:px-10  py-8 grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1   justify-start  gap-4 max-lg:gap-3 text-sm ">
        {data && display.grouping !== "user"
          ? ticketGroups.map((el, index) => (
              <Group key={index} groupInfo={el} /> //! Passing group info from our array
            ))
          : data?.users?.map((el, index) => (
              <Group key={index} groupInfo={el} /> // ! Passing user info as group info from our fetched data
            ))}
      </section>
    </div>
  );
};

export default Dashboard;
