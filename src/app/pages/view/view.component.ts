import { Component, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { MatDialog } from '@angular/material/dialog';
import { DayDetailComponent } from 'src/app/components/day-detail/day-detail.component';
import { EventDetailComponent } from 'src/app/components/event-detail/event-detail.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  // @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  // calendarVisible = true;
  // calendarWeekends = true;

  titleFormat = {
    month: '2-digit',
    year: 'numeric',
  };
  buttonText = {
    month: '月',
    week: '周',
    day: '日'
  };
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin, listPlugin, bootstrapPlugin];
  calendarEvents: EventInput[] = [
    {
      title: 'Event Now 1',
      start: new Date(),
      allDay: true,
    },
    {
      title: 'My Event 2',
      start: '2020-05-17T10:30:00',
      end: '2020-05-17T10:45:00',
      allDay: false,
      description: 'This is a cool event'
    },
    {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: '2020-05-20',
      allDay: true
    }
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  handleDateClick(arg) {
    // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
    //   this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
    //     title: 'New Event',
    //     start: arg.date,
    //     allDay: arg.allDay
    //   });
    // }
    console.log(arg.dateStr);
    const dialogRef = this.dialog.open(EventDetailComponent, {
      data: { start: arg.date },
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  handleEventClick(info) {
    console.log(info.event);
    const dialogRef = this.dialog.open(DayDetailComponent, {
      data: { event: info.event },
      maxWidth: '110vw',
      maxHeight: '600px',
      width: '320px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
