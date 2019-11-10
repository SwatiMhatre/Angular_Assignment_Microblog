import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { MaterialModule } from './shared/material/material.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { BsNavigationComponent } from './bs-navigation/bs-navigation.component';
import { ArticleComponent } from './article/article.component';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './shared/reducer/home.reducer';
import { activityReducer } from './shared/reducer/blog.activity.reducer';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityComponent,
    BsNavigationComponent,
    ArticleComponent,
    FooterComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      blogs: homeReducer,
      activity: activityReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
