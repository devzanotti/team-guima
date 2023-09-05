import { Component } from '@angular/core';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.css']
})
export class SectionAboutComponent {
  isExpanded = false;

  toggleContent(){    
    this.isExpanded = !this.isExpanded;
  }
}
