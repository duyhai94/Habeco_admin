import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
  declarations: [AccessoriesComponent],
  imports: []
})
export class AccessoriesModule { }
