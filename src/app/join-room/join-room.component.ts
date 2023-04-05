import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent {
  public user: string = '';
  public userProfile: string= '';
public roomCode: string = '';


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

beginGame(){
  this.router.navigate(["/begin"])
}
}
