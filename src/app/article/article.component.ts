import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() title: String;
  @Input() img: String;
  @Input() article: String;
  public likeCounter = 0;
  public dislikeCounter = 0;

  public commentText : String = ""
  public commentArray = [];
  public viewArticleData = [];

  constructor() { }

  ngOnInit() {
  }

  addComment() {
    if(this.commentText != ""){
    this.commentArray.push(this.commentText);
    this.commentText=""
    }
  }

  increaseCounter(type: string) {
    if (type === "like") {
      this.likeCounter++;
    } else {
      this.dislikeCounter++;
    }

  }

deleteComment(index: number){
   this.commentArray.splice(index,1);
}
  
}
