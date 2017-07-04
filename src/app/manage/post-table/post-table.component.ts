import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment} from '@angular/router';
import {flyIn} from '../../animations/fly-in';
import {PostTableService} from './services/post-table.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css'],
  animations: [flyIn]
})
export class PostTableComponent implements OnInit {
  @Input() dataURL: string = 'mock-data/postlist-mock.json';

  public postList: Array<any>;
  public maxSize = 5;
  public itemPerPage = 5;
  public totalItems = 15;
  public currentPage = 1;
  public numPages;

  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              public postTableService: PostTableService) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getPostsByPage(params['page'])
    );
  }

  public getPostsByPage(page: number) {
    console.log('页码>' + page);
    return this.postTableService.getPostTable(this.dataURL)
      .subscribe(
        res => {
          console.log(res);
          this.postList = res.items;
        },
        error => {
          console.log(error);
        },
        () => {
        }
      );
  }

  public pageChanged(event: any): void {
    const urlTree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.router.navigateByUrl(s[0] + '/posttable/page/' + event.page);
  }

  public goToWrite(): void {
    this.router.navigateByUrl('user/write');
  }

  public editPost(event): void {
    const target = event.currentTarget;
    const nameAttr = target.attributes.name;
    const value = nameAttr.nodeValue;
    console.log('postId>' + value + target + nameAttr);
  }

  public top(event): void {
    const target = event.currentTarget;
    const nameAttr = target.attributes.name;
    const value = nameAttr.nodeValue;
    console.log('pageId>' + value);
  }

  public upTop(event): void {
    const target = event.currentTarget;
    const nameAttr = target.attributes.name;
    const value = nameAttr.nodeValue;
    console.log('postId>' + value);
  }

  public delPost(event): void {
    const target = event.currentTarget;
    const nameAttr = target.attributes.name;
    const value = nameAttr.nodeValue;
    console.log('postId>' + value);
  }
}
