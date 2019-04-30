import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from './service';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent implements OnInit {
  title = 'Consumer Complaints';
  data: Data[];
  id = [];
  downloadCount = [];
  chart = [];
  constructor(private httpClient: HttpClient,
    private webServ:ApiService) {}

  ngOnInit() {
    this.webServ.getJson().subscribe((res: Data[]) =>{
    res.map(y => {
        this.id.push(y.id);
        this.downloadCount.push(y.downloadCount);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.id,
          datasets: [
            {
              data: this.downloadCount,
              backgroundColor: [
                'rgba(105, 0, 132, .2)',
              ],
              borderColor: [
                'rgba(200, 99, 132, .7)',
              ],
              borderWidth: 2,
              fill: true
            }
          ]
        },
        options: {
       
          legend: {
            display: true,
                 
            labels: {
              fontColor: 'rgb(255, 99, 132)',
              label: 'Something1',
          }
          },
          scales: {
            xAxes: [{
            display: true
            }],
            yAxes: [{
              display: true,
            }],
          }
        }
      });
     });
  }
}
