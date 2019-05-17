import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

	nombre: string="castillo";
	descripcion: string="este es un ejemplo";

	usuario: any={
		nombre: 'cesar',
		apellido: 'castillo'

	} ;

  @Input() body: Body;

  constructor() { }

  ngOnInit() {
  }

  public execute(){
  	alert("hola");

  }


  public changeInput(event: any){
  	console.log(event.target.value);

  }


}
