"use-client";

import { useDisplay } from "@/app/context/DisplayContext";
import GroupCard from "./GroupCard";

const Group = ({ groupInfo }) => {
  const { display, data } = useDisplay();
  const isUser = display.grouping === "user";
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
    <div className="">
      <h1>{group.name}</h1>
      <div className="mt-4 space-y-3">
        {filteredTickets?.map((ticket) => (
          <GroupCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Group;
