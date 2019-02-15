/** Represents a Post  */
export class Post {

    constructor(title: string, body: string){
        this.title = title;
        this.body = body;
    }

    userId: number;
    id: number;
    title: string;
    body: string;
}