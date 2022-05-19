import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.sass']
})
export class NavMainComponent implements OnInit {
  navLinks: any[];

  constructor() { }

  ngOnInit(): void {
    this.autoRun();
  }

  autoRun() {
    this.listeners();
    this.initialisers();
  }

  initialisers() {
    this.initNavLinks();
  }

  listeners() { }

  initNavLinks() {
    this.navLinks = [
      { label: 'Book keeping & payroll', link: '#' },
      { label: 'Financial & GST', link: '#' },
      { label: 'KiwiSaver advice', link: '#' },
      { label: 'Insuring people', link: '#' },
      { label: 'Tax & business advice', link: '#' },
      { label: 'Trustee services', link: '#' },
      { label: 'Mortgage advice', link: '#' }
    ]
  }
}
