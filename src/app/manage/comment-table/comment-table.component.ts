import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment} from '@angular/router';
import {flyIn} from '../../animations/fly-in';
@Component({
  selector: 'app-comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.css'],
  animations: [flyIn]
})
export class CommentTableComponent implements OnInit {
  public maxSize = 5;
  public itemsPerPage = 5;
  public totalItems = 4;
  public currentPage = 1;
  public numPage;
  public worker: Worker;

  constructor(public router: Router,
              public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getCommentsByPage(params['page'])
    );
    // 启动web worker 加载数据
    this.worker = new Worker('src/app/manage/comment-table/comment-worker.js');
    this.worker.postMessage({action: 'load'});

    // 注册事件
    this.worker.addEventListener('message', (event: MessageEvent) => {
      console.log(event);
    });
    this.worker.addEventListener('error', (event: MessageEvent) => {
      console.error(event);
    });
  }


  public getCommentsByPage(page: Number): void {
    console.log('页码' + page);
  }

  public pageChanged(event: any): void {
    const urlTree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.router.navigateByUrl(s[0] + '/commenttable/page' + event.page);
  }

  public deComment(commentId: Number): void {
    console.log(commentId);
  }
}
