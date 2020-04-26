import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tour-of-heroes';

  ngOnInit(): void {
    const a = 10;
    const b = 20;
  }
}
