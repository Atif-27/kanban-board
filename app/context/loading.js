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
    <section className="px-10 py-8 bg-stone-100 w-full h-screen">
      <div className="w-full h-full grid grid-cols-5 justify-center gap-4 ">
        {group.map((el, index) => (
          <div key={index} className="">
            <h1>
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </h1>
            <div className="mt-4 space-y-3">
              {group.map((ticket, index) => (
                <Card key={index}>
                  <CardHeader className="p-4">
                    <CardDescription className="flex justify-between items-center">
                      <div>
                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                      </div>
                      <div className=" scale-75">
                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                      </div>
                    </CardDescription>
                    <CardTitle className=" font-normal text-md">
                      <Skeleton className="w-[100px] h-[20px] rounded-full" />
                    </CardTitle>
                    <CardTitle className=" font-normal text-md flex gap-2 flex-wrap">
                      <Skeleton className="w-[100px] h-[20px] rounded-full" />
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default loading;
