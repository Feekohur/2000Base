import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  constructor(private http:HttpClient) { }
  
  getGames(){
    return this.http.get<Game[]>('https://localhost:7039/api/game')
  }

  getGame(id:number){
    return this.http.get<Game>(`https://localhost:7039/api/game/${id}`)
  }
  
}
