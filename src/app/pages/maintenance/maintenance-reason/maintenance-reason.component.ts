import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-reason',
  templateUrl: './maintenance-reason.component.html',
  styleUrls: ['./maintenance-reason.component.scss']
})
export class MaintenanceReasonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
  declarations: [MaintenanceReasonComponent],
  imports: []
})
export class MaintenanceReasonModule { }