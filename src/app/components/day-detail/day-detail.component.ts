import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import EventApi from '@fullcalendar/core/api/EventApi';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {
  title = '';
  description = '';
  event: EventApi;
  startTime;
  endTime;

  constructor(public dialogRef: MatDialogRef<DayDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.event = data.event;
  }

  ngOnInit() {
    console.log(this.event);
    this.title = '预约: ' + this.event.title;
    this.startTime = new Date(this.event.start).toLocaleString();
    this.endTime = new Date(this.event.end).toLocaleString();
    this.description = this.event.extendedProps.description;
  }

  onOK() {
    this.dialogRef.close();
  }

}
