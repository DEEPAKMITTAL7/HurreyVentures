import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {
  constructor(private route: ActivatedRoute , private router: Router) {}
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/resultPage']);
  }, 2000);
    }  
}
