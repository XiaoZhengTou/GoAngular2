import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AlertModule } from 'ng2-bootstrap';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { ProgressbarModule } from 'ng2-bootstrap/progressbar';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { TooltipModule } from 'ng2-bootstrap/tooltip';

import { InputTextModule, ButtonModule } from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';


import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { UserLoginService } from './user/user-login/user-login.service';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserRegisterService } from './user/user-register/user-register.service';
import { ForgetPwdService } from './user/forget-pwd/forget-pwd.service';

import { EqualValidator } from './user/user-register/directives/equal-validator.directive';

import { DemoAlertBasicComponent  } from './chart/chart.component';
import { EChartOptionDirective } from './chart/echart-option.directive';
import { UseJqueryComponent } from './use-jquery/use-jquery.component';
import { GaodeMapComponent } from './map/gaode-map/gaode-map.component';
import { AmapComponent} from './map/gaode-map/amap/amap.component';
import { JsplumbDemoComponent } from './jsplumb-demo/jsplumb-demo.component';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ConlineContactComponent } from './home/conline-contact/conline-contact.component';
import { SocialChannelComponent } from './home/social-channel/social-channel.component';
import { UserInfoComponent  } from './user/user-info/user-info.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserMainComponent } from './user/user-main/user-main.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostDetailMainComponent } from './post/post-detail-main/post-detail-main.component';
import { PostListComponent } from './post/postlist/postlist.component';
import { WritePostComponent } from './post/write-post/write-post.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { CommentTableComponent } from './manage/comment-table/comment-table.component';
import { ManageMainComponent } from './manage/manage-main/manage-main.component';
import { PostTableComponent } from './manage/post-table/post-table.component';
import { SysParamComponent } from './manage/sys-param/sys-param.component';
import { UserTableComponent } from './manage/user-table/user-table.component';
import { SitestatComponent } from './sitestat/sitestat.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    ForgetPwdComponent,
    UserRegisterComponent,
    EqualValidator,
    EChartOptionDirective,
    DemoAlertBasicComponent ,
    UseJqueryComponent,
    AmapComponent,
    GaodeMapComponent,
    JsplumbDemoComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
        provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
      }
    ),
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    ToastModule.forRoot(),
    ProgressbarModule.forRoot(),
    SharedModule,
    RouterModule.forRoot(appRoutes),
    InputTextModule,
    ButtonModule,
    FileUploadModule
  ],
  providers: [
    UserLoginService,
    UserRegisterService,
    ForgetPwdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
