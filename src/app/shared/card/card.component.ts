import { Component, OnInit, Input } from '@angular/core';
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

  contadorPadre: number= 0;

  @Input() card: Card;

  seleccionado: boolean=false;
  titulo: string = "titulo";



  constructor() {}

  ngOnInit() {}


  recibiContador(contador: number) {
    this.card.contador = this.card.contador + contador;
  }

}
