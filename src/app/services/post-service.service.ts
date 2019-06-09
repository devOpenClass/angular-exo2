import {Injectable, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [
  /*  {
      id : 0,
      title : 'hello',
      content : 'coucou ',
      dateCreation : new Date(),
      loveIts : -2
    }*/
    ];
  postSubject = new Subject<Post[]>();

  emitPost(){
    this.postSubject.next(this.posts.slice());
  }

 onloveItById(id: number){
   const post = this.posts.find(
     (postI) => {
       if(postI.id === id) return true;
     }
   )
   post.loveIts +=1;
   return post.loveIts;
 }

 onDontLoveitById(id: number){
   const post = this.posts.find(
     (postI) => {
       if(postI.id ===id) return true;
     }
   )
   post.loveIts -=1;
   return post.loveIts;
 }

  addPost(post: Post){
    this.posts.push(post);
    this.emitPost();
  }
  getLoveItById(id: number){
    const post = this.posts.find(
      (postI) => {
        if(postI.id === id) return true;
      }
    )
    return post.loveIts;
  }


  loveit(id: number) {
    const post = this.posts.find(
      (postI)=> {
        if (postI.id === id) return true;
      }
    );
    if(post.loveIts > 0) {
      return 'list-group-item-success';
    }
    else if (post.loveIts < 0 ) {
      return 'list-group-item-danger';
    }
    else if (post.loveIts === 0){
      return 'ist-group-item';
    }
  }

  public getPosts(){
    return this.posts;
  }
  deletePost(post: Post) {
    const indexpost = this.posts.findIndex(
      (postel)=>{
        if(postel === post){
          return true;
        }
      }
    );
    this.posts.splice(indexpost, 1);
    this.emitPost();
  }
}
