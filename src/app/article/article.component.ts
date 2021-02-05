import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from "./article.model";
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  @Input() article:Article 

  constructor() { 

    
  }

  /**
   * Voting up functionality
   */
  voteUp(){
    this.article.voteUp();
    return false;
  }

  /**
   * Voting up functionality
   */
  voteDown(){
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
    // this.article=new Article(this.article.title,this.article.links,this.article.votes);    
  }
}
