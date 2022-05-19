import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {
  blogLists: any[];

  constructor() { }

  ngOnInit(): void {
    this.autoRun();
  }

  autoRun() {
    this.listeners();
    this.initialisers();
  }

  initialisers() {
    this.initBlogLinks();
  }

  listeners() { }

  initBlogLinks() {
    this.blogLists = [
      { label: "KiwiSaver HomeStart grant explained", link: '#' },
      { label: "What's happening in the property market?", link: '#' },
      { label: 'Trust law reform', link: '#' },
      { label: 'Tax update - Simplification of taxes, foreign ...', link: '#' },
      { label: 'What do the new lending rules mean?', link: '#' },
      { label: 'How will the Reserve Bank respond to ...', link: '#' }
    ]
  }
}
