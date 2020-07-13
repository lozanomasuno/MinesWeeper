import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-grill',
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.css'],
})
export class GrillComponent implements OnInit {
  /*
  public entradaAncho: number;
  public entradaLargo: number;
  public salidaAncho = {};
  public salidaLargo = {};
  public getRandomInt(a) {
    return Math.floor(Math.random() * Math.floor(a));
  }
  public setValuesAncho() {
    for (let y = 0; y < this.entradaLargo; y++) {
      this.salidaAncho[y] = this.getRandomInt(2);
      this.salidaLargo[y] = this.salidaAncho;
    }

    console.log(this.salidaLargo);
  }*/
  public bee: boolean;
  public revealed: boolean;
  public cols: number;
  public rows: number;
  public arr: any[] = [];
  public neighborCount: number;
  public totalBees = 30;
  public grid: number[];
  public options: any[];
  constructor() {}

  ngOnInit(): void {
    this.createGrid();
  }

  public thisFunctionDoesSomething() {
    console.log(this.options);
  }

  public biDimensionaArray() {
    this.arr = new Array(this.cols);
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] = new Array(this.rows);
    }
    return this.arr;
  }
  public createGrid() {
    this.grid = this.biDimensionaArray();
    for (let i = 0; i < this.cols; i++) {
      for (const j = 0; j < this.rows; j) {
        this.grid[i][j] = new this.cell();
      }
    }
    this.options = [];
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.options.push([i, j]);
      }
    }
  }
  public cell() {
    this.neighborCount = 0;
    this.bee = false;
    this.revealed = false;
  }
  public setCell() {
    this.bee = true;
    this.revealed = true;
  }
}
