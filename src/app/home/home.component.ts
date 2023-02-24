import { Component } from '@angular/core';

import{
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('HomeComponent',[
      state('show',style({
        opacity:1
      })),
      state('hide', style({
        opacity:0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class HomeComponent {
  
  show = false;

  constructor(private router:Router){ }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show;
  }

  goToFirstChat(){
    this.router.navigate(['/chat'])
  }

  goToSecondChat(){
    this.router.navigate(['/chat1'])
  }

  goToAboutUs() {
    this.router.navigate(['aboutus'])
  }

}
