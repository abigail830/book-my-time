import { Component, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

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
      title: 'Event Now',
      start: new Date()
    },
    {
      title: 'My Event',
      start: new Date(),
      description: 'This is a cool event'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      });
    }
  }
}
