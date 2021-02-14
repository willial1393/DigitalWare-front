import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {RouteName} from '../../../../shared/constants/route-name';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent {
  routeName = RouteName;

  constructor(public router: Router) {
  }
}
