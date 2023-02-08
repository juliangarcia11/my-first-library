import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuModalService {

  // private reference to trigger the next subscription event from within only this service
  private subject = new Subject();

  // standards are to suffix an observable with "$"
  close$: Observable<any> = this.subject.asObservable();

  constructor() { }

  /**
   * Public reference to request the firing of the next observable
   */
  close() {
    this.subject.next(null);
  }
}
