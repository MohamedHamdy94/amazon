import { Injectable } from '@angular/core';
import {BehaviorSubject , Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public Loading : BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
  constructor() {}
}
