import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent {
  
  constructor(private route: ActivatedRoute , private router: Router) {}
  startGame(){
    this.router.navigate(["/level1"])
  }
}
