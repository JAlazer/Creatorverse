import type { Route } from "../+types/root";
import type { Creator } from "~/types";
import { useEffect, useState } from "react";
import TitleCard from "~/components/TitleCard";
import ShowCreators from "../components/ShowCreators";
import { setSupaData } from "~/utils";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "CreatorVerse" },
    { name: "Creatorverse", content: "Welcome to the platform for all content creators!" },
  ];
}

export default function Home() {

  const [creators, setCreators] = useState<Creator[]>([]);

  // sync up the data from supabase to showing the creators
  useEffect(() => {
    setSupaData(setCreators);
  }, [])

  return (
    <div>
      <TitleCard />
      <br />
      {creators ? 
      <ShowCreators creators={creators}/>
      :
      <h1>No creators here yet!</h1>
      }
    </div>
  );
}
