"use client";

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
const DropDown = () => {
  const { display, handleGrouping, handleOrdering } = useDisplay();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Display</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="flex">
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
              <SelectItem value="status">Status</SelectItem>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="priority">Priority</SelectItem>
            </SelectContent>
          </Select>
        </DropdownMenuItem>
        <DropdownMenuItem>
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
              <SelectItem value="priority">Priority</SelectItem>
              <SelectItem value="title">Title</SelectItem>
            </SelectContent>
          </Select>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
