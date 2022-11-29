import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../model/Pessoa';

@Component({
  selector: 'app-componente-filho01',
  templateUrl: './componente-filho01.component.html',
  styleUrls: ['./componente-filho01.component.css']
})
export class ComponenteFilho01Component implements OnInit {
  
  valorSelecionadoFilho01!: Pessoa;

  
  pessoas: Pessoa[] = [{
    "id": 1,
    "nome": "Guto",
    "telefone": [{
      "id": 1,
      "numero": 12345
    },
    {
      "id": 2,
      "numero": 65432
    }
    ]
  },
  {
    "id": 2,
    "nome": "Ana",
    "telefone": [{
      "id": 3,
      "numero": 88338
    }]
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
