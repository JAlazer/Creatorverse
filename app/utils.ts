import { supabase } from "./client";
import type { Creator } from "./types";

/**
 * Gets the data from the creator's table in supabase and sets creators array to be as such.
 */
export async function setSupaData(setCreators: (creators: Creator[]) => void) {
  const { data, error } = await supabase.from("creators").select("*");

  if (error) {
    console.error("Could not get creators!", error);
    return;
  }

  // pulling out the information from the data of supabase to create creators
  const creatorsBase: Creator[] = data.map((item) => ({
    creatorId: item.id,
    name: item.name,
    url: item.url,
    description: item.description,
    imageURL: item.imageURL,
  }));

  setCreators(creatorsBase);
}

/**
 * Getting a specific creator by their id
 * @param creatorId the id of the creator to be returned
 */
export async function getSupaCreator(creatorId: number): Promise<Creator> {
  const { data, error } = await supabase.from("creators").select("*");

  if (error) {
    console.error("Could not get creators", error.message);
    throw new Error(error.message);
  }

  const foundID = data.find((item) => item.id === creatorId);

  if (!foundID) {
    throw new Error(`Creator with id ${creatorId} not found!`);
  }

  const creator: Creator = {
    creatorId: foundID.id,
    name: foundID.name,
    url: foundID.url,
    description: foundID.description,
    imageURL: foundID.imageURL,
  };

  return creator;
}
