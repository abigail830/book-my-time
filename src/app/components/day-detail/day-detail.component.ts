import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericDialogData } from 'src/app/models/GenericDialogData';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {
  title = '预约详情';
  content = '';
  event: GenericDialogData;
  startTime;

  constructor(public dialogRef: MatDialogRef<DayDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.event = data.event;
  }

  ngOnInit() {
    this.content = this.event.title;
    this.startTime = new Date(this.event.start).toLocaleString();
  }

  onOK() {
    this.dialogRef.close();
  }

}
