import { DOCUMENT } from '@angular/common';
import { Component, Renderer2, Inject, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollFunction, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollFunction, true);
  }

  scrollFunction = () => {
    const logo = this.document.querySelector(".logo") as HTMLImageElement;
    if (window.scrollY > 0) {
      logo.src = "assets/image/EvalQA-scroll.png";
    } else {
      logo.src = "assets/image/EvalQA.png";
    }

    const navbar = this.document.querySelector('.navbar');
    if (navbar) {
      if (this.document.body.scrollTop > 80 || this.document.documentElement.scrollTop > 80) {
        this.renderer.addClass(navbar, 'scrolled-navbar');
      } else {
        this.renderer.removeClass(navbar, 'scrolled-navbar');
      }
    }
  };
}
