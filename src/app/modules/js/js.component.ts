import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.scss']
})

export class JsComponent implements OnInit {

  navigation: INav[] = [
    { title: 'Типы данных в JavaScript', router: 'section-1'},
    { title: 'Значения и ссылки', router: 'section-2' },
    { title: 'Как работает Scope', router: 'section-3' },
    { title: 'Что такое Hoisting', router: 'section-3' },
    { title: 'Переменные Let const', router: 'section-3' },
    { title: 'Замыкания', router: 'section-3' },
    { title: 'Что такое IIFE', router: 'section-3' },
    { title: 'Контекст', router: 'section-3' },
    { title: 'Как работает new', router: 'section-3' },
    { title: 'Как работают прототипы', router: 'section-3' },
    { title: 'Асинхронность', router: 'section-3' },
  ]


  ngOnInit() {

  }
}

interface INav {
  title: string;
  router?: string;
  isOpen?: boolean
}