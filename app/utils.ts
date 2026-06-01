import { supabase } from "./client";
import type { Creator } from "./types";

/**
   * Gets the data from the creator's table in supabase and sets creators array to be as such.
   */
  export async function setSupaData(setCreators: (creators: Creator[]) => void) {
    const {data, error} = await supabase.from("creator").select('*');
    
    if (error) {
      console.error("Could not get creators!", error);
      return 
    }

    // pulling out the information from the data of supabase to create creators
    const creatorsBase: Creator[] = data.map((item) => ({
        creatorId: item.id,
        name: item.name,
        url: item.url,
        description: item.description,
        imageURL: item.imageURL
    }))

    setCreators(creatorsBase);
  }