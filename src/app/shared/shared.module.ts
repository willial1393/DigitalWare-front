import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './components/button/button.component';
import {DxButtonModule, DxLoadIndicatorModule} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    DxLoadIndicatorModule,
  ],
  exports: [
    ButtonComponent
  ],
  declarations: [ButtonComponent]
})
export class SharedModule {
}
