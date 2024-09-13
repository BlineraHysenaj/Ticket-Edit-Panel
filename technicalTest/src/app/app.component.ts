import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // Keep this if you're using standalone components
  imports: [RouterOutlet],  // This is fine for standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrected the property name from `styleUrl` to `styleUrls`
})

export class AppComponent {
  title = 'technicalTest';
}
