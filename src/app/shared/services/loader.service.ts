import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LoaderService {
    isLoading = new Subject<boolean>();

    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
}