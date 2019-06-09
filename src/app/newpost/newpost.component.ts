import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PostService} from '../services/post-service.service';
import {Post} from '../models/post.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {
  postform: FormGroup;
  constructor( private formbuilder : FormBuilder,
               private postService : PostService,
               private router : Router) { }

  ngOnInit() {
    this.initform();
  }

  private initform() {
    this.postform = this.formbuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    }
    );
  }

  onSubmitForm(){
  const formvalue = this.postform.value;
  const newpost = new Post(0,'', '',new Date(),0);
  newpost.title = formvalue['title'];
  newpost.content = formvalue['content'];
  if(this.postService.getPosts().length === 0){
    newpost.id = 0;
  }else if (this.postService.getPosts().length > 0){
    const lastId = this.postService.getPosts()[this.postService.getPosts().length - 1].id;
  newpost.id = lastId + 1;}
  newpost.loveIts = 0;

  this.postService.addPost(newpost);
  this.router.navigate(['/posts']);
  }

}
