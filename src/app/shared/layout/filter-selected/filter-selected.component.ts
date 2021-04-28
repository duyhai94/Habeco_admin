import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-filter-selected',
  templateUrl: './filter-selected.component.html',
  styleUrls: ['./filter-selected.component.scss']
})
export class FilterSelectedComponent implements OnChanges {
  @Input() listFilter: any;
  @Output() callback = new EventEmitter<any>();

  constructor() { }

  width: string;

  isActive: number;

  ngOnChanges() {
    this.width = 100 / this.listFilter.length + '%';
  }

  onChangeValueSelected = (i, ix) => {
    this.isActive = ix;
    this.callback.emit(i);
  }

}
@NgModule({
  declarations: [FilterSelectedComponent],
  imports: [
    CommonModule
  ],
  exports: [FilterSelectedComponent]
})
export class FilterSelectedModule { }