import { Component,Input,  OnInit } from '@angular/core';
import {PostService} from '../services/post-service.service';
import {Post} from '../models/post.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() titlep: string;
  @Input() content: string;
  createdAt = new Date();
  @Input() postj: any
  @Input() indexP: number
  @Input() loveits : number;
  @Input() id: number;
  constructor(private postService : PostService,
              private router : Router) { }

  ngOnInit() {

  }
  onLoveIt(id: number){
   this.loveits = this.postService.onloveItById(id);
  }
  onDontLoveIt(id: number){
    this.loveits =this.postService.onDontLoveitById(id)
  }
  loveit(id : number){
    const loveit = this.postService.getLoveItById(this.id);
       if(loveit > 0) {
     return 'list-group-item-success';
   }
   else if (loveit < 0 ) {
     return 'list-group-item-danger';
   }
   else if (loveit === 0){
     return 'ist-group-item';
   }

  }

  ondelete(post : Post) {
    this.postService.deletePost(post);
  }

}
