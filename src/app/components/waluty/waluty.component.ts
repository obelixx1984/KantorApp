import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BazaService, TabelaNBP, Wskazniki } from 'src/app/_services/baza.service';

@Component({
  selector: 'waluty',
  templateUrl: './waluty.component.html',
  styleUrls: ['./waluty.component.css']
})
export class WalutyComponent implements OnInit {
  tabelanbp: Array<TabelaNBP> = [];

  pelnaLista: Array<Wskazniki> = [];
  krotkaLista: Array<Wskazniki> = [];
  ostatecznaLista: Array<Wskazniki> = [];

  pktWiecej = false;
  btnWiecej = 'Pokaż więcej';

  classFlags='currency-flag currency-flag-';

  constructor(private bazaService: BazaService) { }

  ngOnInit(): void { this.uruchomListeWalut(); }

  uruchomListeWalut(): void
  {
    this.bazaService.urlNBPTabelaA().subscribe( przedmiot => {
     this.tabelanbp = przedmiot;
     this.tabelanbp[0].rates.forEach( (wskaznik) => {
        this.pelnaLista.push(wskaznik);
     });
     this.krotkaLista.push(this.pelnaLista[1]);
     this.krotkaLista.push(this.pelnaLista[7]);
     this.krotkaLista.push(this.pelnaLista[10]);
     this.krotkaLista.push(this.pelnaLista[9]);
     this.krotkaLista.push(this.pelnaLista[13]);
     this.krotkaLista.push(this.pelnaLista[32]);
     this.krotkaLista.push(this.pelnaLista[12]);
     this.krotkaLista.push(this.pelnaLista[2]);
     this.ostatecznaLista = this.krotkaLista;
     console.log(this.krotkaLista[0]);
    });
  }

  zaladujWiecej(): void {
    if (this.pktWiecej)
    {
      this.ostatecznaLista = this.krotkaLista;
      this.btnWiecej = 'Pokaż więcej';
      this.pktWiecej = false;
    }
    else
    {
      this.ostatecznaLista = this.pelnaLista;
      this.btnWiecej = 'Pokaż mniej';
      this.pktWiecej = true;
    }
  }
}
