import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-section',
  template: ` <div class="flex-direction">
    <app-code> ng generate component</app-code>
    <app-code> ng g c</app-code>
    <app-code> ng g c --skip-tests</app-code>
    <app-code>
      1. Создать файл, name.component.ts
      <br />
      2. Прописать:
      <pre>
        {{ example }}
        {{ example2 }}
      </pre>
      4. Объявить внутри модуля.
    </app-code>
  </div>`,
  styles: [],
})
export class ComponentSectionComponent implements OnInit {
  example =
    "@Component({\n       \t selector: 'name',\n     \t template: '',\n      \t styles: ['','']\n    \t})";
  example2 =
    'export class NameComponent implements OnInit {\n        \tngOnInit() {}\n      \t}';

  constructor() {}

  ngOnInit(): void {}
}
