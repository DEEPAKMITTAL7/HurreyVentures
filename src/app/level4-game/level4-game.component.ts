import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level4-game',
  templateUrl: './level4-game.component.html',
  styleUrls: ['./level4-game.component.css']
})
export class Level4Component {
  public word3: string='';
  constructor(private route: ActivatedRoute , private router: Router) {}
  
  ngOninit(){
    this.route.queryParams.subscribe((params) => {
      this.word3 = params['data7'];
    });
  }

  data4(value: string){
    this.router.navigate(["/responsePage"],{ queryParams: { data8: value } });
    console.log(value)
  }
}
