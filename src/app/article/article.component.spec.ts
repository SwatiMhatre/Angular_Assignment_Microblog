import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { FormsModule } from '@angular/forms';
import { AppState } from '../app.state';
import { ActivityAppState } from '../app.state.activity';
import { Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';


describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  let imageURL = [
    "https://picography.co/wp-content/uploads/2019/06/picography-dark-skies-over-grass-600x400.jpg",
    "https://img.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1417-1143.jpg"

  ];

  let MockHomeStore = {}
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers:[{provide: Store, useValue:MockHomeStore } ],
      declarations: [ ArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check label name',() =>{
    let commentName = fixture.nativeElement.querySelectorAll("label")
    console.log(commentName)
    expect(commentName[0].innerHTML).toBe("Comment:");
  });
  
  it('should check image tag to be rendered', () =>{
    let img= fixture.nativeElement.querySelectorAll("img")
    console.log(img);
    expect(img).not.toBeNull;

  });

 it('should check the count when clicked on like button',() =>{
   let likeButton = fixture.debugElement.query(By.css('.icon')).nativeElement;
   let likeCounter = fixture.nativeElement.querySelectorAll("span")[0]
  //  component.likeOrDislikeActivity = () =>{
  //    return component.likes+1
  //  }
   //spyOn(component,'likeOrDislikeActivity')
   //console.log("like",likeCounter);
   expect(likeButton).toBeDefined();
   component.likes = 0;
   fixture.detectChanges(false)
   //likeButton.click()
  //likeButton.triggerEventHandler('click', null);
  //component.likeOrDislikeActivity('like');
   fixture.detectChanges(false)
   //expect(component.likeOrDislikeActivity).toHaveBeenCalled();
  // console.log("like",likeCounter);
  //  console.log("componentjhkk", component);
  // console.log(component.likes); 
   
 });

});

