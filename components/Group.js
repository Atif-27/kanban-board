"use-client";

import { useDisplay } from "@/app/context/DisplayContext";
import GroupCard from "./GroupCard";
import UserIcon from "./UserIcon";

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
    <div className="mb-10">
      <h1 className="flex justify-between items-center ">
        <div className="flex items-center space-x-2">
          <p>{isUser && <UserIcon user={groupInfo} />}</p> <p>{group.name}</p>
        </div>
        <div className="mr-4">➕ ...</div>
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
