/**
 * Created by Administrator on 2017/6/1 0001.
 */
import { RouterModule} from '@angular/router';
import { HomeComponent } from './home.component';
export const homeRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: '',
      loadChildren: '../post/post.module#PostModule'
    }]
  }
]
