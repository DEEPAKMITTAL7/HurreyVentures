import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrls: ['./hello-user.component.css'],
})
export class HelloUserComponent {
  public userName: string = '';
  public imageUrl: string = '';
  public imageSelected: boolean = false;

  constructor(private route: ActivatedRoute , private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userName = params['data'];
    });
  }
  onImageClick(url: string) {
    this.imageUrl = url;
    console.log(this.imageUrl);
    this.imageSelected = true;
  }
  next(){
    console.log('clicked');
    this.router.navigate(['/userRoom'], { queryParams: { data1: this.imageUrl , name: this.userName } });
  }
}
