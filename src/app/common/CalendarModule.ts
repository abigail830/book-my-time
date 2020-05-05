import { FullCalendarModule } from '@fullcalendar/angular';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        FullCalendarModule
    ],
    imports: [
        FullCalendarModule
    ]
})
export class CalendarModule { }
