import { Component, inject } from '@angular/core';
import { GameService } from '../game-service';
import * as Chessboard from '@chrisoakman/chessboardjs/'

@Component({
  selector: 'app-game-component',
  imports: [],
  templateUrl: './game-component.html',
  styleUrl: './game-component.css',
})
export class GameComponent {
  ngOnInit(): void {
    this.gameService.getGame(1).subscribe(game => this.game = game);
    Chessboard('board', 'start');
  }
  gameService = inject(GameService);
  game:Game | undefined;
}
