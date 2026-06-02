import { Edit2, ExternalLink, Info } from "lucide-react";
import { NavLink } from "react-router";
import type { Creator } from "~/types";

export default function ContentCreator({
  creatorId,
  name,
  url,
  description,
  imageURL,
}: Creator) {
  return (
    // holding the border of the creator card
    <div>
      <div>
        <h1>{name}</h1>
        <div>
          <NavLink to={`/view/${creatorId}`}>
            {" "}
            <Info />{" "}
          </NavLink>
          <NavLink to={`/edit/${creatorId}`}>
            {" "}
            <Edit2 />{" "}
          </NavLink>
        </div>
      </div>
      <a href={url}>
        <ExternalLink />
      </a>
      <p>{description}</p>
    </div>
  );
}
