import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TabelaNBP {
  table: string;
  no: string;
  effectiveDate: string;
  rates: Wskazniki[];
}

export interface Wskazniki {
  currency: string;
  code: string;
  mid: number;
}

@Injectable()
export class BazaService {

  constructor(private http: HttpClient) { }

  urlNBPTabelaA(): Observable<TabelaNBP[]>
  {
    return this.http.get<TabelaNBP[]>('https://api.nbp.pl/api/exchangerates/tables/a/?format=json');
  }

  urlNBPTabelaAHistoria(code: string, startDate: string, endDate: string): Observable<any> 
  {
    return this.http.get(`http://api.nbp.pl/api/exchangerates/rates/A/${code}/${startDate}/${endDate}?format=json`, {});
  }

}
