import { Component, OnInit } from '@angular/core';
import { ThemeToggleService } from './services/theme-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private themeService: ThemeToggleService) {}

  ngOnInit() {
    this.themeService.toggleDarkThemePreference();
  }
}
