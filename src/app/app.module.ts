import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NewpostComponent } from './newpost/newpost.component';
import {PostService} from './services/post-service.service';
import { HeaderComponent } from './header/header.component';
import { ListpostComponent } from './listpost/listpost.component';


const appRoutes : Routes  = [
  {path : 'addPost', component: NewpostComponent},
  {path : 'posts', component: ListpostComponent},
  {path : '' , component: ListpostComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewpostComponent,
    HeaderComponent,
    ListpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
