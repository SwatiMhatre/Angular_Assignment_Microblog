import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: WelcomeComponent },
  { path: "home", component: HomeComponent },
  { path: "activity", component: ActivityComponent },
  { path: "login", loadChildren: "./auth/auth-module.module#AuthModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
