import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  constructor() { }

  private showSidebarSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  showSidebar$ = this.showSidebarSubject.asObservable();
  innerPaneSize :number = 400;

  setCustomSideBar(showSidebar :boolean = false){
    this.showSidebarSubject.next(showSidebar);
  }

  getCustomSideBar(){
    return this.showSidebarSubject;
  }

  setInnerPaneSize(width :number = 400){
    this.innerPaneSize = width;
  }

  getInnerPaneSize(){
    return this.innerPaneSize;
  }
}
