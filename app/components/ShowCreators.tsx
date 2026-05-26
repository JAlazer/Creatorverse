import ContentCreator from "~/components/ContentCreator";
import type { Creator } from "~/types";

/**
 * Displaying all content creator cards
 */
export default function ShowCreators({creators}: {creators: Creator[]}) {
    return (
        <div>
            {creators.map(creator => (
                <ContentCreator creatorId={creator.creatorId} name={creator.name} url={creator.url} description={creator.description} imageURL={creator.imageURL}/>
            )
            )}
        </div>
    )
}