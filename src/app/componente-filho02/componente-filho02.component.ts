import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../model/Pessoa';

@Component({
  selector: 'app-componente-filho02',
  templateUrl: './componente-filho02.component.html',
  styleUrls: ['./componente-filho02.component.css']
})
export class ComponenteFilho02Component implements OnInit {
  selecionadoFilho02!: Pessoa;
  @Input() objFilho01!: Pessoa;

  constructor() {
    
   }

  ngOnInit(): void {
  }


}
