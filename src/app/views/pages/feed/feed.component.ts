import { Component, OnInit } from '@angular/core';
import { PostService } from "../../../services/post.service";


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: any;

  constructor(
    private postService: PostService, // após importar, o Angular deixa disponível para ser usado pelo componente
  ) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts()
  }

  saveComent(){
    alert("Comentário está sendo salvo!");
  }
}
