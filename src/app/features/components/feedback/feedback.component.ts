import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FeedComment} from "./feedback.models/feedback-comment.model";
import {FeedStoreService} from "./feedback.services/feed-store.service";
import {faXmark} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})

export class FeedbackComponent {
  cross = faXmark;
  feedBackForm: FormGroup;
  idVal: number;
  nameInpVal: string;
  commInpVal: string;
  comments: FeedComment[] = [];

  constructor(private feedStoreService: FeedStoreService) {
  }

  ngOnInit() {
    this.feedStoreService.fetchFeedComments();

    this.feedBackForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'comment': new FormControl('', Validators.required)
    })

    this.feedStoreService.commentsSub$.subscribe(
      (comments) => {
        this.comments = comments;
      }
    );
  }

  onFeedSubmit() {
    this.idVal = this.feedStoreService.generateId();

    this.nameInpVal = this.feedBackForm.controls['name'].value;
    this.commInpVal = this.feedBackForm.controls['comment'].value;

    let comment: FeedComment = new FeedComment(this.idVal, this.nameInpVal, this.commInpVal);

    JSON.parse(JSON.stringify(this.comments)).push(comment);
    this.feedStoreService.sendFeedComments(comment);
    this.feedBackForm.reset();
  }

  clearFormInput(inputId:number) {
    if (inputId === 1) {
      this.feedBackForm.controls['name'].reset();
    } else if (inputId === 2) {
      this.feedBackForm.controls['comment'].reset();
    }
  }
}
