import type { Route } from "../+types/root";

export default function ViewCreator({params}: Route.LoaderArgs) {
    return(
        <h1>View Creator</h1>
    )
}