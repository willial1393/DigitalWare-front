import {Component, OnInit} from '@angular/core';
import {RouteName} from '../../../shared/constants/route-name';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  routerName = RouteName;
  previousUrl: string;
  isDev = !environment.production;

  constructor() {
  }

  ngOnInit(): void {
    this.previousUrl = sessionStorage.getItem('previousUrl');
  }

}
