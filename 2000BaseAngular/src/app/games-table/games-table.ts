import { Component, inject, OnInit } from '@angular/core';
import { GameService } from '../game-service';

@Component({
  selector: 'app-games-table',
  imports: [],
  templateUrl: './games-table.html',
  styleUrl: './games-table.css',
})
export class GamesTable implements OnInit {
  gameService = inject(GameService);
  games:Game[] = [];

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => this.games = games);
  }
}
