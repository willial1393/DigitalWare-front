import {Component, OnInit} from '@angular/core';
import {RouteName} from '../../../shared/constants/route-name';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  previousUrl: string;
  isDev = !environment.production;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.previousUrl = sessionStorage.getItem('previousUrl');
  }

  goToHome(): void {
    this.router.navigate([RouteName.DASHBOARD.HOME_ROOT]);
  }
}
