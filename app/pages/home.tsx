import { supabase } from "~/client";
import type { Route } from "../+types/root";
import { Welcome } from "../welcome/welcome";
import type { Creator } from "~/types";
import { useEffect, useState } from "react";
import TitleCard from "~/components/TitleCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "CreatorVerse" },
    { name: "Creatorverse", content: "Welcome to the platform for all content creators!" },
  ];
}

export default function Home() {

  const [creators, setCreators] = useState<Creator[]>([]);

  /**
   * Gets the data from the creator's table in supabase and sets creators array to be as such.
   */
  const getSupaData = async () => {
    const {data, error} = await supabase.from("creator").select('*');
    
    if (error) {
      console.error("Could not get creators!", error);
      return 
    }

    setCreators(data);
  }

  useEffect(() => {
    getSupaData();
  }, [])

  return (
    <div>
      <TitleCard />
      <br />
      
    </div>
  );
}
