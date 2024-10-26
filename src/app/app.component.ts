import { Component } from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProjectsComponent } from './Components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,MainComponent,FooterComponent,ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfoli';
}
