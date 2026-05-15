
/**
 * A content creator is someone that creates content with the following information:
 * name - name of the content creator
 * url - the url link to the creator's profile of choice
 * description - a biography of the content creator
 * imageURL - the url of the image the content creator wants displayed
 */
interface ContentCreatorProps {
    name: string;
    url: string;
    description: string;
    imageURL: string;
}

export default function ContentCreator({name, url, description, imageURL}: ContentCreatorProps) {
   return (
    <h1>Hello world!</h1>
   ) 
}