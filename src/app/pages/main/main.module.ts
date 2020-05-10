import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CalendarModule } from 'src/app/common/CalendarModule';
import { MaterialModule } from 'src/app/common/MaterialModule';
import { ViewComponent } from '../view/view.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { DayDetailComponent } from 'src/app/components/day-detail/day-detail.component';
import { EventDetailComponent } from 'src/app/components/event-detail/event-detail.component';
import { BaseModule } from 'src/app/common/BaseModule';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    ViewComponent,
    DayDetailComponent,
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    CalendarModule,
    FormsModule,
    BaseModule
  ],
  exports: [
    MainComponent
  ],
  providers: [
    CommonModule
  ],
  entryComponents: [
    DayDetailComponent,
    EventDetailComponent
  ]
})
export class MainModule { }
