import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Rate {
  currency: string;
  code: string;
  mid: number;
}

export interface CurrencyRate {
  table: string;
  no: string;
  effectiveDate: string;
  rates: Rate[];
}

@Injectable()
export class BazaService {

  constructor(private http: HttpClient) { }

  getExchangeRate(): Observable<CurrencyRate[]>
  {
    return this.http.get<CurrencyRate[]>('https://api.nbp.pl/api/exchangerates/tables/a/?format=json');
  }

}
