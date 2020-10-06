import Tag from "./tag";

export class Record {
    id: number;
    title: string;
    body: string;
    tags: Array<Tag>;

    constructor(id: number, title: string, body: string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.tags = [];
    }

    public addTag(tag: Tag) {
        this.tags = [...this.tags, tag];
    }

    public removeTag(tag: Tag) {
        this.tags =this.tags.filter(existingTag => existingTag !== tag);
    }
}

export default Record;