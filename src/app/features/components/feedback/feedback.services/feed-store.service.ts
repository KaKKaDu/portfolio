import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FeedComment} from "../feedback.models/feedback-comment.model";
import {Subject} from "rxjs";

@Injectable()

export class FeedStoreService {
  commentsSub$= new Subject<FeedComment[]>();

  constructor(private http: HttpClient) {

  }

  idArray: number[] = [];
  commentsService: FeedComment[] = [];

  generateId() {
    let randomId: number;
    do {
      randomId = Math.floor(Math.random()*10000000);
    } while(this.idArray.find((id) => id === randomId))
    this.idArray.push(randomId);
    return randomId;
  }

  sendFeedComments(comment: FeedComment) {
    this.commentsService.push(comment);
    this.putIdArray().subscribe(
      {
        next: value=> console.log(value),
        error: err => console.error('Error: ' + err)
      }
    )
    this.putFeedComments().subscribe(
      {
        next: value=> console.log(value),
        error: err => console.error('Error: ' + err)
      }
    )
  }

  putIdArray() {
    return this.http
      .put(
        "https://portfolio-63b4d-default-rtdb.europe-west1.firebasedatabase.app/feedback/id-list.json",
        this.idArray);
  }

  putFeedComments() {
    return this.http
      .put(
        "https://portfolio-63b4d-default-rtdb.europe-west1.firebasedatabase.app/feedback/comments.json",
        this.commentsService);
  }

  fetchFeedComments() {
    this.getIdArray().subscribe(
      {
        next: (response)=> {
          this.idArray = response;
        },
        error: err => console.error('Error: ' + err)
      }
    );
    this.getFeedComments().subscribe(
      {
        next: (response)=> {
          this.commentsService = response;
          this.commentsSub$.next(response);
        },
        error: err => console.error('Error: ' + err)
      }
    )

  }

  getIdArray() {
    return this.http
      .get<number[]>("https://portfolio-63b4d-default-rtdb.europe-west1.firebasedatabase.app/feedback/id-list.json")
  }

  getFeedComments() {
    return this.http
      .get<FeedComment[]>("https://portfolio-63b4d-default-rtdb.europe-west1.firebasedatabase.app/feedback/comments.json")
  }
}
