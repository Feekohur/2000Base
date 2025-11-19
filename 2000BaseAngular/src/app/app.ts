import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamesTable } from "./games-table/games-table";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GamesTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2000BaseAngular');
}
