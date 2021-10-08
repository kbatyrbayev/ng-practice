import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav aria-label="site navigation">
        <ul>
          <li *ngFor="let nav of navigation">
            <a [routerLink]="[nav.route]" routerLinkActive="active">
              {{ nav.route }}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [
    `
      header {
        background: #1976d2;
        padding: 10px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 64px;
        display: flex;
        align-items: center;
      }

      header nav ul {
        display: flex;
        list-style: none;
        text-transform: uppercase;
        font-size: 120%;
      }

      header nav ul li {
        margin-right: 5px;
        cursor: pointer;
      }

      header nav ul li a {
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        padding: 2px 8px;
      }

      header nav ul li a.active,
      header nav ul li a:hover {
        background: #3b8ad9;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  navigation = [
    { id: 1, route: 'angular' },
    { id: 2, route: 'typescript' },
    { id: 3, route: 'RXJS' },
    { id: 4, route: 'Javascript' },
    { id: 5, route: 'HTML' },
    { id: 6, route: 'CSS' },
  ];

  ngOnInit() {}
}
