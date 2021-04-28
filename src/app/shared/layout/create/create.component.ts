import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    @Input() data: any;
    @Input() option: any;
    @Input() arrayButton: any;
    @Input() dataModel?: any;
    @Output() callback = new EventEmitter<any>();

    model: any = {};

    constructor(
        private dialogRef: MatDialogRef<any>,
    ) { }

    ngOnInit() {
        this.model = this.dataModel || {};
    }

    onClickButton = (i) => {
        if (i.type == 'cancel') return this.dialogRef.close();
        this.callback.emit(this.model);
    }
}

@NgModule({
    declarations: [
        CreateComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CreateComponent
    ]
})
export class CreateBaseModule { }