import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamesTable } from "./games-table/games-table";
import { GameComponent } from "./game-component/game-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GamesTable, GameComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2000BaseAngular');
}
