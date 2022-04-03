import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { BazaService } from 'src/app/_services/baza.service';

@Component({
  selector: 'wykres',
  templateUrl: './wykres.component.html',
  styleUrls: ['./wykres.component.css']
})
export class WykresComponent implements OnInit {
  private nbpFormatDaty = 'YYYY-MM-DD';
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };  
  
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  
  public barChartType: ChartType = 'line';
  
  public barChartLegend = true;  
  
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];


  constructor(private bazaService: BazaService) { }

  ngOnInit(): void {
  }

}
