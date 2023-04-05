import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  public user: string = '';
  public userProfile: string= '';
  public roomName: string = '';
  public players: number = 0;

  constructor(private route: ActivatedRoute , private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userProfile = params['data4'];
    });
    this.route.queryParams.subscribe((params) => {
      this.user = params['userName'];
      console.log(this.user);
    });
}
createBtn(){
console.log('clicked');
    this.router.navigate(['/codeRoom'],{ queryParams: { data4: this.userProfile } });
  }

  onValidate(players: number){
    debugger;
    console.log(players)
  }
}

