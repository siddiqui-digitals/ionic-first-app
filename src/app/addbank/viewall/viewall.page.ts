import { BanksService, SearchType } from '../../services/banks.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.page.html',
  styleUrls: ['./viewall.page.scss'],
  providers: [BanksService]
})


export class ViewallPage implements OnInit {
  data: any;
  prevData: any;
  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;

  // tslint:disable-next-line: max-line-length
  constructor(public loading: LoadingController, private banks: BanksService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.presentLoadingWithOptions();
    this.banks.getToken()
    .subscribe(data => {
      this.banks.token = data['token'];
      this.getData(data['token']);
    },
    err => {
      console.log('Error: ' + err.error);
    });
  }

  getData(token) {
    this.banks.getAccounts(token)
    .subscribe(data => {
      this.data = data;
      this.prevData = data;
      this.loading.dismiss();
    },
    err => {
      console.log(err.error);
    });
  }

  async presentLoadingWithOptions() {
    const loading = await this.loading.create({
      message: 'Loading...',
      translucent: true,
    });
    return await loading.present();
  }

  // postData() {
  //   let tkn: string;
  //   const getteokenURl = 'http://office-pc/appfortax/index.php/welcome/loginAPI?pkrs=cmV0YWlsXzIwMThfdGF4';
  //   const postData = new FormData();
  //   postData.append('uname' , 'admin');
  //   postData.append('pass' , 'Admin123456');

  //   this.http.post(getteokenURl, postData)
  //   .subscribe(data => {
  //     tkn = data['token'];
  //     this.getAccounts(tkn);
  //     console.log(data);
  //   },
  //   err => {
  //         console.log('Error: ' + err.error);
  //   });

  // }

  // getAccounts(tkn: string) {
  //   const url = 'http://office-pc/appfortax/index.php/webapi/fetchAll';
  //   const postData = new FormData();
  //   postData.append('active' , '-1');
  //   postData.append('typee' , 'all');
  //   postData.append('token' , tkn);
  //   postData.append('pkrs' , 'cmV0YWlsXzIwMThfdGF4');
  //   this.http.post(url, postData)
  //   .subscribe(data => {
  //     console.log(data);
  //     this.data = data;
  //   },
  //   err => {
  //     console.log(err.error);
  //     console.log('Error: ' + err.error);
  //   });
  // }

  getAccountsByToken() {
    this.banks.getToken();
  }

searchChanged() {
    // Call our service function which returns an Observable
    this.data = this.prevData;
    let item73: any;
    if (this.searchTerm !== '') {
      item73 = this.data.filter((item) => {
        return (item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || item.mobile.includes(this.searchTerm) );
      });
      this.data = item73;
    }
    // this.results = this.banks.searchData(this.searchTerm, this.type);
  }
  getBankDetail(ev) {
    this.router.navigate(['addbank/addnew', {id: ev}]);
  }

}
