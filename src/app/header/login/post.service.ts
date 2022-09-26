import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
 
import { post } from "./post.model"

@Injectable({providedIn: 'root'})
export class postsService{
    private posts: post[] = [];
    private postUpdated = new Subject<post[]>();

    getPosts(){
        return [...this.posts];
    }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }

    addPost (title: string, content: string){
        const post: post ={title: title , content: content}
        this.posts.push(post); 
        this.postUpdated.next([...this.posts]);
    }
}