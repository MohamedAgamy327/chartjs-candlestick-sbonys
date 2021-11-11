import { Component, OnInit } from "@angular/core";

import { Chart } from "chart.js";
import "./chartjs-chart-financial";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public chartFinancial: Chart;

  dataToPlot = [
    { t: 1491004800000, o: 31.11, h: 33.04, l: 30.58, c: 32.03 },
    { t: 1491177600000, o: 31.23, h: 34.77, l: 30.35, c: 32.24 },
    { t: 1491264000000, o: 31.08, h: 34.68, l: 29.54, c: 32.48 },
    { t: 1491350400000, o: 31.68, h: 33.49, l: 28.72, c: 30.46 },
    { t: 1491436800000, o: 29.4, h: 31.83, l: 27.02, c: 29.76 }
  ];

  constructor() {}

  ngOnInit(): void {
    this.chartFinancial = new Chart("canvasFinancial", {
      type: "candlestick",
      data: {
        datasets: [
          {
            label: "Financial Chart",
            data: this.dataToPlot
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
