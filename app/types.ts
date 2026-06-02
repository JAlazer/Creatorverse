/**
 * A creator is someone who creates content and is identified with the following:
 * creatorId - number to identify the creator
 * name - name of the creator
 * url - the url link to the creator's profile of choice
 * description - a biography of the creator
 * imageURL - the url of the image the creator wants displayed
 */
export interface Creator {
  creatorId?: number;
  name: string;
  url: string;
  description: string;
  imageURL: string;
}
