import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.component.html',
    styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit, OnChanges {
    @Input() data: any;
    constructor() { }

    ngOnChanges() { }

    ngOnInit(): void {
    }

}
@NgModule({
    declarations: [
        CardDetailComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CardDetailComponent
    ]
})
export class CardDetailModule { }