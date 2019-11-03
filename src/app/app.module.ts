import { MaterialModule } from './material/material.module';
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
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    StoreDevtoolsModule.instrument({
      maxAge : 10
    }),
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
