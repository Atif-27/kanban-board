import { useDisplay } from "@/app/context/DisplayContext";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Tag from "./Tag";
import UserIcon from "./UserIcon";

const GroupCard = ({ ticket }) => {
  const { display, data } = useDisplay();
  const user = data.users.find((el) => el.id === ticket.userId);

  return (
    <Card>
      <CardHeader className="p-4">
        <CardDescription className="flex justify-between items-center">
          <div> {ticket.id}</div>
          <div className=" scale-75">
            <UserIcon user={user} />
          </div>
        </CardDescription>
        <CardTitle className=" font-normal text-md">{ticket.title}</CardTitle>
        <CardTitle className=" font-normal text-md flex gap-2 flex-wrap">
          {display.grouping !== "priority" ? <div>📶</div> : ""}
          <Tag tags={ticket.tag} />
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default GroupCard;
