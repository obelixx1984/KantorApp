import { Component, OnInit } from '@angular/core';
import { BazaService, CurrencyRate, Rate } from '../_services/baza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stocks: Array<CurrencyRate> = [];

  pelnaLista: Array<Rate> = [];
  krotkaLista: Array<Rate> = [];
  ostatecznaLista: Array<Rate> = [];
  
  symbols: Array<string> = [];

  constructor(private bazaService: BazaService) { }

  ngOnInit(): void { this.get(); }

  get(): void
  {
    this.bazaService.getExchangeRate().subscribe( item => {
     this.stocks = item;
     this.stocks[0].rates.forEach( (rate) => {
        this.pelnaLista.push(rate);
     });
     this.krotkaLista.push(this.pelnaLista[1]);
     this.krotkaLista.push(this.pelnaLista[7]);
     this.krotkaLista.push(this.pelnaLista[10]);
     this.krotkaLista.push(this.pelnaLista[9]);
     this.ostatecznaLista = this.krotkaLista;
     console.log(this.krotkaLista[0]);
    });
  }
}
