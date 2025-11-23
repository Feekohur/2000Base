declare let Chessboard2: any;
import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GameService } from '../game-service';

@Component({
  selector: 'app-game-component',
  imports: [],
  templateUrl: './game-component.html',
  styleUrl: './game-component.css',
})
export class GameComponent {

  @ViewChild('board1') input:ElementRef | undefined;
  board:any; 

  ngAfterViewInit() {
    console.log(this.input);
    this.board = Chessboard2(this.input?.nativeElement.id, 'start');
  }
  
  ngOnInit(): void {
    this.gameService.getGame(1).subscribe(game => this.game = game);
  }
  gameService = inject(GameService);
  game:Game | undefined;
}
