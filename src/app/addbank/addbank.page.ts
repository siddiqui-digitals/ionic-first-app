import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbank',
  templateUrl: './addbank.page.html',
  styleUrls: ['./addbank.page.scss'],
})
export class AddbankPage implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'ADD BANK';
  }

}
