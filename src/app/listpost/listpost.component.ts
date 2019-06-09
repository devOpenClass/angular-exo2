import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.scss']
})
export class ListpostComponent  implements OnInit, OnDestroy {
  posts : Post[];
  postSubscription : Subscription;
  indexP: number;


  constructor (private postservice : PostService,
              private router: Router){}


  ngOnInit(): void {
    this.postSubscription = this.postservice.postSubject.subscribe(
      (posts : Post[]) =>{
        this.posts = posts;
      }
    );
    this.postservice.emitPost();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
