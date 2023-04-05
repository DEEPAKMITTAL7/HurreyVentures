import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level3-game',
  templateUrl: './level3-game.component.html',
  styleUrls: ['./level3-game.component.css'],
})
export class Level3GameComponent {
  public word2: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOninit() {
    this.route.queryParams.subscribe((params) => {
      this.word2 = params['data6'];
      console.log(this.word2, "vhv");
      console.log("first")
    });
  }
  data3(value: string) {
    this.router.navigate(['/level4'], { queryParams: { data7: value } });
    console.log(value);
  }
}
