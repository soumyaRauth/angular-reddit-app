import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Array<Article>
  constructor(){
    this.articles=[
      new Article('Angular','http://angular.io',15),
      new Article('Angular','http://angular.io',9),
      new Article('Angular','http://angular.io',20),
     ]
  }

  /**
   * 
   * @param title  
   * @param link 
   */
 addArticle(title:HTMLInputElement,link:HTMLInputElement){
   this.articles.push(new Article(title.value,link.value,0));
   title.value='';
   link.value='';
   return false;

   
 }


 /**
  * Sort the articles
  */

  sortArticles():Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
