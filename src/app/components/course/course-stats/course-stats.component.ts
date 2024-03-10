import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-stats',
  templateUrl: './course-stats.component.html',
  styleUrls: ['./course-stats.component.scss']
})
export class CourseStatsComponent {
  @Input() data: any[] = [];
  @Input() x_axis_label: string = '';
  @Input() y_axis_label: string = '';

  multi: any[] = [];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = this.x_axis_label;
  yAxisLabel: string = this.y_axis_label;
  timeline: boolean = true;

  colorScheme: string = 'vivid';

  constructor() {
  }

  ngOnChanges(): void {
    this.multi = this.data;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
