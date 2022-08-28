import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //aca van las variabbles que voy a exportar
  titulo: string = 'Lista de Tareas:';

  constructor() { }

  ngOnInit(): void {
  }

}
