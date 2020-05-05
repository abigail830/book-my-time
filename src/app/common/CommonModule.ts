import { FullCalendarModule } from '@fullcalendar/angular';
import { NgModule } from '@angular/core';
import { UserStorage } from '../models/user-storage';

@NgModule({
    exports: [
        UserStorage
    ],
    imports: [
        UserStorage
    ]
})
export class CommonModule { }
