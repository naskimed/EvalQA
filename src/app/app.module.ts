import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutTheProjectComponent } from './about-the-project/about-the-project.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstChatComponent } from './first-chat/first-chat.component';
import { SecondChatComponent } from './second-chat/second-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutTheProjectComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DemoComponent,
    FirstChatComponent,
    SecondChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
