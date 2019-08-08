import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Typescritps custom enum for searh types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class BanksService {
  // nurl = 'http://www.omdbapi.com/';
  // apiKey = '69223d1c';
  token: string;

  constructor(private http: HttpClient) { }

  getToken() {
    const getteokenURl = 'http://kg16.info.pk/index.php/welcome/loginAPI?pkrs=cmV0YWlsXzIwMThfdGF4';
    const postData = new FormData();
    postData.append('uname' , 'admin');
    postData.append('pass' , '9999');
    postData.append('mob_code' , '1840');
    // return observable...
    return this.http.post(getteokenURl, postData);
  }

  getAccounts(tkn) {
    const nurl = 'http://kg16.info.pk/index.php/webapi/fetchAllAccounts';
    const postData = new FormData();
    postData.append('active' , '-1');
    postData.append('typee' , 'all');
    postData.append('token' , tkn);
    postData.append('pkrs' , 'cmV0YWlsXzIwMThfdGF4');
    return this.http.post(nurl, postData);
  }

  getBanks(tkn) {
    const nurl = 'http://office-pc/appfortax/index.php/webapi/fetchAllBanks';
    const postData = new FormData();
    postData.append('active' , '-1');
    postData.append('typee' , 'all');
    postData.append('token' , tkn);
    postData.append('pkrs' , 'cmV0YWlsXzIwMThfdGF4');
    return this.http.post(nurl, postData);
  }

  getAccountById(id: any, tkn) {
    const nurl = 'http://kg16.info.pk/index.php/webapi/fetchAccount';
    const postData = new FormData();
    postData.append('token' , tkn);
    postData.append('pid' , id);
    return this.http.post(nurl, postData);
  }

  // searchData(title: string, type: SearchType): Observable<any> {
  //   return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
  //     // tslint:disable-next-line: no-string-literal
  //     map(results => results['Search'])
  //   );
  // }

  // getDetails(id) {
  //   return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  // }

}
