import { Component, HostListener } from '@angular/core';
import { UIService } from '../../../services/ui.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  searchSuggestions: boolean = false;
  hasCustomSidebar: boolean = true;
  custom_inner_pane_px : number = 0;

  constructor(private uiService: UIService) {
    this.hasCustomSidebar = this.uiService.getCustomSideBar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.custom_inner_pane_px = this.uiService.getCustomSideBar() ? 100 : 400;
    this.hasCustomSidebar = this.uiService.getCustomSideBar();
  }
}
