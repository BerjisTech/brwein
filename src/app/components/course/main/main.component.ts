import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { UIService } from '../../../services/ui.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  searchSuggestions: boolean = false;
  hasCustomSidebar: boolean = false;
  custom_inner_pane_px: number = 400;

  constructor(private uiService: UIService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.uiService.showSidebar$.subscribe(showSidebar => {
      this.hasCustomSidebar = showSidebar;
      this.cdr.detectChanges();
    });
    if (!this.hasCustomSidebar) {
      this.custom_inner_pane_px = this.uiService.getInnerPaneSize();
    }else{
      this.custom_inner_pane_px = 100;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (!this.hasCustomSidebar) {
      this.custom_inner_pane_px = this.uiService.getInnerPaneSize();
    }
  }
}
