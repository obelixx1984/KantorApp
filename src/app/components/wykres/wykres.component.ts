import { Component, Inject, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import * as moment from 'moment';
import { BazaService, Wskazniki } from 'src/app/_services/baza.service';

@Component({
  selector: 'wykres',
  templateUrl: './wykres.component.html',
  styleUrls: ['./wykres.component.css']
})
export class WykresComponent implements OnInit {
  @Input() kodwaluty: any;

  nbpFormatDaty = 'YYYY-MM-DD';

  public typWykresu: ChartType = 'line';

  public daneWykresu: Array<any> = [];
  public liniaXWykresu: Array<any> = [];

  public opcjeWykresu = 
    {
      borderColor: '#3f5118',
      borderWidth: 1,
      scaleShowVerticalLines: false,
      responsive: true
    };

  public legendaWykresu = false; 
  
  public nazwaWaluty: Array<any> = [];

  public dataOd: any;
  public dataDo: any;
  public teraz: any;
  public kurs = 'eur';
  
  constructor(private bazaService: BazaService) { }

  ngOnInit(): void {
    this.inicjujDate();
    this.inicjujWykres();
  }

  inicjujDate(): void 
  {
    this.teraz = moment();
    this.dataDo = this.teraz.format(this.nbpFormatDaty);
    this.dataOd = this.teraz.subtract(31, 'days').format(this.nbpFormatDaty);
  }

  inicjujWykres(): void
  {
    this.bazaService.urlNBPTabelaAHistoria(this.kodwaluty.code, this.dataOd, this.dataDo).subscribe(
      (rezultat) => {
        this.wczytajdaneWykresu(rezultat);
      }
    );
  }

  wczytajdaneWykresu(rezultat: any): void
  {
    let danezURL: Array<number> = new Array<number>();
    let daneURLXwykresu: Array<string> = new Array<string>();
    rezultat.rates.forEach((elementH: any) => {
      danezURL.push(elementH.mid);
      daneURLXwykresu.push(elementH.effectiveDate);
    });
    this.daneWykresu = [];
    this.daneWykresu.push({data: danezURL, label: 'Kurs ' + this.kodwaluty.code.toUpperCase()});
    this.liniaXWykresu = daneURLXwykresu;
  }

}
