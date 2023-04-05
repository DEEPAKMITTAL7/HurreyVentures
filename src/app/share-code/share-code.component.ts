import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-share-code',
  templateUrl: './share-code.component.html',
  styleUrls: ['./share-code.component.css']
})
export class ShareCodeComponent {
  public userName: string= '';
  public userProfile: string='';
  public roomCode: string='';

  constructor(private route: ActivatedRoute , private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userProfile = params['data4'];
    });
}
start(){
  this.router.navigate(["/begin"])
}
}
