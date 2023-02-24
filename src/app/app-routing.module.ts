import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTheProjectComponent } from './about-the-project/about-the-project.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FirstChatComponent } from './first-chat/first-chat.component';
import { HomeComponent } from './home/home.component';
import { SecondChatComponent } from './second-chat/second-chat.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"chat", component: FirstChatComponent},
  {path:"chat1", component: SecondChatComponent},
  {path:"theproject", component: AboutTheProjectComponent},
  {path:"aboutus", component: AboutUsComponent},
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
