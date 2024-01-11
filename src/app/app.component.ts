import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sham-byte';

  gradientStartColor = '#5D3AB7';
  gradientEndColor = '#DC7AFF';


   @HostListener('window:scroll', [])
   onScroll(): void {
    this.updateGradientOnScroll();
  }

  updateGradientOnScroll() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    const initialStartColor = '#5D3AB7';
    const initialEndColor = '#DC7AFF';

    this.gradientStartColor = this.interpolateColor(initialStartColor, initialEndColor, scrollPercentage);
    this.gradientEndColor = this.interpolateColor(initialEndColor, initialStartColor, scrollPercentage);
  }

  interpolateColor(startColor: string, endColor: string, progress: number): string {
    const r = Math.floor(parseInt(startColor.substr(1, 2), 16) * (1 - progress / 100) + parseInt(endColor.substr(1, 2), 16) * (progress / 100));
    const g = Math.floor(parseInt(startColor.substr(3, 2), 16) * (1 - progress / 100) + parseInt(endColor.substr(3, 2), 16) * (progress / 100));
    const b = Math.floor(parseInt(startColor.substr(5, 2), 16) * (1 - progress / 100) + parseInt(endColor.substr(5, 2), 16) * (progress / 100));
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  }

}
