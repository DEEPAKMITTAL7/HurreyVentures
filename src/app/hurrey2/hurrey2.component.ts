import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hurrey2',
  templateUrl: './hurrey2.component.html',
  styleUrls: ['./hurrey2.component.css']
})

export class Hurrey2Component {
  public showLogo: boolean = true;
  public searchText: string = '';
  public showAvtar: boolean = false;

  constructor(private router: Router) {
    setTimeout(() => {
      this.showLogo = false;
    }, 2000);
  }

  saveNewField() {
    console.log('clicked')
    this.router.navigate(['/user'], { queryParams: { data: this.searchText } });
  }
}