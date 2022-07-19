import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css']
})
export class BabyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newPost = 'tshirt show here';

  onAdd() {
     this.newPost = "new post";
  }
}
