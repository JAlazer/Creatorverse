import { useEffect, useState } from "react";
import type { Route } from "./+types/ViewCreator";
import type { Creator } from "~/types";
import { getSupaCreator } from "~/utils";
import { Link } from "lucide-react";
import { NavLink } from "react-router";

export default function ViewCreator({ params }: Route.LoaderArgs) {
  const creatorId = params.creatorId;

  const [creator, setCreator] = useState<Creator>();

  // getting the creator data from supabase by id
  useEffect(() => {
    if (creatorId) {
      const result = getSupaCreator(+creatorId);

      result
        .then((promiseCreator) => {
          if (promiseCreator) {
            setCreator(promiseCreator);
          }
        })
        .catch((error: Error) => console.error(error.message));
    }
  }, [creatorId]);

  if (!creatorId) {
    return <h1>No creator ID found!</h1>;
  } else {
    console.log(typeof +creatorId);

    if (creator) {
      return (
        <div>
          <div>
            <img
              src={creator.imageURL}
              alt={`Profile image of ${creator.name}`}
            />
            <div>
              <h1>{creator.name}</h1>
              <p>{creator.description}</p>
              <a href={creator.url}>
                <Link />
              </a>
            </div>
            <div>
              <NavLink to={`/edit/${creatorId}`}>
                <button
                  onClick={() => {
                    console.log(`Editing ${creator.name}`);
                  }}
                >
                  Edit
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading Creator, or could not find creator!!</h1>;
    }
  }
}
