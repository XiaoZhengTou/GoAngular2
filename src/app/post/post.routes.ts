/**
 * Created by Administrator on 2017/6/13 0013.
 */
import {} from '@angular/router';

import {PostDetailMainComponent} from './post-detail-main/post-detail-main.component';
import {PostListComponent} from './postlist/postlist.component';

export const postRoutes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {
    path: 'page/:page',
    component: PostListComponent
  },
  {
    path: 'postdetail/:postId',
    component: PostDetailMainComponent
  }
];
