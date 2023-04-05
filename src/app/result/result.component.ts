import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  constructor(private route: ActivatedRoute , private router: Router) {}
  ngOninit(){}

 next(){
  this.router.navigate(["/questionPage"]);
 } 

}
