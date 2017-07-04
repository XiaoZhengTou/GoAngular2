/**
 * Created by Administrator on 2017/6/13 0013.
 */
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {PaginationModule} from 'ng2-bootstrap';

import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostDetailService} from './post-detail/services/post-detail.service';
import {PostDetailMainComponent} from './post-detail-main/post-detail-main.component';
import {PostListService} from './postlist/service/postlist.service';
import {PostListComponent} from './postlist/postlist.component';


import {AddCommentComponent} from '../comment/add-comment/add-comment.component';
import {CommentService} from '../comment/services/comment.service';
import {BooleanPipe} from '../utils/boolean-pipe';

import {postRoutes} from './post.routes';


@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(postRoutes)

  ],
  exports: [BooleanPipe],
  declarations: [
    PostDetailComponent,
    PostDetailMainComponent,
    PostListComponent,
    AddCommentComponent,
    BooleanPipe
  ],
  providers: [
    PostDetailService,
    PostListService,
    CommentService
  ]
})

export class PostModule {
}
