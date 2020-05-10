import { FullCalendarModule } from '@fullcalendar/angular';
import { NgModule } from '@angular/core';
import { UserStorage } from '../service/user-storage';
import { UserServiceService } from '../service/user-service.service';
import { ApiService } from '../service/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        UserServiceService,
        UserStorage,
        ApiService
    ],
    declarations: []
})
export class BaseModule { }
