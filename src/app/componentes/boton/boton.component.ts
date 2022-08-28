import { Component, OnInit, Input } from '@angular/core';
//importe en el componente el input
@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  //importo el text y el imput del componente boton
  @Input() text: string = "";
  @Input() color: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log("hisiste click")
  }

}
