import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FirstChatComponent } from './first-chat/first-chat.component';
import { HomeComponent } from './home/home.component';
import { SecondChatComponent } from './second-chat/second-chat.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "chat", component: FirstChatComponent },
  { path: "chat1", component: SecondChatComponent },
  { path: "aboutus", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
