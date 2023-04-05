import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from '../question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent  implements OnInit{
  public questions: Questions[] =[];
  public optionSelected: Questions[]=[];
  public location: string='';
  public userProfile: string= '';

  constructor(private route: ActivatedRoute , private router: Router) {}

  ngOnInit() {
      this.questions = [
          { name: 'What is AI?' },
          { name: 'What is Metaverse?' },
          { name: 'What is blockchain?' },
      ];
  }

  onNavigate(location: string){
    debugger;
  if(this.location === 'What is AI?') {
    debugger;
    this.router.navigate(['/ai']);
  } else if(location === 'What is Metaverse?') {
    this.router.navigate(['/metaverse']);
  }else{
    debugger;
    this.router.navigate(['/blockchain'],{ queryParams: { data4: this.userProfile} })  }
console.log(this.optionSelected);
  }
}
