import { useDisplay } from "@/app/context/DisplayContext";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Tag from "./Tag";
import UserIcon from "./UserIcon";
import { getPriorityIcon, getStatusIcon } from "@/lib/utils/contants";
import { Badge } from "./ui/badge";

const GroupCard = ({ ticket }) => {
  const { display, data } = useDisplay();
  const user = data.users.find((el) => el.id === ticket.userId);

  return (
    <Card className="dark:bg-gray-900  border-2 dark:border-gray-600 max-sm:text-sm max-md:text-md">
      <CardHeader className="p-4">
        <CardDescription className="text-sm flex justify-between items-start ">
          {ticket.id}
          <>
            <UserIcon user={user} />
          </>
        </CardDescription>
        <CardTitle className=" font-thin md:text-md text-sm flex justify-start ">
          {display.grouping !== "status" && (
            <div className=" pr-2">{getStatusIcon(ticket.status)}</div>
          )}
          <div className=" font-semibold leading-none">{ticket.title}</div>
        </CardTitle>
        <CardTitle className=" font-normal text-md flex gap-2 flex-wrap items-center pt-2">
          {display.grouping !== "priority" && (
            <Badge
              variant="outline"
              className="text-lg rounded-md dark:border-gray-500"
            >
              {getPriorityIcon(ticket.priority)}
            </Badge>
          )}
          <Tag tags={ticket.tag} />
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default GroupCard;
