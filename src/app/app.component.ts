import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      if (value instanceof RoutesRecognized) {
        sessionStorage.setItem('previousUrl', value.url);
      }
    });
  }
}
