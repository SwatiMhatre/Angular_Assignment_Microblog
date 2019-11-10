import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", component: WelcomeComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "activity", component: ActivityComponent, canActivate: [AuthGuard] },
  { path: "login", loadChildren: "./auth/auth-module.module#AuthModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
