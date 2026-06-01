import { useEffect, useState } from "react";
import type { Route } from "../+types/root";
import type { Creator } from "~/types";
import { setSupaData } from "~/utils";
import { Link } from "lucide-react";
import { NavLink } from "react-router";

export default function ViewCreator({params}: Route.LoaderArgs) {

    const creatorId = params.creatorId;
    
    const [creators, setCreators] = useState<Creator[]>([]);

    let creator: Creator;
    
    // getting the creator data from supabase and setting to be the creators
    useEffect(() => {
        setSupaData(setCreators);
    }, [])



    if (!creatorId) {
        return(
            <h1>No creator ID found!</h1>
        )
    } else {
        console.log(typeof +creatorId);

        const creatorCheck = creators.find((creator) => creator.creatorId === +creatorId);

        if (creatorCheck) {
            creator = creatorCheck

            return (
            <div>
                <div>
                    <img src={creator.imageURL} alt={`Profile image of ${creator.name}`}/>
                    <div>
                        <h1>{creator.name}</h1>
                        <p>{creator.description}</p>
                        <a href={creator.url}><Link /></a>
                    </div>
                <div>
                    <NavLink to={`/edit/${creatorId}`}>
                        <button onClick={() => {console.log(`Editing ${creator.name}`)}}>Edit</button>
                    </NavLink>
                    <button onClick={() => {console.log(`Deleting ${creator.name}`)}}>
                        Delete
                    </button>
                </div>
                </div>                
            </div>
            )
        } else {
            return(
                <h1>Could not find creator!</h1>
            )
        }

       
    }

    
}