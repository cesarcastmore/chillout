import { Component, OnInit } from '@angular/core';
import { Card } from '../../shared/model/card';
import { Body } from '../../shared/model/body';
import { Header } from '../../shared/model/header';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  //Callbacks
  math: any = {
    sum: ((a: number, b: number) => {
      return a + b;
    }),
    divide: ((a: number, b: number) => {
      return a / b
    })
  }

  a: number = this.math.sum(32, 23);

  cards: Array < Card > = [{
    titulo: 'titulo 1',
    contador: 1,
    descripcion: 'descripcion 1',
    header: {
      titulo: 'Titulo 1'
    },
    body: {
      precio: 323.12,
      marca: 'NIKE',
      img: 'wfgdgdgdf'
    }
  }, {
    titulo: 'titulo 1',
    contador: 1,
    descripcion: 'descripcion 1',
    header: {
      titulo: 'Titulo 1'
    },
    body: {
      precio: 323.12,
      marca: 'NIKE',
      img: 'wfgdgdgdf'
    }
  }, {
    titulo: 'titulo 1',
    contador: 1,
    descripcion: 'descripcion 1',
    header: {
      titulo: 'Titulo 1'
    },
    body: {
      precio: 323.12,
      marca: 'NIKE',
      img: 'wfgdgdgdf'
    }
  }, {
    titulo: 'titulo 1',
    contador: 1,
    descripcion: 'descripcion 1',
    header: {
      titulo: 'Titulo 1'
    },
    body: {
      precio: 323.12,
      marca: 'NIKE',
      img: 'wfgdgdgdf'
    }
  }]


  constructor() {}

  ngOnInit() {}







}
