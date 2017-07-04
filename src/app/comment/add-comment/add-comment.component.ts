import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Http, Response} from '@angular/http';
import {CommentService} from '../services/comment.service';

import {Comment} from '../model/comment-model';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  public comments: Array<Comment>;

  constructor(public commentService: CommentService,
              public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getCommentList(params['postId'])
    );
  }

  public getCommentList(postId: number) {
    this.commentService.getCommentList(postId)
      .subscribe(
        data => {
          this.comments = data['items'];
          console.log(data);
        },
        error => console.log(error)
      );
  }

}
