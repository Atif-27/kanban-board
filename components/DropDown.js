"use client";
import { AiOutlineControl } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { useDisplay } from "@/app/context/DisplayContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { grouping, ordering } from "@/lib/utils/contants";
const DropDown = () => {
  const { display, handleGrouping, handleOrdering } = useDisplay();

  return (
    <DropdownMenu className="drop-shadow-md ">
      <DropdownMenuTrigger className="border border-stone-200/35 rounded-lg px-4 py-1 drop-shadow-md flex  items-center justify-center space-x-2">
        <AiOutlineControl />
        <span>Display</span>
        <MdOutlineKeyboardArrowDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-10 ">
        <DropdownMenuItem className="flex dark:bg-[#161B22] ">
          Grouping
          <Select
            name="grouping"
            value={display.grouping}
            onValueChange={handleGrouping}
          >
            <SelectTrigger className="w-28 ml-10 ">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {grouping.map((el, index) => (
                <SelectItem key={index} value={el.value}>
                  {el.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </DropdownMenuItem>
        <DropdownMenuItem className="dark:bg-[#161B22]">
          Ordering
          <Select
            name="ordering"
            value={display.ordering}
            onValueChange={handleOrdering}
          >
            <SelectTrigger className="w-28 ml-10 ">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {ordering.map((el, index) => (
                <SelectItem key={index} value={el.value}>
                  {el.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
