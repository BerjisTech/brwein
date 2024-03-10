import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  constructor() { }

  showSidebar :boolean = false;

  setCustomSideBar(showSidebar :boolean = false){
    this.showSidebar = showSidebar;
    return showSidebar;
  }

  getCustomSideBar(){
    return this.showSidebar;
  }
}
