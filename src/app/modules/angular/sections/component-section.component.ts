import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-section',
  template: ` <div class="flex-direction">
    <code> ng generate component </code>

    <code> ng g c </code>
  </div>`,
  styles: [],
})
export class ComponentSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
