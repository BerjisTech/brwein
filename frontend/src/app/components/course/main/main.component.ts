import { ChangeDetectorRef, Component, HostListener, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { UIService } from '../../../services/ui.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  searchSuggestions: boolean = false;
  hasCustomSidebar: boolean = false;
  showSideBar: boolean = true;
  custom_inner_pane_px: number = 400;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private uiService: UIService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Trigger window resize event
      window.dispatchEvent(new Event('resize'));
    }

    this.uiService.showSidebar$.subscribe(showSidebar => {
      this.hasCustomSidebar = showSidebar;
      this.cdr.detectChanges();
    });
    if (!this.hasCustomSidebar) {
      this.custom_inner_pane_px = this.uiService.getInnerPaneSize();
    } else {
      this.custom_inner_pane_px = 100;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (!this.hasCustomSidebar) {
      this.custom_inner_pane_px = this.uiService.getInnerPaneSize();
    }
    this.showSideBar = window.innerWidth > 900;
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchSuggestions = target.value !== '' ? true : false;
  }
}
