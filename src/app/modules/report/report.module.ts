import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReportRoutingModule} from './report-routing.module';
import {HomeReportComponent} from './pages/home-report/home-report.component';


@NgModule({
  declarations: [HomeReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule {
}
