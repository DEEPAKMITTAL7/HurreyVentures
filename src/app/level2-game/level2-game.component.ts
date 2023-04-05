import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level2-game',
  templateUrl: './level2-game.component.html',
  styleUrls: ['./level2-game.component.css'],
})
export class Level2GameComponent {
  public word1: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.word1 = params['data5'];
      console.log(this.word1);
    });
  }

  data2(value: string) {
    this.router.navigate(['/level3'], { queryParams: { data6: value } });
    console.log(value);
  }
}
