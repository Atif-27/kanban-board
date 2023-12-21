import React from "react";
import { Badge } from "@/components/ui/badge";
const Tag = ({ tags }) => {
  return (
    <div>
      {tags.map((tag) => (
        <Badge key={tag} variant="outline">
          {" "}
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default Tag;
