"use client";

import { useDisplay } from "@/app/context/DisplayContext";
import GroupCard from "./GroupCard";
import UserIcon from "./UserIcon";
import { getPriorityIcon, getStatusIcon } from "@/lib/utils/contants";

import { FaPlus } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const Group = ({ groupInfo }) => {
  const { display, data } = useDisplay();
  const isUser = display.grouping === "user";
  const isStatus = display.grouping === "status";
  const isPriority = display.grouping === "priority";
  //! GROUP NAME AND VALUE
  const group = isUser ? groupInfo : groupInfo[display.grouping];
  //! FETCHED TICKETS
  const tickets = data.tickets;
  //! FILTERED TICKETS
  let filteredTickets = [];

  if (isUser) {
    filteredTickets = tickets?.filter((el) => el.userId === group.id);
  } else {
    filteredTickets = tickets?.filter(
      (el) => el[display.grouping] === group.value
    );
  }

  if (display.ordering === "title") {
    filteredTickets?.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filteredTickets?.sort((a, b) => b.priority - a.priority);
  }
  return (
    <div className="mb-10">
      <h1 className="flex justify-between items-center ">
        <div className="flex justify-start items-center  space-x-1.5">
          <div>{isUser && <UserIcon user={groupInfo} />}</div>
          <div>{isPriority && getPriorityIcon(groupInfo.priority.value)}</div>
          <div>{isStatus && getStatusIcon(groupInfo.status.name)}</div>
          <div className="font-semibold">{group.name}</div>
          <div>{filteredTickets.length}</div>
        </div>
        <div className="mr-4 flex space-x-4">
          <FaPlus />
          <HiOutlineDotsHorizontal />
        </div>
      </h1>
      <div className="mt-4 space-y-3">
        {filteredTickets?.map((ticket) => (
          <GroupCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Group;
