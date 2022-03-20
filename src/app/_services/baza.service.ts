import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BazaService {

  constructor(private http: HttpClient) { }

  wezWalute(symbol: string) {
    return this.http.get(`http://api.nbp.pl/api/exchangerates/rates/a/${symbol}/?format=json`);
  }
}
