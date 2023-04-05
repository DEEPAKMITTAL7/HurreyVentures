import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-room',
  templateUrl: './user-room.component.html',
  styleUrls: ['./user-room.component.css']
})
export class UserRoomComponent {
  public user: string = '';
  public userProfile : string= '';
  public userName: string = '';
  public imageUrl: string = '';
  
  constructor(private route: ActivatedRoute , private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userProfile = params['data1'];
    });
    this.route.queryParams.subscribe((params) => {
      this.user = params['name'];
      console.log(this.user);
    });
    
  }
  joinRoom(){
    console.log('clicked');
    this.router.navigate(['/joinRoom'],{ queryParams: { data4: this.userProfile , userName: this.user } });
  }

  createRoom(){
      console.log('clicked');
      this.router.navigate(['/createRoom'],{ queryParams: { data4: this.userProfile , userName: this.user } });
      
    }

}
