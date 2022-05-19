import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  pagesLinks: any[];

  constructor() { }

  ngOnInit(): void {
    this.autoRun();
  }

  autoRun() {
    this.listeners();
    this.initialisers();
  }

  initialisers() {
    this.initPagesLinks();
  }

  listeners() {

  }

  initPagesLinks() {
    this.pagesLinks = [
      { label: 'Home', link: '#' },
      { label: 'Our Services', link: '#' },
      { label: 'About Us', link: '#' },
      { label: 'Testimonials', link: '#' },
      { label: 'Blog', link: '#' },
      { label: 'Contact Us', link: '#' }
    ]
  }
}
