import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-2',
  template: `
    <div [innerHTML]="example"></div>
  `,
  styles: [``],
})
export class Section2Component implements OnInit {
  example = '[input]'
  ngOnInit() {}
}
