import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {DxDrawerComponent} from 'devextreme-angular';
import {RouteName} from './shared/constants/route-name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(DxDrawerComponent, {static: false}) drawer: DxDrawerComponent;
  navigation: {
    id: number;
    text: string;
    icon: string;
    path: string;
  }[];
  isDrawerOpen = true;
  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.isDrawerOpen = !this.isDrawerOpen
    }
  }];

  constructor(private router: Router) {
    this.navigation = [
      {id: 1, text: 'Inicio', icon: 'home', path: RouteName.DASHBOARD.HOME_ROOT},
      {id: 2, text: 'Ventas', icon: 'money', path: RouteName.SALES.HOME_ROOT},
      {id: 3, text: 'Inventario', icon: 'product', path: RouteName.STOCK.HOME_ROOT},
      {id: 4, text: 'Clientes', icon: 'group', path: RouteName.CUSTOMER.HOME_ROOT},
      {id: 5, text: 'Reports', icon: 'chart', path: RouteName.REPORT.HOME_ROOT}
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      if (value instanceof RoutesRecognized) {
        sessionStorage.setItem('previousUrl', value.url);
      }
    });
  }
}
