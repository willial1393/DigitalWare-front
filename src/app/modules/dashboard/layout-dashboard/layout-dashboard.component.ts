import {Component, ViewChild} from '@angular/core';
import {DxDrawerComponent} from 'devextreme-angular';

@Component({
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrls: ['./layout-dashboard.component.css']
})
export class LayoutDashboardComponent {

  @ViewChild(DxDrawerComponent, {static: false}) drawer: DxDrawerComponent;
  navigation: {
    id: number;
    text: string;
    icon: string;
  }[];
  showModes: string[] = ['push', 'shrink', 'overlap'];
  text: string;
  isDrawerOpen = true;

  constructor() {
    this.text = 'contenido';
    this.navigation = [
      {id: 1, text: 'Products', icon: 'product'},
      {id: 2, text: 'Sales', icon: 'money'},
      {id: 3, text: 'Customers', icon: 'group'},
      {id: 4, text: 'Employees', icon: 'card'},
      {id: 5, text: 'Reports', icon: 'chart'}
    ];
  }

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.isDrawerOpen = !this.isDrawerOpen
    }
  }];
}
