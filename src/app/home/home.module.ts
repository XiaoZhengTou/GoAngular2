/**
 * Created by Administrator on 2017/6/1 0001.
 */
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {SocialChannelComponent} from './social-channel/social-channel.component';
import {SitestatComponent} from '../sitestat/sitestat.component';
import {ConlineContactComponent} from './conline-contact/conline-contact.component';

import {homeRoutes} from './home.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [],
  declarations: [
    HomeComponent,
    SocialChannelComponent,
    SitestatComponent,
    ConlineContactComponent
  ],
  providers: []
})

export class  HomeModule {
}
