import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { Header } from '../model/header';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  header: Header = {
    titulo: 'Este es mi titulo'
  };

  public card: Card = {
    titulo: 'Titulo 1',
    contador: 0,
    nombre: 'cesar',
    descripcion: 'Esta es la descripcion',
    header: this.header,
    body: {
    	precio: 2312,
    	marca: 'Mabe',
    	img: 'www.google.com'
    }
  }

  seleccionado: boolean=false;


  public titulo: string = "titulo";




  constructor() {}

  ngOnInit() {}


  recibiContador(contador: number) {
    this.card.contador = this.card.contador + contador;
  }

}
