import { LuCircleDashed } from "react-icons/lu";
import { LuCircle } from "react-icons/lu";
import { MdIncompleteCircle } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi2";
import { MdCancel } from "react-icons/md";
import { MdOutlineSignalCellularAlt2Bar } from "react-icons/md";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { LuSignalHigh } from "react-icons/lu";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

export const grouping = [
  { name: "Status", value: "status" },
  { name: "User", value: "user" },
  { name: "Priority", value: "priority" },
];
export const ordering = [
  { name: "Priority", value: "priority" },
  { name: "Title", value: "title" },
];
export const ticketGroups = [
  {
    status: { value: "Backlog", name: "Backlog" },
    priority: { value: 0, name: "No Priority" },
  },
  {
    status: { value: "Todo", name: "Todo" },
    priority: { value: 1, name: "Low" },
  },
  {
    status: { value: "In progress", name: "In progress" },
    priority: { value: 2, name: "Medium" },
  },
  {
    status: { value: "Done", name: "Done" },
    priority: { value: 3, name: "High" },
  },
  {
    status: { value: "Cancelled", name: "Cancelled" },
    priority: { value: 4, name: "Urgent" },
  },
];
export const getStatusIcon = (statusValue) => {
  switch (statusValue) {
    case "Backlog":
      return <LuCircleDashed />;
    case "Todo":
      return <LuCircle />;
    case "In progress":
      return <MdIncompleteCircle color="#FFD700" />;
    case "Done":
      return <HiCheckCircle color="#4169E1" />;
    case "Cancelled":
      return <MdCancel color="red" />;
    default:
      return null;
  }
};
export const getPriorityIcon = (priorityValue) => {
  switch (priorityValue) {
    case 0:
      return <BsThreeDots />;
    case 1:
      return <MdOutlineSignalCellularAlt2Bar />;
    case 2:
      return <MdOutlineSignalCellularAlt />;
    case 3:
      return <LuSignalHigh />;
    case 4:
      return <BsFillExclamationSquareFill color="orange" />;
    default:
      return null;
  }
};
