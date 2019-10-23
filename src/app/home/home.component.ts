import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogs } from '../shared/model/blogs.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs : Observable<Blogs[]>

  constructor(private store:Store<AppState>) { 
    this.blogs=store.select('blogs');
  }
  public articleData = [
    {
      title: 'Article about Smile',
      imgUrl: 'https://www.w3schools.com/html/pic_trulli.jpg',
      article: `Running your app outside a browser means that you can take advantage of server-side
      pre-rendering for near-instant first app render times and for SEO. It means you could run from inside a Web
      Worker to improve your app's responsiveness by using multiple threads. And
      it means that you could run your app inside Electron.js
      or Windows Universal to deliver it to the desktop`,
    },
    {
      title: 'Article about Smile',
      imgUrl: 'https://img.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1417-1143.jpg',
      article: `Running your app outside a browser means that you can take advantage of server-side
      pre-rendering for near-instant first app render times and for SEO. It means you could run from inside a Web
      Worker to improve your app's responsiveness by using multiple threads. And
      it means that you could run your app inside Electron.js
      or Windows Universal to deliver it to the desktop`,
    },
    {
      title: 'Article about Smile',
      imgUrl: 'http://www.lovethispic.com/uploaded_images/5181-Spring-Green-Scenery.jpg',
      article: `Running your app outside a browser means that you can take advantage of server-side
      pre-rendering for near-instant first app render times and for SEO. It means you could run from inside a Web
      Worker to improve your app's responsiveness by using multiple threads. And
      it means that you could run your app inside Electron.js
      or Windows Universal to deliver it to the desktop`,
    },
    {
      title: 'Article about Smile',
      imgUrl: 'http://www.lebanoninapicture.com/Prv/Images/Pages/Page_209488/lebanon-sunset-mountains-scenery-sunsets-sunset-3-14-2019-2-10-57-pm-l.jpg',
      article: `Running your app outside a browser means that you can take advantage of server-side
      pre-rendering for near-instant first app render times and for SEO. It means you could run from inside a Web
      Worker to improve your app's responsiveness by using multiple threads. And
      it means that you could run your app inside Electron.js
      or Windows Universal to deliver it to the desktop`,
    },
  
  ]
  

  ngOnInit() {
  }

}
