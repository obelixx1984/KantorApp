import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChartType } from 'chart.js';
import * as moment from 'moment';
import { BazaService } from 'src/app/_services/baza.service';

@Component({
  selector: 'wykres',
  templateUrl: './wykres.component.html',
  styleUrls: ['./wykres.component.css']
})
export class WykresComponent implements OnInit {
  
  nbpFormatDaty = 'YYYY-MM-DD';
  nowaDataOd: any;

  public typWykresu: ChartType = 'line';

  public daneWykresu: Array<any> = [];
  public liniaXWykresu: Array<any> = [];

  public opcjeWykresu = 
    {
      borderColor: '#21273B',
      borderWidth: 2,
      scaleShowVerticalLines: true,
      backgroundColor: 'rgba(148,159,177,0.5)',
      responsive: true,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: '#21273B',
      pointHoverRadius: 4,
      fill: 'origin'
    };

  public legendaWykresu = false; 
  
  public dataOd: any;
  public dataDo: any;
  public teraz: any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private bazaService: BazaService) { }

  ngOnInit(): void {
    this.inicjujDate();
    this.inicjujWykres();
  }

  inicjujDate(): void 
  {
    this.teraz = moment();
    this.dataDo = this.teraz.format(this.nbpFormatDaty);
    this.dataOd = this.teraz.subtract(30, 'days').format(this.nbpFormatDaty);
  }

  inicjujWykres(): void
  {
    let dataStart = this.zmienFormatDaty(this.dataOd);
    this.bazaService.urlNBPTabelaAHistoria(this.data, dataStart, this.dataDo).subscribe(
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
    this.daneWykresu.push({data: danezURL, label: 'Kurs ' + this.data.toUpperCase()});
    this.liniaXWykresu = daneURLXwykresu;
  }

  zmianaDatyOd(): void {
    this.nowaDataOd = this.zmienFormatDaty(this.dataOd);
    this.inicjujWykres();
  }

  zmienFormatDaty(date: any): string {
    if (date instanceof Date) {
      let formatDaty = moment(date.toUTCString());
      return formatDaty.format(this.nbpFormatDaty);
    } else {
      let formatDaty = moment(date);
      return formatDaty.format(this.nbpFormatDaty);
    }
  }
}