import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent implements OnInit {
  navigation: INav[] = [
    {
      id: 1,
      title: 'Компоненты в деталях',
      child: [
        {
          id: 1,
          title: 'Как создавать компоненты',
          route: 'components',
        },
        {
          id: 2,
          title: 'Передача данных',
          route: 'input-output',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface INav {
  id: number;
  title: string;
  route?: string;
  child?: INav[];
  isOpen?: boolean;
}
