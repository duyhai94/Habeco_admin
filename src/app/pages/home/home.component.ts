import { AfterViewInit, Component, NgModule, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexMarkers,
  ApexYAxis,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export type ChartOptionsPie = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild("chart") chart: ChartComponent;
  @ViewChild("chart") pieChart: ChartComponent;
  public pieChartOptions;
  public chartOptions;
  list = [{
    icon:  'assets/svg/icon-amount.svg',
    title: 'Tổng số hàng hóa',
    amount: '156.489'
  },
  {
    icon: 'assets/svg/nhapkho.svg',
    title: 'Nhập kho',
    amount: '123.481'
  },
  {
    icon:  'assets/svg/xuatkho.svg',
    title: 'Xuất kho',
    amount: '15.489'
  },
  {
    icon:  'assets/svg/chietnap.svg',
    title: 'Chiết nạp',
    amount: '56.489'
  },
  {
    icon:  'assets/svg/baoduong.svg',
    title: 'Bảo dưỡng',
    amount: '16.489'
  }
]
  listFilter = [
    
    {
        Text: 'Thời gian',
        type: 'date',
        data: [],
        condition: 'date'
    },
    {
        Text: '',
        type: 'search',
        condition: 'fullText'
    }];
  constructor() { 

    this.pieChartOptions = {
      series: [12, 5, 5, 5, 0],
      chart: {
        width: 580,
        type: "pie"
      },
      labels: ["Nhập bảo dưỡng (12)", "Chờ bảo dưỡng (5)", "Đang bảo dưỡng (5)", "Bảo dưỡng xong (5)", "Bảo dưỡng thất bại (0)"],
      colors: ["#3C6ABA","#14985E","#FFEA37","#EB1A25"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    
    this.chartOptions = {
      series: [
        {
          name: "Nhập",
          data: [150, 252, 75, 300, 320, 325, 330,285, 290, 338, 361, 325, 320, 337, 100]
        },
        {
          name: "Xuất",
          data: [120, 115, 148, 184, 170, 130, 136,125, 115, 145, 186, 177, 133, 138, 200]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#14985E"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Xuất nhập kho",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ["10/04/2021","10/04/2021","10/04/2021","10/04/2021","10/04/2021","10/04/2021","10/04/2021","10/04/2021","10/04/2021","10/04/2021","10/04/2021","10/04/2021","10/04/2021","10/04/2021","10/04/2021" ],
        title: {
          text: ""
        }
      },
      yaxis: {
        title: {
          text: ""
        },
        min: 5,
        max: 400
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
  }


  handleCallback(ev){

  }

}