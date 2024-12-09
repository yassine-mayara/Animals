import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MayaraMenuComponent } from './mayara-menu/mayara-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MayaraMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'med_yassine_mayara';
}
