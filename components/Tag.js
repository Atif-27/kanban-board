import React from "react";
import { FaCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
const Tag = ({ tags }) => {
  return (
    <div>
      {tags.map((tag) => (
        <Badge key={tag} variant="outline" className="rounded-md">
          <FaCircle className="mr-1.5" />
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default Tag;
