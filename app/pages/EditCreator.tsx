import { useEffect, useState } from "react";
import type { Route } from "./+types/EditCreator";
import { getSupaCreator } from "~/utils";
import type { Creator } from "~/types";
import { supabase } from "~/client";
import { useNavigate } from "react-router";

export default function EditCreator({ params }: Route.LoaderArgs) {
  const creatorId = params.creatorId;
  const navigate = useNavigate();

  const [creator, setCreator] = useState<Creator>();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (creatorId) {
      getSupaCreator(+creatorId)
        .then(setCreator)
        .catch((err: Error) => console.error(err.message));
    }
  }, [creatorId]);

  /**
   * making the update from the editing form to supabase
   * @param formData data from the editing form
   */
  async function editCreator(formData: FormData) {
    const name = formData.get("name") as string;
    const url = formData.get("url") as string;
    const description = formData.get("description") as string;
    const imageURL = formData.get("imageURL") as string;

    const { error } = await supabase
      .from("creators")
      .update({ name, url, description, imageURL })
      .eq("id", creatorId);

    if (error) {
      setErrorMsg(
        error.code === "23505"
          ? "That URL is already taken by another creator."
          : error.message,
      );
      return;
    }

    navigate("/");
  }

  /**
   * deleting the creator of this page from the supabase
   * navigates user to home page after successful deleting
   */
  async function deleteCreator() {
    const { error } = await supabase
      .from("creators")
      .delete()
      .eq("id", creatorId);

    if (error) {
      console.error(error.message);
    } else {
      navigate("/");
    }
  }

  return (
    <>
      {errorMsg && <p>{errorMsg}</p>}
      <h1>Edit Creator</h1>

      <form action={editCreator}>
        <label>Name</label>
        <input name="name" defaultValue={creator?.name ?? ""} />

        <label>Profile URL</label>
        <input name="url" defaultValue={creator?.url ?? ""} />

        <label>Creator Description</label>
        <input name="description" defaultValue={creator?.description ?? ""} />

        <label>Creator ImageURL (optional)</label>
        <input name="imageURL" defaultValue={creator?.imageURL ?? ""} />

        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={deleteCreator}>
            Delete
          </button>
        </div>
      </form>
    </>
  );
}
