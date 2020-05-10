import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventData } from 'src/app/models/EventData';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  title = '预约';
  content: EventData;

  constructor(public dialogRef: MatDialogRef<EventDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: EventData) {

    console.log(data);
    this.content = data;
    this.content.start = new Date(data.start).toLocaleString();
    console.log(this.content);
  }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    this.dialogRef.close(true);
  }
}
