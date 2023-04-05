import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question3-blockchain',
  templateUrl: './question3-blockchain.component.html',
  styleUrls: ['./question3-blockchain.component.css']
})
export class Question3BlockchainComponent {
  public userProfile: string= '';

  constructor(private route: ActivatedRoute , private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userProfile = params['data4'];
    });
}
}
