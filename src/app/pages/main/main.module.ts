import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CalendarModule } from 'src/app/common/CalendarModule';
import { MaterialModule } from 'src/app/common/MaterialModule';
import { ViewComponent } from '../view/view.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { DayDetailComponent } from 'src/app/components/day-detail/day-detail.component';


@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    ViewComponent,
    DayDetailComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    CalendarModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    MainComponent
  ],
  providers: [
    CommonModule
  ],
  entryComponents: [
    DayDetailComponent
  ]
})
export class MainModule { }
