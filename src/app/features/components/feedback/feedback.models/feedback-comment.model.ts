
export class FeedComment {
  id: number;
  username: string;
  content: string;

  constructor(id: number, username: string, content: string) {
    this.id = id;
    this.username = username;
    this.content = content;
  }
}


