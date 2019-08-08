import { BanksService, SearchType } from '../../services/banks.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.page.html',
  styleUrls: ['./addnew.page.scss'],
})
export class AddnewPage implements OnInit {
  info = {
    pid: '',
    name: '',
    address: '',
    mobile: '',
    custom_type: '',
  };
  constructor(private banks: BanksService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      // Check if parameter is passed
      if (params.id !== '' && params.id !== undefined) {
        this.banks.getToken().subscribe(data => {
            // tslint:disable-next-line: no-string-literal
            banks.getAccountById(params.id, data['token']).subscribe(result => {
              this.info = result[0];
          });
        });
      }
    });
  }


  ngOnInit() {
  }

}
