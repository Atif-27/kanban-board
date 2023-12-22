import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tag, UserIcon } from "lucide-react";
const Loading = () => {
  const group = Array(5);
  return (
    <section className="px-10 py-8 w-full h-screen">
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </section>
  );
};

export default Loading;
