import { supabase } from "~/client";
import type { Creator } from "~/types";

export default function AddCreator () {
    /**
     * adding a creator to the creatorverse database
     * @param creator the creator being added to the database
     * @returns the creator upon successful addition
     */
    async function addSupaCreator(creator: Creator) {
        const { data, error } = await supabase
            .from("creators")
            .insert({
                name: creator.name,
                url: creator.url,
                description: creator.description,
                imageURL: creator.imageURL,
            })
            .select()
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }

    async function addCreator(formData: FormData) {
        const creator: Creator = {
            name: formData.get("creatorName") as string,
            url: formData.get("url") as string,
            description: formData.get("description") as string,
            imageURL: formData.get("imageURL") as string,
        };
 
        await addSupaCreator(creator);
    }


    return (
        <div>
        <h1>Add a Creator</h1>
        <form action={addCreator}>
            <label>Full Name</label>
            <input name="creatorName" placeholder="Full Name of Creator"/>

            <label>URL</label>
            <input name="url" type="url" placeholder="Creator's profile url"/>

            <label>Description</label>
            <input name="description" placeholder="Description of the creator"/>

            <label>Image URL (optional)</label>
            <input name="imageURL" type="url" placeholder="Creator's image url"/>

            <button type="submit">Add Creator!</button>
        </form>
        </div>
    )
}