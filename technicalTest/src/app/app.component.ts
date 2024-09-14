import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Renderer2, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Subtask Manager';
  assignee: string = 'Brian Griffin';
  coOwner: string = 'Peter Griffin';
  importance: string = 'Very Urgent';
  customerName: string = 'ABC Corp';
  invoiceId: string = 'INV123456';

  // Method to update specific fields based on user interaction
  // Logs the change and updates the respective property value
  updateField(fieldName: string, newValue: string) {
    console.log(`${fieldName} updated to: ${newValue}`);
    switch (fieldName) {
      case 'Assignee':
        this.assignee = newValue;
        break;
      case 'Co-owner':
        this.coOwner = newValue;
        break;
      case 'Importance':
        this.importance = newValue;
        break;
      case 'Customer Name':
        this.customerName = newValue;
        break;
      case 'Invoice ID':
        this.invoiceId = newValue;
        break;
    }
  }

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Select navigation links and view sections for interaction
      const navLinks = this.el.nativeElement.querySelectorAll('.nav-link') as NodeListOf<HTMLAnchorElement>;
      const viewSections = this.el.nativeElement.querySelectorAll('.view-section') as NodeListOf<HTMLElement>;

      // Select elements to show/hide
      const customCard = this.el.nativeElement.querySelector('.custom-card') as HTMLElement;
      const detailsSection = this.el.nativeElement.querySelector('.details-section') as HTMLElement;
      const subtaskSection = this.el.nativeElement.querySelector('.subtasks-section') as HTMLElement;

      const updateVisibility = () => {
        // Toggle visibility based on active section
        const isAnySectionActive = Array.from(viewSections).some((section: HTMLElement) =>
          section.classList.contains('active')
        );
        if (customCard) {
          this.renderer.setStyle(customCard, 'display', isAnySectionActive ? 'none' : 'block');
        }
        if (detailsSection) {
          this.renderer.setStyle(detailsSection, 'display', isAnySectionActive ? 'none' : 'block');
        }
        if (subtaskSection) {
          this.renderer.setStyle(subtaskSection, 'display', isAnySectionActive ? 'none' : 'block');
        }
      };

      updateVisibility(); // Initialize visibility

      navLinks.forEach((link: HTMLAnchorElement) => {
        // Add click event listener to navigation links
        this.renderer.listen(link, 'click', (event: MouseEvent) => {
          event.preventDefault();

          // Remove 'active' class from all nav links
          navLinks.forEach((item: HTMLAnchorElement) => {
            this.renderer.removeClass(item, 'active');
          });

          // Add 'active' class to clicked link and show the selected view section
          this.renderer.addClass(link, 'active');
          viewSections.forEach((section: HTMLElement) => {
            this.renderer.removeClass(section, 'active');
          });

          const selectedViewId = link.getAttribute('data-view');
          const selectedView = this.el.nativeElement.querySelector(`#${selectedViewId}`) as HTMLElement;
          
          if (selectedView) {
            this.renderer.addClass(selectedView, 'active');
          }

          updateVisibility(); // Re-update visibility after selection
        });
      });
    }
  }
}
