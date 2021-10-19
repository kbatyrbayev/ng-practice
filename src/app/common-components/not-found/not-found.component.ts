import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <mat-icon>info</mat-icon>
    <p>
      Страница находится в разработке!
    </p>
  `,
  styles: [
    `
      :host {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      mat-icon {
        font-size: 50px;
        width: 50px;
        height: 50px;
        color: red;
      }
      p {
        font-size: 20px;
      }
    `
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
