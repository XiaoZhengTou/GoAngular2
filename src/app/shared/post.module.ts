/**
 * Created by Administrator on 2017/6/19 0019.
 */
import { NgModule} from '@angular/core';
import { ModalModule} from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap';
import { SharedModule } from './shared.module';

import { CommentTableComponent} from '../manage/comment-table/comment-table.component';
import { PostTableComponent } from '../manage/post-table/post-table.component';

@NgModule({
  declarations: [
    CommentTableComponent,
    PostTableComponent
  ],
  imports: [
    SharedModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot()
] ,
  exports: [
    ModalModule,
    PaginationModule,
    CommentTableComponent,
    PostTableComponent
  ]
})

export class PostShareModule {}
