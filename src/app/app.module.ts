import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { BsNavigationComponent } from './bs-navigation/bs-navigation.component';
import { ArticleComponent } from './article/article.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/reducer/home.reducer';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityComponent,
    BsNavigationComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : 'home', component: HomeComponent},
      { path : 'activity', component: ActivityComponent},
    ]),
    StoreModule.forRoot({
      blogs : reducer
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
