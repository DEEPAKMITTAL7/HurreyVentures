import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level1-game',
  templateUrl: './level1-game.component.html',
  styleUrls: ['./level1-game.component.css']
})
export class Level1GameComponent {

  constructor(private route: ActivatedRoute , private router: Router) {}

  data(value: string){
    this.router.navigate(["/level2"],{ queryParams: { data5: value } });
    console.log(value)
  }
}
