import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  @Output('onContador') contar: EventEmitter < number > = new EventEmitter < number > ();

  @Output('onSelect') selectEmitter: EventEmitter < boolean > = new EventEmitter < boolean > ();

  constructor() {}

  ngOnInit() {}

  public clicBoton() {
    this.contar.emit(1);

  }


  public onSelect(){
  	this.selectEmitter.emit(true);


  }

}
