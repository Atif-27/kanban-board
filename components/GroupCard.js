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
    <Card className="dark:bg-gray-900  border-2 border-gray-400">
      <CardHeader className="p-4">
        <CardDescription className="flex justify-between items-center">
          <span> {ticket.id}</span>
          <span className=" scale-75">
            <UserIcon user={user} />
          </span>
        </CardDescription>
        <CardTitle className=" font-normal text-md flex ">
          {display.grouping !== "status" && (
            <span className="pt-1 pr-2">{getStatusIcon(ticket.status)}</span>
          )}
          <span className=" font-semibold">{ticket.title}</span>
        </CardTitle>
        <CardTitle className=" font-normal text-md flex gap-2 flex-wrap items-center pt-2">
          <Badge
            variant="outline"
            className="text-lg rounded-md dark:border-gray-500"
          >
            {display.grouping !== "priority"
              ? getPriorityIcon(ticket.priority)
              : ""}
          </Badge>
          <Tag tags={ticket.tag} />
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default GroupCard;
