import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-site',
  templateUrl: './maintenance-site.component.html',
  styleUrls: ['./maintenance-site.component.scss']
})
export class MaintenanceSiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
  declarations: [MaintenanceSiteComponent],
  imports: []
})
export class MaintenanceSiteModule { }