"use client";

import { ticketGroups } from "@/lib/utils/contants";
import Group from "./Group";
import { useDisplay } from "@/app/context/DisplayContext";

const Dashboard = () => {
  const { display, data } = useDisplay();
  return (
    <section className="px-10 py-8 bg-stone-100 w-full h-screen">
      <div className="w-full h-full grid grid-cols-5 justify-center gap-4 "></div>
    </section>
  );
};

export default Dashboard;
